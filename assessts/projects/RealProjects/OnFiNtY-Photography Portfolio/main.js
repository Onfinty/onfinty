

// Particles Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Smooth Scrolling
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

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate counters
            if (entry.target.classList.contains('stat-number')) {
                animateCounter(entry.target);
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.section-title, .portfolio-item, .service-card, .stat-number').forEach(el => {
    observer.observe(el);
});

// Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    let count = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(count);
        }
    }, 40);
}

// Portfolio Modal
let currentImageIndex = 0;
const portfolioImages = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=800&fit=crop'
];

// Portfolio item click handlers
document.querySelectorAll('.portfolio-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImageIndex = index;
        openModal();
    });
});

function openModal() {
    const modal = document.getElementById('portfolioModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = portfolioImages[currentImageIndex];
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('portfolioModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeModalImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= portfolioImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = portfolioImages.length - 1;
    }
    document.getElementById('modalImage').src = portfolioImages[currentImageIndex];
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('portfolioModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('portfolioModal');
    if (modal.style.display === 'block') {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            changeModalImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeModalImage(1);
        }
    }
});

// Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    showSlide(currentSlide);
}

// Auto-play testimonials
setInterval(() => {
    changeSlide(1);
}, 5000);

// Contact Form
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');

    // Animate submit button
    submitBtn.textContent = 'Sending...';
    submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';

    // Simulate form submission
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        setTimeout(() => {
            submitBtn.textContent = 'Send Message';
            submitBtn.style.background = 'linear-gradient(45deg, var(--primary-cyan), var(--primary-coral))';
            form.reset();
        }, 2000);
    }, 1500);
}

// Navigation background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();

    // Add some delay to portfolio items for staggered animation
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.transitionDelay = (index * 0.1) + 's';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
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

// Add CSS for ripple effect
const rippleCSS = `
            .btn {
                position: relative;
                overflow: hidden;
            }
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                pointer-events: none;
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
            }
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;

const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);
