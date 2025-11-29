// ========================================
// MAIN.JS - Main Script
// ========================================

// Note: Countdown logic migrated from i18n.js

// === COUNTDOWN ===
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();

    // Target: December 25 at 00:00:00 in user's local timezone
    let christmas = new Date(currentYear, 11, 25, 0, 0, 0);

    // If Christmas has passed this year, target next year
    if (now > christmas) {
        christmas = new Date(currentYear + 1, 11, 25, 0, 0, 0);
    }

    const diff = christmas - now;

    const countdownElement = document.getElementById('countdown');

    if (!countdownElement) return;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');

        // Static labels in English
        const labelsMap = {
            'days-label': 'Days',
            'hours-label': 'H',
            'minutes-label': 'Min',
            'seconds-label': 'Sec'
        };

        Object.entries(labelsMap).forEach(([id, text]) => {
            const el = document.getElementById(id);
            if (el) el.textContent = text;
        });
    } else {
        // Christmas is here!
        countdownElement.innerHTML = `<div style="font-size: 1.2rem; font-weight: 700;">🎄 Merry Christmas! 🎅</div>`;
    }
}

// Initialize countdown
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('countdown')) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});

// === MOBILE MENU ===
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn && mainNav) {
    // Create mobile Book button
    const mobileReserverBtn = document.createElement('a');
    mobileReserverBtn.href = 'contact.html';
    mobileReserverBtn.className = 'btn btn-primary';
    mobileReserverBtn.setAttribute('data-i18n', 'nav.book');
    mobileReserverBtn.textContent = window.ChristmasI18n ? window.ChristmasI18n.t('nav.book') : 'Book Now';
    mobileReserverBtn.style.cssText = 'margin-top: 1rem; width: 100%; text-align: center;';

    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('mobile-open');
        mobileMenuBtn.textContent = mainNav.classList.contains('mobile-open') ? '✕' : '☰';

        // Add Book button when menu opens
        if (mainNav.classList.contains('mobile-open')) {
            if (!mainNav.querySelector('.btn-primary')) {
                mainNav.appendChild(mobileReserverBtn);
            }
        }
    });

    // Close menu when clicking a link
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('mobile-open');
            mobileMenuBtn.textContent = '☰';
        });
    });

    // Close menu when clicking Book button
    mobileReserverBtn.addEventListener('click', () => {
        mainNav.classList.remove('mobile-open');
        mobileMenuBtn.textContent = '☰';
    });
}



// === SCROLL ANIMATIONS (INTERSECTION OBSERVER) ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing after animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// === TESTIMONIALS CAROUSEL ===
if (document.querySelector('.testimonial')) {
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.testimonial-dot');

    function showTestimonial(index) {
        testimonials.forEach(t => t.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        if (testimonials[index] && dots[index]) {
            testimonials[index].classList.add('active');
            dots[index].classList.add('active');
            currentTestimonial = index;
        }
    }

    // Navigation by dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });

    // Auto-rotation
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// === LIGHTBOX ===
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

if (lightbox && lightboxImage) {
    // Open lightbox
    document.querySelectorAll('.realisation-card').forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('img');
            if (img) {
                lightboxImage.src = img.src;
                lightboxImage.alt = img.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close with Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// === CONFETTI EFFECT ===
function createConfetti() {
    const colors = ['#D4AF37', '#C41E3A', '#2D5016', '#FFFEF7'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.width = (Math.random() * 8 + 5) + 'px';
        confetti.style.height = confetti.style.width;

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }
}

// Attach confetti to main CTA
const ctaConfetti = document.getElementById('ctaConfetti');
if (ctaConfetti) {
    ctaConfetti.addEventListener('click', (e) => {
        createConfetti();
    });
}

// === LAZY LOADING IMAGES ===
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for older browsers
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// === HEADER SCROLL EFFECT ===
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    }

    lastScroll = currentScroll;
});

// === FORM VALIDATION HELPER ===
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s+()-]{10,}$/;
    return re.test(phone);
}

// Expose functions globally if needed
window.validateEmail = validateEmail;
window.validatePhone = validatePhone;
window.createConfetti = createConfetti;

// === NEWSLETTER SUBSCRIPTION ===
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email');
            return;
        }

        // Simulate API call

        // Show success message
        const successMsg = document.createElement('div');
        successMsg.textContent = '✓ Subscription successful!';
        successMsg.style.cssText = 'color: var(--color-accent); font-weight: 600; margin-top: 0.5rem;';
        form.appendChild(successMsg);

        form.reset();

        setTimeout(() => {
            successMsg.remove();
        }, 3000);
    });
});

// === PERFORMANCE: Debounce function ===
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// === ANALYTICS (Placeholder) ===
function trackEvent(eventName, eventData = {}) {
    // In production, integrate with Google Analytics, Mixpanel, etc.
    // Example: gtag('event', eventName, eventData);
}

// Track page view
trackEvent('page_view', {
    page: window.location.pathname
});

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-accent').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('cta_click', {
            text: btn.textContent.trim(),
            href: btn.href || 'button'
        });
    });
});

// === ACCESSIBILITY: Skip to main content ===
const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-primary);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);



// Export functions if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createConfetti,
        validateEmail,
        validatePhone,
        trackEvent
    };
}