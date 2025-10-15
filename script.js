// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();

    // Add smooth scroll behavior
    initSmoothScroll();

    // Add interactive hover effects
    initHoverEffects();

    // Initialize contact functionality
    initContactHandlers();

    // Add parallax effect
    initParallaxEffect();

    // Add mobile menu functionality (if needed)
    initMobileMenu();
});

// Animation initialization
function initAnimations() {
    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.profile-card, .service-card, .cta-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Smooth scroll functionality
function initSmoothScroll() {
    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced hover effects
function initHoverEffects() {
    // Profile card hover effects
    document.querySelectorAll('.profile-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02) rotateX(5deg)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0)';
        });
    });

    // Button hover effects with sound (optional)
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Contact handlers
function initContactHandlers() {
    // Phone call handlers
    window.callRami = function() {
        makePhoneCall('+905428273347', 'Rami');
    };

    window.callReso = function() {
        makePhoneCall('+905465382252', 'Reso');
    };

    // General contact handlers
    window.handleCall = function() {
        showContactModal();
    };

    window.handleMessage = function() {
        showMessageModal();
    };

    window.handleWhatsApp = function() {
        openWhatsApp();
    };
}

// Phone call functionality
function makePhoneCall(phoneNumber, contactName) {
    // Show confirmation dialog
    const confirmed = confirm(`${contactName} kişisini aramak istediğinizden emin misiniz?\n\n${phoneNumber}`);

    if (confirmed) {
        // Try to make phone call
        window.location.href = `tel:${phoneNumber}`;

        // Show success message
        showNotification(`${contactName} aranıyor...`, 'success');

        // Track the call (analytics)
        trackEvent('phone_call', {
            contact: contactName,
            phone: phoneNumber
        });
    }
}

// WhatsApp functionality
function openWhatsApp() {
    const phoneNumber = '905428273347'; // Default to Rami
    const message = encodeURIComponent('Merhaba, web siteniz üzerinden iletişime geçiyorum.');

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');

    showNotification('WhatsApp açılıyor...', 'success');

    trackEvent('whatsapp_click', {
        phone: phoneNumber
    });
}

// Modal functionality
function showContactModal() {
    const modal = createModal({
        title: 'İletişim Seçenekleri',
        content: `
            <div class="contact-options">
                <button class="contact-option" onclick="callRami()">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <div>
                        <strong>Rami</strong><br>
                        <small>+905428273347</small>
                    </div>
                </button>
                <button class="contact-option" onclick="callReso()">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <div>
                        <strong>Reso</strong><br>
                        <small>+905465382252</small>
                    </div>
                </button>
            </div>
        `,
        buttons: [
            {
                text: 'WhatsApp',
                class: 'btn btn-secondary',
                onclick: 'handleWhatsApp(); closeModal();'
            },
            {
                text: 'Kapat',
                class: 'btn btn-primary',
                onclick: 'closeModal();'
            }
        ]
    });

    document.body.appendChild(modal);
}

function showMessageModal() {
    const modal = createModal({
        title: 'Mesaj Gönder',
        content: `
            <form class="message-form" onsubmit="sendMessage(event)">
                <div class="form-group">
                    <label>Adınız:</label>
                    <input type="text" name="name" required>
                </div>
                <div class="form-group">
                    <label>Mesajınız:</label>
                    <textarea name="message" rows="4" required></textarea>
                </div>
                <div class="form-group">
                    <label>İletişim Tercihi:</label>
                    <select name="contact">
                        <option value="rami">Rami (+905428273347)</option>
                        <option value="reso">Reso (+905465382252)</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Gönder</button>
            </form>
        `,
        buttons: [
            {
                text: 'Kapat',
                class: 'btn btn-secondary',
                onclick: 'closeModal();'
            }
        ]
    });

    document.body.appendChild(modal);
}

