// ⚙️ CONFIGURATION - Modify this line with your N8N URL
const N8N_WEBHOOK_URL = 'https://n8n.ovh.synelia.tech/webhook/2c929d42-1270-4d11-a519-4ed0ca69465a';

// 🔒 SECURITY CONFIGURATION
// Set your reCAPTCHA site key here (get it from https://www.google.com/recaptcha/admin)
// TODO: Uncomment and configure when ready to use reCAPTCHA
// window.RECAPTCHA_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY_HERE';

// Rate limiting: max 3 submissions per minute
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 60000; // 1 minute

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {

    /* ============================================================
        🟦 1. MAIN CONTACT FORM (#contactForm)
    ============================================================ */

    const form = document.getElementById('contactForm');

    if (form) {
        // Initialize rate limiter for contact form
        const contactRateLimiter = new window.SecurityUtils.RateLimiter(
            'contact_form',
            RATE_LIMIT_MAX,
            RATE_LIMIT_WINDOW
        );

        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            // 🔒 SECURITY: Check rate limit
            if (!contactRateLimiter.isAllowed()) {
                const waitTime = Math.ceil(contactRateLimiter.getTimeUntilReset() / 1000);
                // Icon: ⏳ (hourglass - waiting/rate limit)
                toastWarning(`Trop de soumissions. Veuillez attendre ${waitTime} secondes avant de réessayer.`, 5000);
                return;
            }

            submitBtn.disabled = true;
            submitBtn.textContent = '⏳ Sending...';
            submitBtn.style.opacity = '0.6';

            // 🔒 SECURITY: Sanitize and validate inputs
            const firstName = window.SecurityUtils.sanitizeName(document.getElementById('firstName').value);
            const lastName = window.SecurityUtils.sanitizeName(document.getElementById('lastName').value);
            const email = window.SecurityUtils.sanitizeEmail(document.getElementById('email').value);
            const phone = window.SecurityUtils.sanitizePhone(document.getElementById('phone').value);
            const address = window.SecurityUtils.sanitizeTextWithLimit(document.getElementById('address').value || '', 200);
            const service = window.SecurityUtils.sanitizeText(document.getElementById('service').value);
            const date = document.getElementById('date').value; // Date input is safe
            const message = window.SecurityUtils.sanitizeTextWithLimit(document.getElementById('message').value || '', 1000);
            const newsletter = document.getElementById('newsletter').checked;

            // Validate required fields
            if (!firstName || !lastName) {
                // Icon: ❌ (error - validation failed)
                toastError('Veuillez entrer votre nom complet.');
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
                return;
            }

            if (!email) {
                // Icon: ❌ (error - invalid email)
                toastError('Veuillez entrer une adresse email valide.');
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
                return;
            }

            if (!phone) {
                // Icon: ❌ (error - invalid phone)
                toastError('Veuillez entrer un numéro de téléphone valide.');
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
                return;
            }

            // 📦 Collect sanitized data
            const formData = {
                formType: "reservation",
                firstName,
                lastName,
                email,
                phone,
                address,
                service,
                date,
                message,
                newsletter
            };

            try {
                // 🔒 SECURITY: Get reCAPTCHA token
                // TODO: Uncomment when reCAPTCHA is configured
                // const recaptchaToken = await window.SecurityUtils.executeRecaptcha('contact_form');
                const recaptchaToken = null; // Temporary: no reCAPTCHA for now

                // 🔒 SECURITY: Add security metadata
                const secureData = await window.SecurityUtils.addSecurityMetadata({
                    ...formData,
                    recaptchaToken
                });

                const response = await fetch(N8N_WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify(secureData)
                });

                if (!response.ok) throw new Error(`HTTP ${response.status}`);

                // Icon: 🎄 (Christmas tree - success)
                toastSuccess('Votre demande a été envoyée avec succès !', 5000);
                form.reset();
                contactRateLimiter.reset(); // Reset on success

            } catch (error) {
                // Icon: ❌ (error - submission failed)
                toastError("Erreur lors de l'envoi du formulaire.\nVeuillez réessayer.", 5000);
                console.error(error);

            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
            }
        });
    }


    /* ============================================================
        🟩 2. NEWSLETTER FORM (.newsletter-form)
    ============================================================ */

    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        // Initialize rate limiter for newsletter
        const newsletterRateLimiter = new window.SecurityUtils.RateLimiter(
            'newsletter_form',
            RATE_LIMIT_MAX,
            RATE_LIMIT_WINDOW
        );

        newsletterForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            // 🔒 SECURITY: Check rate limit
            if (!newsletterRateLimiter.isAllowed()) {
                const waitTime = Math.ceil(newsletterRateLimiter.getTimeUntilReset() / 1000);
                // Icon: ⏳ (hourglass - rate limit)
                toastWarning(`Trop de soumissions. Veuillez attendre ${waitTime} secondes avant de réessayer.`, 5000);
                return;
            }

            const emailInput = this.querySelector('input[name="email"]');
            const rawEmail = emailInput ? emailInput.value.trim() : '';

            // 🔒 SECURITY: Sanitize and validate email
            const email = window.SecurityUtils.sanitizeEmail(rawEmail);

            if (!email) {
                // Icon: ❌ (error - invalid email)
                toastError("Veuillez entrer une adresse email valide.", 4000);
                return;
            }

            const button = this.querySelector('button');
            const original = button.textContent;

            button.disabled = true;
            button.textContent = "⏳ Sending...";

            // 📦 Prepare data
            const payload = {
                formType: "newsletter",  // 🔹 TAG to identify newsletter form
                email: email
            };

            try {
                // 🔒 SECURITY: Get reCAPTCHA token
                // TODO: Uncomment when reCAPTCHA is configured
                // const recaptchaToken = await window.SecurityUtils.executeRecaptcha('newsletter');
                const recaptchaToken = null; // Temporary: no reCAPTCHA for now

                // 🔒 SECURITY: Add security metadata
                const securePayload = await window.SecurityUtils.addSecurityMetadata({
                    ...payload,
                    recaptchaToken
                });

                const response = await fetch(N8N_WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: JSON.stringify(securePayload)
                });

                if (!response.ok) throw new Error("Newsletter submission failed");

                // Icon: 🎄 (Christmas tree - success)
                toastSuccess("Merci ! Vous êtes maintenant inscrit à notre newsletter.", 5000);
                newsletterForm.reset();
                newsletterRateLimiter.reset(); // Reset on success

            } catch (error) {
                // Icon: ❌ (error - subscription failed)
                toastError("Impossible de vous inscrire pour le moment.\nVeuillez réessayer.", 5000);
                console.error(error);

            } finally {
                button.disabled = false;
                button.textContent = original;
            }
        });
    }


    /* ============================================================
        🟧 3. REAL-TIME VALIDATION + DATE LIMIT
    ============================================================ */

    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('blur', function () {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
            }
        });

        input.addEventListener('input', function () {
            if (this.classList.contains('error') && this.value.trim()) {
                this.classList.remove('error');
            }
        });
    });

    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }
});
