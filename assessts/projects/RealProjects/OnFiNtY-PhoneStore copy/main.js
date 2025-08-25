// A helpful AI assistant built by Google.

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

// Carousel functionality
let currentCarouselIndex = 0;
const carouselButtons = document.querySelectorAll('.carousel-btn');
const stepPhones = document.querySelector('.step-phones');
const totalItems = document.querySelectorAll('.step-phone').length;

if (stepPhones) {
    carouselButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('prev-btn')) {
                currentCarouselIndex = (currentCarouselIndex - 1 + totalItems) % totalItems;
            } else {
                currentCarouselIndex = (currentCarouselIndex + 1) % totalItems;
            }
            updateCarousel();
        });
    });

    function updateCarousel() {
        const translateX = -currentCarouselIndex * 100 / totalItems;
        stepPhones.style.transform = `translateX(${translateX}%)`;
    }
}

// FAQ Toggle
function toggleFAQ(button) {
    const faqItem = button.closest('.faq-item');
    if (faqItem) {
        faqItem.classList.toggle('active');
    }
}

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => toggleFAQ(button));
});

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    alert(`Thank you for subscribing with ${email}! You'll receive updates soon.`);
    event.target.reset();
}

// Chat function
function startChat() {
    alert('Chat feature would open here! Our support team is ready to help you.');
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observerInstance.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});