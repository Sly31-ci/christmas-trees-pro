// ⚙️ CONFIGURATION - Modify this line with your N8N URL
const N8N_WEBHOOK_URL = 'https://n8n.ovh.synelia.tech/webhook-test/2c929d42-1270-4d11-a519-4ed0ca69465a';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {

    /* ============================================================
        🟦 1. MAIN CONTACT FORM (#contactForm)
    ============================================================ */

    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = '⏳ Sending...';
            submitBtn.style.opacity = '0.6';

            // 📦 Collect data
            const formData = {
                formType: "reservation", // 🔹 TAG to identify form
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value || '',
                service: document.getElementById('service').value,
                date: document.getElementById('date').value,
                message: document.getElementById('message').value || '',
                newsletter: document.getElementById('newsletter').checked
            };

            try {
                const response = await fetch(N8N_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) throw new Error(`HTTP ${response.status}`);

                alert('✅ Votre demande a été envoyée avec succès !');
                form.reset();

            } catch (error) {
                alert("❌ Erreur lors de l’envoi du formulaire.\nVeuillez réessayer.");
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
        newsletterForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

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
                const response = await fetch(N8N_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) throw new Error("Newsletter submission failed");

                alert("🎉 Merci ! Vous êtes maintenant inscrit à notre newsletter.");
                newsletterForm.reset();

            } catch (error) {
                alert("❌ Impossible de vous inscrire pour le moment.\nVeuillez réessayer.");
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
