// ========================================
// I18N.JS - Internationalization System
// ========================================
// Automatic language detection (FR/EN)
// Timezone-aware Christmas countdown
// Dynamic translation system

/**
 * Translation Dictionary
 * Contains all translatable content for FR and EN
 */
const translations = {
    fr: {
        // Meta & SEO
        'meta.title': 'Christmas Tree Pros - Décoration & Ambiance',
        'meta.description': 'Christmas Tree Pros - Spécialiste décoration sapins et maisons pour les fêtes. Installation professionnelle, créations sur-mesure.',

        // Navigation
        'nav.home': 'Accueil',
        'nav.gallery': 'Galerie',
        'nav.services': 'Services',
        'nav.about': 'À propos',
        'nav.blog': 'Blog',
        'nav.contact': 'Contact',
        'nav.book': 'Réserver',

        // Countdown
        'countdown.prefix': 'Avant Noël :',
        'countdown.days': 'Jours',
        'countdown.hours': 'H',
        'countdown.minutes': 'Min',
        'countdown.seconds': 'Sec',
        'countdown.christmas': '🎄 Joyeux Noël ! 🎅',

        // Hero Section
        'hero.title': 'Transformez votre maison en un véritable conte de Noël',
        'hero.subtitle': 'Installation professionnelle de décorations de Noël sur mesure. Émerveillement garanti pour toute la famille.',
        'hero.cta.quote': 'Demandez un devis gratuit',
        'hero.cta.gallery': 'Voir nos réalisations',

        // Realizations Section
        'realizations.title': 'Nos Plus Belles Réalisations',
        'realizations.subtitle': 'Découvrez nos créations qui ont émerveillé nos clients',
        'realizations.tree.title': 'Sapin Grand Luxe',
        'realizations.tree.desc': 'Décoration premium avec ornements dorés',
        'realizations.exterior.title': 'Façade Féerique',
        'realizations.exterior.desc': 'Illuminations et décors extérieurs spectaculaires',
        'realizations.interior.title': 'Ambiance Chaleureuse',
        'realizations.interior.desc': 'Décoration d\'intérieur harmonieuse et élégante',
        'realizations.view': 'Voir le projet',

        // Services Section
        'services.title': 'Nos Services',
        'services.subtitle': 'Des prestations complètes pour une magie de Noël sans effort',
        'services.trees.title': 'Sapins de Noël',
        'services.trees.desc': 'Sélection et décoration de sapins naturels ou artificiels. Installation et retrait inclus.',
        'services.interior.title': 'Décor Intérieur',
        'services.interior.desc': 'Création d\'ambiances féeriques avec guirlandes, luminaires et ornements raffinés.',
        'services.exterior.title': 'Décor Extérieur',
        'services.exterior.desc': 'Illumination de façades, jardins et terrasses. Installation sécurisée et professionnelle.',
        'services.custom.title': 'Sur-Mesure',
        'services.custom.desc': 'Créations personnalisées selon vos envies et votre style. Conseil déco inclus.',

        // Testimonials Section
        'testimonials.title': 'Ils Nous Font Confiance',
        'testimonials.1.text': '"Une équipe formidable ! Notre maison était magnifique, les enfants étaient émerveillés. Service impeccable du début à la fin."',
        'testimonials.1.author': '— Sophie et Marc, Paris',
        'testimonials.2.text': '"Professionnalisme et créativité au rendez-vous. Nos décorations extérieures ont fait sensation dans tout le quartier !"',
        'testimonials.2.author': '— Famille Dubois, Lyon',
        'testimonials.3.text': '"Un gain de temps précieux pendant les fêtes. La déco était sublime et l\'installation très rapide. Je recommande vivement !"',
        'testimonials.3.author': '— Claire Martin, Bordeaux',

        // CTA Section
        'cta.title': 'Prêt à Vivre la Magie de Noël ?',
        'cta.subtitle': 'Réservez dès maintenant votre installation avant qu\'il ne soit trop tard !',
        'cta.button': 'Je réserve ma déco de rêve',

        // Footer
        'footer.company.desc': 'Spécialistes de la décoration de Noël depuis 2015. Émerveillement et professionnalisme garantis.',
        'footer.navigation': 'Navigation',
        'footer.contact': 'Contact',
        'footer.follow': 'Suivez-nous',
        'footer.rights': '© 2024 Christmas Tree Pros. Tous droits réservés.',

        // Contact Page
        'contact.title': 'Contactez-nous',
        'contact.subtitle': 'Transformons ensemble votre vision de Noël en réalité',
        'contact.name.label': 'Nom complet',
        'contact.name.placeholder': 'Votre nom',
        'contact.email.label': 'Email',
        'contact.email.placeholder': 'votre@email.com',
        'contact.phone.label': 'Téléphone',
        'contact.phone.placeholder': '+33 6 12 34 56 78',
        'contact.service.label': 'Service souhaité',
        'contact.service.placeholder': 'Sélectionnez un service',
        'contact.service.tree': 'Sapin de Noël',
        'contact.service.interior': 'Décoration intérieure',
        'contact.service.exterior': 'Décoration extérieure',
        'contact.service.custom': 'Projet sur-mesure',
        'contact.message.label': 'Message',
        'contact.message.placeholder': 'Parlez-nous de votre projet...',
        'contact.submit': 'Envoyer ma demande',
        'contact.info.title': 'Informations de Contact',
        'contact.hours.title': 'Horaires d\'ouverture',
        'contact.hours.weekdays': 'Lundi - Samedi',
        'contact.hours.time': '9h00 - 18h00',
        'contact.hours.sunday': 'Dimanche : Fermé',

        // About Page
        'about.title': 'À Propos de Nous',
        'about.subtitle': 'Passion et excellence au service de votre magie de Noël',
        'about.story.title': 'Notre Histoire',
        'about.story.text': 'Fondée en 2015, Christmas Tree Pros est née d\'une passion pour la magie de Noël et le désir d\'offrir des expériences inoubliables.',
        'about.mission.title': 'Notre Mission',
        'about.mission.text': 'Créer des moments magiques et des souvenirs impérissables en transformant chaque maison en un véritable conte de fées de Noël.',
        'about.values.title': 'Nos Valeurs',

        // Services Page
        'services.hero.title': 'Nos Services Premium',
        'services.hero.desc': 'De la conception à l\'installation, nous prenons soin de chaque détail',

        // Gallery Page
        'gallery.title': 'Galerie',
        'gallery.subtitle': 'Découvrez nos réalisations',

        // Blog Page
        'blog.title': 'Blog',
        'blog.subtitle': 'Actualités et conseils déco',

        // Form Validation
        'validation.email': 'Veuillez entrer un email valide',
        'validation.phone': 'Veuillez entrer un numéro de téléphone valide',
        'validation.required': 'Ce champ est requis',
        'validation.success': '✓ Message envoyé avec succès !',
    },

    en: {
        // Meta & SEO
        'meta.title': 'Christmas Tree Pros - Decoration & Ambiance',
        'meta.description': 'Christmas Tree Pros - Christmas tree and home decoration specialist. Professional installation, custom creations.',

        // Navigation
        'nav.home': 'Home',
        'nav.gallery': 'Gallery',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.blog': 'Blog',
        'nav.contact': 'Contact',
        'nav.book': 'Book Now',

        // Countdown
        'countdown.prefix': 'Until Christmas:',
        'countdown.days': 'Days',
        'countdown.hours': 'H',
        'countdown.minutes': 'Min',
        'countdown.seconds': 'Sec',
        'countdown.christmas': '🎄 Merry Christmas! 🎅',

        // Hero Section
        'hero.title': 'Transform your home into a true Christmas fairy tale',
        'hero.subtitle': 'Professional custom Christmas decoration installation. Wonder guaranteed for the whole family.',
        'hero.cta.quote': 'Request a free quote',
        'hero.cta.gallery': 'View our creations',

        // Realizations Section
        'realizations.title': 'Our Best Creations',
        'realizations.subtitle': 'Discover our creations that amazed our clients',
        'realizations.tree.title': 'Grand Luxury Tree',
        'realizations.tree.desc': 'Premium decoration with golden ornaments',
        'realizations.exterior.title': 'Magical Facade',
        'realizations.exterior.desc': 'Spectacular outdoor lighting and decorations',
        'realizations.interior.title': 'Cozy Atmosphere',
        'realizations.interior.desc': 'Harmonious and elegant interior decoration',
        'realizations.view': 'View project',

        // Services Section
        'services.title': 'Our Services',
        'services.subtitle': 'Complete services for effortless Christmas magic',
        'services.trees.title': 'Christmas Trees',
        'services.trees.desc': 'Selection and decoration of natural or artificial trees. Installation and removal included.',
        'services.interior.title': 'Interior Decor',
        'services.interior.desc': 'Creation of magical atmospheres with garlands, lights and refined ornaments.',
        'services.exterior.title': 'Exterior Decor',
        'services.exterior.desc': 'Illumination of facades, gardens and terraces. Safe and professional installation.',
        'services.custom.title': 'Custom Design',
        'services.custom.desc': 'Personalized creations according to your wishes and style. Design consultation included.',

        // Testimonials Section
        'testimonials.title': 'They Trust Us',
        'testimonials.1.text': '"A wonderful team! Our house looked magnificent, the children were amazed. Impeccable service from start to finish."',
        'testimonials.1.author': '— Sophie and Marc, Paris',
        'testimonials.2.text': '"Professionalism and creativity delivered. Our outdoor decorations were a sensation in the neighborhood!"',
        'testimonials.2.author': '— Dubois Family, Lyon',
        'testimonials.3.text': '"A precious time saver during the holidays. The decoration was sublime and installation very quick. Highly recommend!"',
        'testimonials.3.author': '— Claire Martin, Bordeaux',

        // CTA Section
        'cta.title': 'Ready to Experience the Magic of Christmas?',
        'cta.subtitle': 'Book your installation now before it\'s too late!',
        'cta.button': 'Book my dream decoration',

        // Footer
        'footer.company.desc': 'Christmas decoration specialists since 2015. Wonder and professionalism guaranteed.',
        'footer.navigation': 'Navigation',
        'footer.contact': 'Contact',
        'footer.follow': 'Follow Us',
        'footer.rights': '© 2024 Christmas Tree Pros. All rights reserved.',

        // Contact Page
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Let\'s transform your Christmas vision into reality together',
        'contact.name.label': 'Full Name',
        'contact.name.placeholder': 'Your name',
        'contact.email.label': 'Email',
        'contact.email.placeholder': 'your@email.com',
        'contact.phone.label': 'Phone',
        'contact.phone.placeholder': '+1 (555) 123-4567',
        'contact.service.label': 'Desired Service',
        'contact.service.placeholder': 'Select a service',
        'contact.service.tree': 'Christmas Tree',
        'contact.service.interior': 'Interior Decoration',
        'contact.service.exterior': 'Exterior Decoration',
        'contact.service.custom': 'Custom Project',
        'contact.message.label': 'Message',
        'contact.message.placeholder': 'Tell us about your project...',
        'contact.submit': 'Send my request',
        'contact.info.title': 'Contact Information',
        'contact.hours.title': 'Business Hours',
        'contact.hours.weekdays': 'Monday - Saturday',
        'contact.hours.time': '9:00 AM - 6:00 PM',
        'contact.hours.sunday': 'Sunday: Closed',

        // About Page
        'about.title': 'About Us',
        'about.subtitle': 'Passion and excellence serving your Christmas magic',
        'about.story.title': 'Our Story',
        'about.story.text': 'Founded in 2015, Christmas Tree Pros was born from a passion for Christmas magic and the desire to offer unforgettable experiences.',
        'about.mission.title': 'Our Mission',
        'about.mission.text': 'Create magical moments and lasting memories by transforming every home into a true Christmas fairy tale.',
        'about.values.title': 'Our Values',

        // Services Page
        'services.hero.title': 'Our Premium Services',
        'services.hero.desc': 'From design to installation, we take care of every detail',

        // Gallery Page
        'gallery.title': 'Gallery',
        'gallery.subtitle': 'Discover our creations',

        // Blog Page
        'blog.title': 'Blog',
        'blog.subtitle': 'News and decoration tips',

        // Form Validation
        'validation.email': 'Please enter a valid email',
        'validation.phone': 'Please enter a valid phone number',
        'validation.required': 'This field is required',
        'validation.success': '✓ Message sent successfully!',
    }
};

