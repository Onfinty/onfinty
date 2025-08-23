// Particle Animation System
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 15;
    const letters = ["O", "N", "F", "I", "T", "Y"];

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = letters[Math.floor(Math.random() * letters.length)];
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        particle.style.opacity = Math.random() * 0.5 + 0.1;

        container.appendChild(particle);

        setTimeout(() => {
            if (container.contains(particle)) {
                container.removeChild(particle);
            }
        }, 25000);
    }

    for (let i = 0; i < particleCount; i++) {
        setTimeout(createParticle, i * 500);
    }

    setInterval(createParticle, 3000);
}

// Loader functionality
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');

    setTimeout(() => {
        loader.classList.add('hidden');

        // Start particles after loader
        setTimeout(() => {
            createParticles();
        }, 500);
    }, 2000);
});

// Header scroll effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
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

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Add staggered animation for grid items
            if (entry.target.classList.contains('overview-card') ||
                entry.target.classList.contains('screenshot-card') ||
                entry.target.classList.contains('feature-item')) {

                const siblings = [...entry.target.parentElement.children];
                const index = siblings.indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        let ripple = document.createElement('span');
        let rect = this.getBoundingClientRect();
        let size = Math.max(rect.width, rect.height);
        let x = e.clientX - rect.left - size / 2;
        let y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple keyframes
const style = document.createElement('style');
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

// Performance optimization: Throttle scroll events
let ticking = false;

function updateScrollEffects() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Add hover effects to cards
document.querySelectorAll('.overview-card, .screenshot-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(-10px)';
    });
});

// Add loading animation for page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add typing effect for page title (optional enhancement)
function addTypingEffect() {
    const title = document.querySelector('.page-title');
    const originalText = title.textContent;
    title.textContent = '';

    let i = 0;
    function type() {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    setTimeout(type, 1000);
}

// Uncomment the line below if you want typing effect for the title
// addTypingEffect();

// Enhanced scroll reveal animation
const revealElements = document.querySelectorAll('.fade-in');

const revealElementOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealElementOnScroll);

// Initial check for elements already in view
revealElementOnScroll();