// Modal creation helper
function createModal(options) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h3>${options.title}</h3>
                <button class="modal-close" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                ${options.content}
            </div>
            ${options.buttons ? `
                <div class="modal-footer">
                    ${options.buttons.map(btn =>
                        `<button class="${btn.class}" onclick="${btn.onclick}">${btn.text}</button>`
                    ).join('')}
                </div>
            ` : ''}
        </div>
    `;

    // Add modal styles
    if (!document.querySelector('#modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                backdrop-filter: blur(5px);
            }
            .modal {
                background: linear-gradient(135deg, rgba(220,38,38,0.9), rgba(236,72,153,0.9));
                border: 2px solid rgba(255,255,255,0.2);
                border-radius: 20px;
                padding: 0;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                backdrop-filter: blur(20px);
            }
            .modal-header {
                padding: 20px;
                border-bottom: 1px solid rgba(255,255,255,0.2);
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .modal-header h3 {
                margin: 0;
                color: white;
            }
            .modal-close {
                background: none;
                border: none;
                color: white;
                font-size: 24px;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background 0.3s;
            }
            .modal-close:hover {
                background: rgba(255,255,255,0.2);
            }
            .modal-body {
                padding: 20px;
                color: white;
            }
            .modal-footer {
                padding: 20px;
                border-top: 1px solid rgba(255,255,255,0.2);
                display: flex;
                gap: 10px;
                justify-content: flex-end;
            }
            .contact-options {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            .contact-option {
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 15px;
                background: rgba(255,255,255,0.1);
                border: 1px solid rgba(255,255,255,0.2);
                border-radius: 10px;
                color: white;
                cursor: pointer;
                transition: all 0.3s;
            }
            .contact-option:hover {
                background: rgba(255,255,255,0.2);
                transform: translateY(-2px);
            }
            .message-form {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            .form-group {
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
            .form-group label {
                font-weight: 600;
                color: white;
            }
            .form-group input,
            .form-group textarea,
            .form-group select {
                padding: 10px;
                border: 1px solid rgba(255,255,255,0.3);
                border-radius: 8px;
                background: rgba(255,255,255,0.1);
                color: white;
                font-size: 14px;
            }
            .form-group input::placeholder,
            .form-group textarea::placeholder {
                color: rgba(255,255,255,0.6);
            }
            .form-group input:focus,
            .form-group textarea:focus,
            .form-group select:focus {
                outline: none;
                border-color: rgba(255,255,255,0.5);
                background: rgba(255,255,255,0.15);
            }
        `;
        document.head.appendChild(modalStyles);
    }

    return modal;
}

// Close modal
window.closeModal = function() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
    }
};

// Send message functionality
window.sendMessage = function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Here you would normally send the data to a server
    // For demo purposes, we'll just show a success message
    showNotification('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.', 'success');

    // Track the message
    trackEvent('message_sent', {
        contact: data.contact,
        has_message: !!data.message
    });

    closeModal();
};

// Parallax effect
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero');

        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Mobile menu (if needed)
function initMobileMenu() {
    // Add mobile menu functionality if navigation is added later
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add notification styles
    if (!document.querySelector('#notification-styles')) {
        const notificationStyles = document.createElement('style');
        notificationStyles.id = 'notification-styles';
        notificationStyles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 10px;
                color: white;
                font-weight: 500;
                z-index: 1001;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                max-width: 300px;
                word-wrap: break-word;
            }
            .notification-success {
                background: linear-gradient(135deg, #10b981, #059669);
            }
            .notification-error {
                background: linear-gradient(135deg, #ef4444, #dc2626);
            }
            .notification-info {
                background: linear-gradient(135deg, #3b82f6, #2563eb);
            }
            .notification.show {
                transform: translateX(0);
            }
        `;
        document.head.appendChild(notificationStyles);
    }

    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Analytics tracking (placeholder)
function trackEvent(eventName, data) {
    // This is a placeholder for analytics tracking
    // In a real implementation, you would send this to your analytics service
    console.log('Event tracked:', eventName, data);

    // Example: Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, data);
    }
}

// Add ripple effect styles
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255,255,255,0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// Performance optimization
function optimizeImages() {
    // Lazy load images when they come into viewport
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize optimizations
optimizeImages();

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Add touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - could navigate to next section
            console.log('Swipe left');
        } else {
            // Swipe right - could navigate to previous section
            console.log('Swipe right');
        }
    }
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // Track errors
    trackEvent('javascript_error', {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno
    });
});

// Console welcome message
console.log('%c🌈 Erkek Erkeğe Özel Anlar', 'font-size: 20px; font-weight: bold; color: #ec4899;');
console.log('%cTutkulu ve sınırsız anlar için buradayız 🔥💋', 'font-size: 14px; color: #f472b6;');
console.log('%cMade with ❤️ for the LGBTQ+ community', 'font-size: 12px; color: #a78bfa;');