/**
 * Language Detection
 * Detects user's preferred language from browser settings
 * English-speaking countries: US, GB, CA, AU, NZ, IE, etc.
 * Others: French (default)
 */
function detectLanguage() {
    // Check localStorage first for saved preference
    const savedLang = localStorage.getItem('christmasTreePros_language');
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
        console.log('🌍 Language from localStorage:', savedLang);
        return savedLang;
    }

    // Get browser language
    const browserLang = navigator.language || navigator.userLanguage || 'fr';
    console.log('🌍 Browser language detected:', browserLang);

    // Check if English-speaking
    const englishLanguages = ['en', 'en-US', 'en-GB', 'en-CA', 'en-AU', 'en-NZ', 'en-IE', 'en-ZA', 'en-IN'];
    const isEnglish = englishLanguages.some(lang => browserLang.toLowerCase().startsWith(lang.toLowerCase().substring(0, 2)));

    const detectedLang = isEnglish ? 'en' : 'fr';
    console.log('🌍 Detected language:', detectedLang);

    // Save to localStorage
    localStorage.setItem('christmasTreePros_language', detectedLang);

    return detectedLang;
}

/**
 * Get Translation
 * Returns the translated text for a given key
 */
function t(key, lang = null) {
    const currentLang = lang || window.currentLanguage || 'fr';
    return translations[currentLang][key] || key;
}

