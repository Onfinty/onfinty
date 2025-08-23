// Mobile menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
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

// Improved Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('features')) {
                entry.target.classList.add('animated');
                const featureCards = entry.target.querySelectorAll('.feature-card');
                featureCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animated');
                    }, index * 200);
                });
            } else {
                entry.target.classList.add('animated');
            }
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('.features, .about, .cta-section').forEach(section => {
    observer.observe(section);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(249, 249, 249, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--light-bg)';
        header.style.backdropFilter = 'blur(10px)';
    }
});
