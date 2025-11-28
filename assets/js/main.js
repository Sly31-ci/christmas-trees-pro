// ========================================
// MAIN.JS - Script Principal
// ========================================

// Note: Countdown is now handled by i18n.js

// === MOBILE MENU ===
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn && mainNav) {
    // Create mobile Réserver button
    const mobileReserverBtn = document.createElement('a');
    mobileReserverBtn.href = 'contact.html';
    mobileReserverBtn.className = 'btn btn-primary';
    mobileReserverBtn.setAttribute('data-i18n', 'nav.book');
    mobileReserverBtn.textContent = window.ChristmasI18n ? window.ChristmasI18n.t('nav.book') : 'Réserver';
    mobileReserverBtn.style.cssText = 'margin-top: 1rem; width: 100%; text-align: center;';

    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('mobile-open');
        mobileMenuBtn.textContent = mainNav.classList.contains('mobile-open') ? '✕' : '☰';

        // Add Réserver button when menu opens
        if (mainNav.classList.contains('mobile-open')) {
            if (!mainNav.querySelector('.btn-primary')) {
                mainNav.appendChild(mobileReserverBtn);
            }
        }
    });

    // Fermer le menu au clic sur un lien
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('mobile-open');
            mobileMenuBtn.textContent = '☰';
        });
    });

    // Close menu when clicking Réserver button
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

// Observer toutes les sections
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

    // Navigation par dots
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
    // Ouvrir lightbox
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

    // Fermer lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Fermer au clic sur le fond
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Fermer avec Escape
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

// Attacher confetti au CTA principal
const ctaConfetti = document.getElementById('ctaConfetti');
if (ctaConfetti) {
    ctaConfetti.addEventListener('click', (e) => {
        createConfetti();
    });
}

// === LAZY LOADING IMAGES ===
if ('loading' in HTMLImageElement.prototype) {
    // Le navigateur supporte lazy loading natif
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback pour navigateurs plus anciens
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

    // Ajouter ombre au scroll
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

// Exposer les fonctions globalement si nécessaire
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
            alert('Veuillez entrer un email valide');
            return;
        }

        // Simulate API call
        console.log('Newsletter subscription:', email);

        // Show success message
        const successMsg = document.createElement('div');
        successMsg.textContent = '✓ Inscription réussie !';
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
    console.log('Analytics Event:', eventName, eventData);

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
skipLink.textContent = 'Aller au contenu principal';
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

// === Console Message ===
console.log('%c🎄 Christmas Tree Pros 🎄', 'color: #2D5016; font-size: 20px; font-weight: bold;');
console.log('%cSite développé avec ❤️ pour les fêtes de fin d\'année', 'color: #C41E3A; font-size: 12px;');

// Export functions if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createConfetti,
        validateEmail,
        validatePhone,
        trackEvent
    };
}