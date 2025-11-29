// ========================================
// TOAST-NOTIFICATIONS.JS - Styled Alerts
// ========================================

/**
 * Custom toast notification system
 * Replaces native alert() with beautiful styled notifications
 */

// Create toast container if it doesn't exist
function createToastContainer() {
    if (!document.getElementById('toast-container')) {
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 99999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
        `;
        document.body.appendChild(container);
    }
    return document.getElementById('toast-container');
}

/**
 * Show a toast notification
 * @param {string} message - Message to display
 * @param {string} type - Type: 'success', 'error', 'warning', 'info'
 * @param {number} duration - Duration in ms (default: 4000)
 */
function showToast(message, type = 'info', duration = 4000) {
    const container = createToastContainer();

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    // Define icons and colors for each type
    const config = {
        success: {
            icon: '🎄', // Christmas tree for success
            color: '#2D5016',
            bgColor: '#E8F5E9',
            borderColor: '#4CAF50'
        },
        error: {
            icon: '❌', // Red X for errors
            color: '#C41E3A',
            bgColor: '#FFEBEE',
            borderColor: '#F44336'
        },
        warning: {
            icon: '⚠️', // Warning sign
            color: '#F57C00',
            bgColor: '#FFF3E0',
            borderColor: '#FF9800'
        },
        info: {
            icon: 'ℹ️', // Info icon
            color: '#1976D2',
            bgColor: '#E3F2FD',
            borderColor: '#2196F3'
        },
        wait: {
            icon: '⏳', // Hourglass for loading
            color: '#5E35B1',
            bgColor: '#EDE7F6',
            borderColor: '#673AB7'
        }
    };

    const settings = config[type] || config.info;

    // Style the toast
    toast.style.cssText = `
        background: ${settings.bgColor};
        color: ${settings.color};
        padding: 16px 20px;
        border-radius: 12px;
        border-left: 4px solid ${settings.borderColor};
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 300px;
        max-width: 400px;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 500;
        pointer-events: auto;
        cursor: pointer;
        animation: slideIn 0.3s ease-out;
        transition: all 0.3s ease;
    `;

    // Add icon and message
    toast.innerHTML = `
        <span style="font-size: 24px; flex-shrink: 0;">${settings.icon}</span>
        <span style="flex: 1; line-height: 1.4;">${message}</span>
        <button style="
            background: none;
            border: none;
            color: ${settings.color};
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.6;
            transition: opacity 0.2s;
        " onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.6'">×</button>
    `;

    // Add close button functionality
    const closeBtn = toast.querySelector('button');
    closeBtn.onclick = (e) => {
        e.stopPropagation();
        removeToast(toast);
    };

    // Click to dismiss
    toast.onclick = () => removeToast(toast);

    // Add to container
    container.appendChild(toast);

    // Auto remove after duration
    if (duration > 0) {
        setTimeout(() => removeToast(toast), duration);
    }

    return toast;
}

/**
 * Remove a toast with animation
 */
function removeToast(toast) {
    toast.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 300);
}

// Add CSS animations
if (!document.getElementById('toast-animations')) {
    const style = document.createElement('style');
    style.id = 'toast-animations';
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        .toast:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
            #toast-container {
                top: 10px;
                right: 10px;
                left: 10px;
            }
            
            .toast {
                min-width: auto !important;
                max-width: 100% !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Export functions
window.showToast = showToast;

// Convenience functions
window.toastSuccess = (message, duration) => showToast(message, 'success', duration);
window.toastError = (message, duration) => showToast(message, 'error', duration);
window.toastWarning = (message, duration) => showToast(message, 'warning', duration);
window.toastInfo = (message, duration) => showToast(message, 'info', duration);
window.toastWait = (message, duration) => showToast(message, 'wait', duration);
