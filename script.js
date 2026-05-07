// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Booking Form Submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[placeholder="Your Name"]').value;
        const email = this.querySelector('input[placeholder="Your Email"]').value;
        const phone = this.querySelector('input[placeholder="Your Phone Number"]').value;
        const date = this.querySelector('input[type="date"]').value;
        const service = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;
        
        // Create WhatsApp message
        const whatsappMessage = `Hi Taniya Spa!\n\nI'd like to book an appointment:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nService: ${service}\nSpecial Requests: ${message}`;
        
        // WhatsApp API link
        const whatsappLink = `https://wa.me/917042206572?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Log form data for analytics
        gtag('event', 'booking_submitted', {
            'service': service,
            'date': date
        });
        
        // Redirect to WhatsApp
        window.open(whatsappLink, '_blank');
        
        // Show success message
        alert('Thank you for booking! Redirecting to WhatsApp to confirm your appointment.');
        this.reset();
    });
}

// Call tracking for phone number clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
        // Log call event for Google Ads conversion tracking
        gtag('event', 'phone_call', {
            'phone_number': this.getAttribute('href')
        });
        
        // For Google Ads conversion
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                'conversion_id': 'AW-XXXXXXXXXX',
                'conversion_label': 'XXXXXXXXXX'
            });
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Analytics event tracking
function trackEvent(eventName, eventData = {}) {
    gtag('event', eventName, eventData);
}

// Track page scroll depth
let maxScroll = 0;
window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
    if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;
        
        if (maxScroll > 0.25 && maxScroll < 0.26) {
            trackEvent('page_scroll_25');
        } else if (maxScroll > 0.5 && maxScroll < 0.51) {
            trackEvent('page_scroll_50');
        } else if (maxScroll > 0.75 && maxScroll < 0.76) {
            trackEvent('page_scroll_75');
        } else if (maxScroll > 0.95) {
            trackEvent('page_scroll_95');
        }
    }
});

// Track service card clicks
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        const serviceName = this.querySelector('h3').textContent;
        trackEvent('service_viewed', {
            'service': serviceName
        });
    });
});

// Track package clicks
document.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('click', function() {
        const packageName = this.querySelector('h3').textContent;
        trackEvent('package_viewed', {
            'package': packageName
        });
    });
});

// Form field interaction tracking
const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        trackEvent('form_field_focused', {
            'field_name': this.placeholder || this.name
        });
    });
});

// Service video modal (if videos are added)
function initServiceModals() {
    const serviceModals = document.querySelectorAll('.service-modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    document.querySelectorAll('.service-video-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video');
            const modal = document.getElementById('video-modal-' + videoId);
            if (modal) {
                modal.style.display = 'flex';
                trackEvent('service_video_viewed', {
                    'video_id': videoId
                });
            }
        });
    });
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
}

// Load more functionality for testimonials
function loadMoreTestimonials() {
    const loadMoreBtn = document.getElementById('load-more-testimonials');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            trackEvent('load_more_testimonials');
            // Load more testimonials via AJAX
        });
    }
}

// Timer for limited offer
function startOfferTimer() {
    const offerElement = document.getElementById('limited-offer-timer');
    if (offerElement) {
        const endTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours
        
        const timerInterval = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = endTime - now;
            
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            offerElement.innerHTML = `Offer expires in: ${hours}h ${minutes}m ${seconds}s`;
            
            if (timeLeft < 0) {
                clearInterval(timerInterval);
                offerElement.innerHTML = 'Offer expired';
            }
        }, 1000);
    }
}

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
    initServiceModals();
    loadMoreTestimonials();
    startOfferTimer();
    
    // Track page view
    trackEvent('page_view', {
        'page_title': document.title
    });
});

// Exit intent popup
let hasExitIntent = false;
document.addEventListener('mouseleave', function() {
    if (!hasExitIntent && document.documentElement.clientHeight > window.innerHeight * 0.2) {
        hasExitIntent = true;
        trackEvent('exit_intent_popup_shown');
        
        // Uncomment to show exit intent popup
        // showExitIntentPopup();
    }
});

// Image lazy loading
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance monitoring
window.addEventListener('load', function() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        trackEvent('page_load_time', {
            'load_time_ms': pageLoadTime
        });
    }
});

// Error tracking
window.addEventListener('error', function(event) {
    trackEvent('javascript_error', {
        'error_message': event.message,
        'error_source': event.filename,
        'error_line': event.lineno
    });
});

// Mobile device detection
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Track if on mobile
if (isMobileDevice()) {
    trackEvent('mobile_visit');
} else {
    trackEvent('desktop_visit');
}

// Add review star rating system (if reviews section exists)
function initStarRatings() {
    const ratingContainers = document.querySelectorAll('.star-rating');
    
    ratingContainers.forEach(container => {
        const stars = container.querySelectorAll('.star');
        
        stars.forEach((star, index) => {
            star.addEventListener('click', function() {
                const rating = index + 1;
                trackEvent('rating_submitted', {
                    'rating': rating
                });
                
                // Update visual feedback
                stars.forEach((s, i) => {
                    if (i < rating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
        });
    });
}

// Initialize star ratings when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStarRatings);
} else {
    initStarRatings();
}

// Social media share tracking
document.querySelectorAll('[data-share-platform]').forEach(btn => {
    btn.addEventListener('click', function() {
        const platform = this.getAttribute('data-share-platform');
        trackEvent('social_share', {
            'platform': platform
        });
    });
});

// Console message for brand awareness
console.log('%c🧖 Welcome to Taniya Spa!', 'font-size: 20px; color: #C41E3A; font-weight: bold;');
console.log('%cCall us: +91-7042206572', 'font-size: 14px; color: #8B0000;');
