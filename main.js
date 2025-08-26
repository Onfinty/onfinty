
// Typing Animation for Title
function typeWriter(element, text, speed = 100, callback) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Add blinking cursor after typing is complete
            element.innerHTML += '<span class="cursor">|</span>';
            if (callback) callback();
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const typingTitle = document.getElementById('typingTitle') ;

    const titleText = 'OnFiNtY Portfolio'  ;
   
    setTimeout(() => {
        typeWriter(typingTitle, titleText, 150);
    }, 1000);
});

// Particle Animation System
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 70;
    const letters = ["O", "N", "F", "I", "T", "Y"];

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random letter من array
        particle.textContent = letters[Math.floor(Math.random() * letters.length)];

        // Random starting position
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        particle.style.opacity = Math.random() * 0.5 + 0.1;

        container.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            if (container.contains(particle)) {
                container.removeChild(particle);
            }
        }, 25000);
    }

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
        setTimeout(createParticle, i * 500);
    }

    // Continuously create new particles
    setInterval(createParticle, 2000);
}


// Background Music Control
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
let isMuted = true;

musicToggle.addEventListener('click', () => {
    if (isMuted) {
        backgroundMusic.play().catch(e => {
            console.log('Audio play failed:', e);
        });
        musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        musicToggle.classList.remove('muted');
        isMuted = false;
    } else {
        backgroundMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        musicToggle.classList.add('muted');
        isMuted = true;
    }
});

// Set initial volume
backgroundMusic.volume = 0.7;

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
            if (entry.target.classList.contains('service-card') ||
                entry.target.classList.contains('project-card') ||
                entry.target.classList.contains('contact-card')) {

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

// Mobile menu functionality
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav');

mobileMenu.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'var(--bg-card)';
        nav.style.flexDirection = 'column';
        nav.style.padding = '2rem';
        nav.style.borderRadius = '0 0 20px 20px';
        nav.style.border = '1px solid var(--border)';
    }
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

// Add subtle hover effects to social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.1)';
    });

    link.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Performance optimization: Throttle scroll events
let ticking = false;

function updateScrollEffects() {
    // Header scroll effect
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

// Initialize particles when page loads
window.addEventListener('load', () => {
    setTimeout(createParticles, 2000);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
