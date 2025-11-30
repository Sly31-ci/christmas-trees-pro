// ========================================
// SECURITY-UTILS.JS - Security Utilities
// ========================================

/**
 * Security utilities for input sanitization and validation
 * Provides XSS protection, input validation, and rate limiting
 */

// === INPUT SANITIZATION ===

/**
 * Sanitize text input to prevent XSS
 * @param {string} input - User input to sanitize
 * @returns {string} - Sanitized text
 */
function sanitizeText(input) {
    if (!input) return '';

    // Convert to string and trim
    const text = String(input).trim();

    // Remove HTML tags
    const div = document.createElement('div');
    div.textContent = text;

    return div.innerHTML;
}

/**
 * Sanitize HTML content using DOMPurify
 * @param {string} html - HTML content to sanitize
 * @returns {string} - Sanitized HTML
 */
function sanitizeHTML(html) {
    if (!html) return '';

    // Check if DOMPurify is available
    if (typeof DOMPurify !== 'undefined') {
        return DOMPurify.sanitize(html, {
            ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div'],
            ALLOWED_ATTR: ['href', 'target', 'rel', 'class', 'id', 'style']
        });
    }

    // Fallback: strip all HTML
    return sanitizeText(html);
}

/**
 * Validate and sanitize email
 * @param {string} email - Email to validate
 * @returns {string|null} - Sanitized email or null if invalid
 */
function sanitizeEmail(email) {
    if (!email) return null;

    const sanitized = sanitizeText(email).toLowerCase();
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    return emailRegex.test(sanitized) ? sanitized : null;
}

/**
 * Validate and sanitize phone number
 * @param {string} phone - Phone number to validate
 * @returns {string|null} - Sanitized phone or null if invalid
 */
function sanitizePhone(phone) {
    if (!phone) return null;

    // Remove all non-digit characters except + and spaces
    const sanitized = String(phone).replace(/[^\d+\s()-]/g, '');

    // Must have at least 10 digits
    const digitsOnly = sanitized.replace(/\D/g, '');

    return digitsOnly.length >= 10 ? sanitized : null;
}

/**
 * Sanitize name (letters, spaces, hyphens only)
 * @param {string} name - Name to sanitize
 * @returns {string} - Sanitized name
 */
function sanitizeName(name) {
    if (!name) return '';

    // Allow letters, spaces, hyphens, apostrophes
    return String(name)
        .trim()
        .replace(/[^a-zA-ZÀ-ÿ\s'-]/g, '')
        .substring(0, 100); // Max 100 chars
}

/**
 * Sanitize general text with length limit
 * @param {string} text - Text to sanitize
 * @param {number} maxLength - Maximum length
 * @returns {string} - Sanitized text
 */
function sanitizeTextWithLimit(text, maxLength = 1000) {
    if (!text) return '';

    return sanitizeText(text).substring(0, maxLength);
}

// === RATE LIMITING ===

/**
 * Simple rate limiter using localStorage
 */
class RateLimiter {
    constructor(key, maxAttempts = 3, windowMs = 60000) {
        this.key = `ratelimit_${key}`;
        this.maxAttempts = maxAttempts;
        this.windowMs = windowMs;
    }

    /**
     * Check if action is allowed
     * @returns {boolean} - True if allowed, false if rate limited
     */
    isAllowed() {
        try {
            const now = Date.now();
            const data = this.getData();

            // Clean old attempts
            data.attempts = data.attempts.filter(time => now - time < this.windowMs);

            // Check if under limit
            if (data.attempts.length >= this.maxAttempts) {
                this.saveData(data);
                return false;
            }

            // Add new attempt
            data.attempts.push(now);
            this.saveData(data);

            return true;
        } catch (e) {
            // If localStorage fails, allow the action
            console.warn('Rate limiter error:', e);
            return true;
        }
    }

    /**
     * Get remaining time until next allowed attempt
     * @returns {number} - Milliseconds until next attempt
     */
    getTimeUntilReset() {
        try {
            const now = Date.now();
            const data = this.getData();

            if (data.attempts.length === 0) return 0;

            const oldestAttempt = Math.min(...data.attempts);
            const resetTime = oldestAttempt + this.windowMs;

            return Math.max(0, resetTime - now);
        } catch (e) {
            return 0;
        }
    }

    /**
     * Reset rate limit
     */
    reset() {
        try {
            localStorage.removeItem(this.key);
        } catch (e) {
            console.warn('Failed to reset rate limit:', e);
        }
    }

    getData() {
        try {
            const stored = localStorage.getItem(this.key);
            return stored ? JSON.parse(stored) : { attempts: [] };
        } catch (e) {
            return { attempts: [] };
        }
    }

    saveData(data) {
        try {
            localStorage.setItem(this.key, JSON.stringify(data));
        } catch (e) {
            console.warn('Failed to save rate limit data:', e);
        }
    }
}

// === REQUEST SIGNING ===

/**
 * Generate a simple hash for request validation
 * @param {Object} data - Data to hash
 * @param {string} secret - Secret key (timestamp-based)
 * @returns {string} - Hash string
 */
async function generateRequestHash(data, secret) {
    const message = JSON.stringify(data) + secret;

    // Use SubtleCrypto if available
    if (window.crypto && window.crypto.subtle) {
        try {
            const encoder = new TextEncoder();
            const dataBuffer = encoder.encode(message);
            const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        } catch (e) {
            console.warn('Crypto API failed, using fallback hash');
        }
    }

    // Fallback: simple hash
    let hash = 0;
    for (let i = 0; i < message.length; i++) {
        const char = message.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16);
}

/**
 * Add security metadata to form data
 * @param {Object} formData - Form data object
 * @returns {Object} - Enhanced form data with security fields
 */
async function addSecurityMetadata(formData) {
    const timestamp = Date.now();
    const nonce = Math.random().toString(36).substring(2, 15);

    // Add metadata
    const enhancedData = {
        ...formData,
        _timestamp: timestamp,
        _nonce: nonce,
        _userAgent: navigator.userAgent.substring(0, 200),
        _timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    // Generate hash
    const hash = await generateRequestHash(enhancedData, timestamp.toString());
    enhancedData._hash = hash;

    return enhancedData;
}

// === RECAPTCHA INTEGRATION ===

/**
 * Execute reCAPTCHA and get token
 * @param {string} action - Action name for reCAPTCHA
 * @returns {Promise<string|null>} - reCAPTCHA token or null
 */
async function executeRecaptcha(action = 'submit') {
    // Check if reCAPTCHA is loaded and configured
    if (typeof grecaptcha === 'undefined' || !window.RECAPTCHA_SITE_KEY) {
        console.info('reCAPTCHA not configured - skipping (this is OK for now)');
        return null;
    }

    try {
        await grecaptcha.ready();
        const token = await grecaptcha.execute(window.RECAPTCHA_SITE_KEY, { action });
        return token;
    } catch (error) {
        console.error('reCAPTCHA error:', error);
        return null;
    }
}

// === EXPORT FUNCTIONS ===

// Make functions available globally
window.SecurityUtils = {
    sanitizeText,
    sanitizeHTML,
    sanitizeEmail,
    sanitizePhone,
    sanitizeName,
    sanitizeTextWithLimit,
    RateLimiter,
    generateRequestHash,
    addSecurityMetadata,
    executeRecaptcha
};

// Also export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.SecurityUtils;
}
