// ⚙️ CONFIGURATION - Modifier cette ligne avec votre URL N8N
const N8N_WEBHOOK_URL = 'https://n8n.ovh.synelia.tech/webhook/2c929d42-1270-4d11-a519-4ed0ca69465a';

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function () {
    console.log('🔄 Initialisation du formulaire N8N...');

    const form = document.getElementById('contactForm');

    if (!form) {
        console.error('❌ Formulaire #contactForm introuvable !');
        return;
    }

    // 📝 Gestion du formulaire
    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        console.log('📤 Soumission du formulaire...');

        // 🔘 Bouton submit
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = '⏳ Envoi en cours...';
        submitBtn.style.opacity = '0.6';

        // 📦 Collecter les données
        const formData = {
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

        console.log('📦 Données collectées:', formData);

        try {
            // 📤 Envoyer vers N8N
            console.log('🌐 Envoi vers:', N8N_WEBHOOK_URL);

            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            console.log('📡 Réponse HTTP:', response.status, response.statusText);

            // Vérifier si la requête HTTP a réussi
            if (!response.ok) {
                throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
            }

            // Tenter de parser la réponse JSON
            let result;
            try {
                result = await response.json();
                console.log('📦 Réponse JSON:', result);
            } catch (jsonError) {
                // Si ce n'est pas du JSON, considérer comme succès si status 200
                console.log('⚠️ Réponse non-JSON, mais status OK');
                result = { success: true };
            }

            // Vérifier le succès (plusieurs formats possibles)
            const isSuccess = result.success === true ||
                result.status === 'success' ||
                result.ok === true ||
                response.status === 200;

            if (isSuccess) {
                // ✅ Succès !
                console.log('✅ Formulaire envoyé avec succès !');

                // Afficher le toast si disponible
                const toast = document.getElementById('successToast');
                if (toast) {
                    toast.classList.add('show');
                    setTimeout(() => toast.classList.remove('show'), 5000);
                } else {
                    // Sinon, afficher une alerte
                    const message = result.message || 'Votre message a été envoyé avec succès !';
                    alert('✅ ' + message);
                }

                // Réinitialiser le formulaire
                form.reset();

                // 🎉 Confettis (si la fonction existe)
                if (typeof createConfetti === 'function') {
                    createConfetti();
                }
            } else {
                throw new Error(result.message || result.error || 'Erreur inconnue');
            }

        } catch (error) {
            // ❌ Erreur
            console.error('❌ Erreur détaillée:', error);
            console.error('Type d\'erreur:', error.name);
            console.error('Message d\'erreur:', error.message);

            let errorMessage = '❌ Une erreur est survenue lors de l\'envoi.';

            if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
                errorMessage += '\n\n⚠️ Le serveur N8N semble inaccessible. Vérifiez:\n' +
                    '1. L\'URL du webhook\n' +
                    '2. La connexion internet\n' +
                    '3. Les paramètres CORS du serveur N8N';
            } else {
                errorMessage += '\n\n' + error.message;
            }

            errorMessage += '\n\nVeuillez réessayer ou nous contacter par téléphone au +1(703)8562590';

            alert(errorMessage);
        } finally {
            // Réactiver le bouton
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.style.opacity = '1';
        }
    });

    // ✅ Validation en temps réel
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

    // 📅 Date minimale = aujourd'hui
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }

    console.log('✅ Formulaire N8N initialisé avec succès !');
});
