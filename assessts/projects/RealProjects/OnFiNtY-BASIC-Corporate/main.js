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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;

            if (element.classList.contains('section-title')) {
                element.classList.add('fade-in');
            }

            if (element.classList.contains('service-card')) {
                setTimeout(() => {
                    element.classList.add('fade-in');
                }, Array.from(element.parentNode.children).indexOf(element) * 200);
            }

            if (element.classList.contains('about-text')) {
                element.querySelector('h2').classList.add('slide-in-left');
                const features = element.querySelectorAll('.about-features li');
                features.forEach((feature, index) => {
                    setTimeout(() => {
                        feature.classList.add('slide-in-left');
                    }, index * 150);
                });
            }

            if (element.classList.contains('about-image')) {
                element.classList.add('slide-in-right');
            }

            if (element.classList.contains('cta')) {
                setTimeout(() => {
                    element.querySelector('h2').classList.add('fade-in');
                }, 200);
                setTimeout(() => {
                    element.querySelector('.btn').classList.add('fade-in');
                }, 400);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.section-title, .service-card, .about-text, .about-image, .cta, img').forEach(el => {
    observer.observe(el);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(248, 250, 252, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--white)';
        header.style.backdropFilter = 'none';
    }
});

// Add hover effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 10px 25px rgba(249, 115, 22, 0.3)';
    });

    btn.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});