/**
 * Apply Translations
 * Updates all elements with data-i18n attributes
 */
function applyTranslations(lang) {
    console.log('🔄 Applying translations for language:', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update title
    const titleKey = document.querySelector('title')?.getAttribute('data-i18n');
    if (titleKey) {
        document.title = t(titleKey, lang);
    }

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    const metaDescKey = metaDesc?.getAttribute('data-i18n');
    if (metaDescKey && metaDesc) {
        metaDesc.setAttribute('content', t(metaDescKey, lang));
    }

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translatedText = t(key, lang);

        // Check if it's an input/textarea placeholder
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.hasAttribute('placeholder')) {
                element.placeholder = translatedText;
            }
        } else if (element.tagName === 'SELECT') {
            // Handle select elements
            element.querySelectorAll('option').forEach(option => {
                const optionKey = option.getAttribute('data-i18n');
                if (optionKey) {
                    option.textContent = t(optionKey, lang);
                }
            });
        } else {
            // Regular text content
            element.textContent = translatedText;
        }
    });

    console.log('✅ Translations applied successfully');
}

/**
 * Timezone-Aware Christmas Countdown
 * Calculates time remaining until Christmas (Dec 25, midnight) in user's local timezone
 */
function updateCountdown(lang) {
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

        // Update labels with translation
        const labelsMap = {
            'days-label': 'countdown.days',
            'hours-label': 'countdown.hours',
            'minutes-label': 'countdown.minutes',
            'seconds-label': 'countdown.seconds'
        };

        Object.entries(labelsMap).forEach(([id, key]) => {
            const el = document.getElementById(id);
            if (el) el.textContent = t(key, lang);
        });
    } else {
        // Christmas is here!
        countdownElement.innerHTML = `<div style="font-size: 1.2rem; font-weight: 700;">${t('countdown.christmas', lang)}</div>`;
    }
}

