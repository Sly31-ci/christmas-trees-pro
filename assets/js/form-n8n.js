// ⚙️ CONFIGURATION - Modify this line with your N8N URL
const N8N_WEBHOOK_URL = 'https://n8n.ovh.synelia.tech/webhook/2c929d42-1270-4d11-a519-4ed0ca69465a';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    console.log('🔄 Initializing N8N form...');

    const form = document.getElementById('contactForm');

    if (!form) {
        console.error('❌ Form #contactForm not found!');
        return;
    }

    // 📝 Form handling
    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        console.log('📤 Submitting form...');

        // 🔘 Submit button
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = '⏳ Sending...';
        submitBtn.style.opacity = '0.6';

        // 📦 Collect data
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

        console.log('📦 Data collected:', formData);

        try {
            // 📤 Send to N8N
            console.log('🌐 Sending to:', N8N_WEBHOOK_URL);

            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            console.log('📡 HTTP Response:', response.status, response.statusText);

            // Check if HTTP request succeeded
            if (!response.ok) {
                throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
            }

            // Attempt to parse JSON response
            let result;
            try {
                result = await response.json();
                console.log('📦 JSON Response:', result);
            } catch (jsonError) {
                // If not JSON, consider success if status 200
                console.log('⚠️ Non-JSON response, but status OK');
                result = { success: true };
            }

            // Check success (multiple formats possible)
            const isSuccess = result.success === true ||
                result.status === 'success' ||
                result.ok === true ||
                response.status === 200;

            if (isSuccess) {
                // ✅ Success!
                console.log('✅ Form sent successfully!');

                // Show toast if available
                const toast = document.getElementById('successToast');
                if (toast) {
                    toast.classList.add('show');
                    setTimeout(() => toast.classList.remove('show'), 5000);
                } else {
                    // Otherwise, show alert
                    const message = result.message || 'Your message has been sent successfully!';
                    alert('✅ ' + message);
                }

                // Reset form
                form.reset();

                // 🎉 Confetti (if function exists)
                if (typeof createConfetti === 'function') {
                    createConfetti();
                }
            } else {
                throw new Error(result.message || result.error || 'Unknown error');
            }

        } catch (error) {
            // ❌ Error
            console.error('❌ Detailed error:', error);
            console.error('Error type:', error.name);
            console.error('Error message:', error.message);

            let errorMessage = '❌ An error occurred while sending.';

            if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
                errorMessage += '\n\n⚠️ The N8N server seems inaccessible. Check:\n' +
                    '1. The webhook URL\n' +
                    '2. Your internet connection\n' +
                    '3. N8N server CORS settings';
            } else {
                errorMessage += '\n\n' + error.message;
            }

            errorMessage += '\n\nPlease try again or contact us by phone at +1(703)8562590';

            alert(errorMessage);
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.style.opacity = '1';
        }
    });

    // ✅ Real-time validation
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

    // 📅 Minimal date = today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }

    console.log('✅ N8N Form initialized successfully!');
});
