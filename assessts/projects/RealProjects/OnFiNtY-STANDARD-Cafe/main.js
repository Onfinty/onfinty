// Function to show page with fade-in effect on load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Mouse glow effect
function initMouseGlow() {
    const mouseGlow = document.querySelector('.mouse-glow');
    if (!mouseGlow) return;

    document.body.addEventListener('mousemove', (e) => {
        mouseGlow.style.left = e.clientX + 'px';
        mouseGlow.style.top = e.clientY + 'px';
    });
}

// Smooth scrolling for navigation
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

const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observerInstance.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.about, .contact').forEach(el => {
    observer.observe(el);
});

// Staggered animation for menu cards using CSS
const menuCards = document.querySelectorAll('.menu-card');
menuCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Initialize all functions on page load
window.addEventListener('load', () => {
    initMouseGlow();
});