/**
 * Initialize I18n System
 * Sets up language detection, applies translations, and starts countdown
 */
function initI18n() {
    console.log('🎄 Initializing i18n system...');

    // Detect language
    const detectedLang = detectLanguage();
    window.currentLanguage = detectedLang;

    // Log timezone information
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log('🌍 User timezone:', userTimezone);
    console.log('🕐 Local time:', new Date().toLocaleString());

    // Apply translations
    applyTranslations(detectedLang);

    // Initialize countdown
    if (document.getElementById('countdown')) {
        updateCountdown(detectedLang);
        setInterval(() => updateCountdown(detectedLang), 1000);
    }

    console.log('✅ I18n system initialized successfully');
}

/**
 * Change Language
 * Manually switch language and persist preference
 */
function changeLanguage(newLang) {
    if (newLang !== 'fr' && newLang !== 'en') {
        console.error('Invalid language:', newLang);
        return;
    }

    window.currentLanguage = newLang;
    localStorage.setItem('christmasTreePros_language', newLang);
    applyTranslations(newLang);

    if (document.getElementById('countdown')) {
        updateCountdown(newLang);
    }

    console.log('🔄 Language changed to:', newLang);
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}

// Export functions for global access
window.ChristmasI18n = {
    changeLanguage,
    getCurrentLanguage: () => window.currentLanguage,
    t: (key) => t(key, window.currentLanguage)
};
