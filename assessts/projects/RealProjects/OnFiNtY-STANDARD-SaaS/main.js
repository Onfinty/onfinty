// Enhanced, production-ready JavaScript with error handling
class FlowTrackApp {
    constructor() {
        this.init();
    }

    init() {
        this.loadTheme();
        this.setupEventListeners();
        this.setupAccessibility();
        this.handlePerformance();
    }

    // Theme management with error handling
    toggleTheme() {
        try {
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle i');

            if (body.dataset.theme === 'dark') {
                body.dataset.theme = 'light';
                themeToggle.className = 'fas fa-moon';
                themeToggle.parentElement.setAttribute('aria-label', 'Switch to dark mode');
                this.announceThemeChange('Switched to light mode');
            } else {
                body.dataset.theme = 'dark';
                themeToggle.className = 'fas fa-sun';
                themeToggle.parentElement.setAttribute('aria-label', 'Switch to light mode');
                this.announceThemeChange('Switched to dark mode');
            }
        } catch (error) {
            console.error('Theme toggle failed:', error);
        }
    }

    loadTheme() {
        try {
            // Default to light theme for demo
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle i');

            body.dataset.theme = 'light';
            themeToggle.className = 'fas fa-moon';
            themeToggle.parentElement.setAttribute('aria-label', 'Switch to dark mode');
        } catch (error) {
            console.error('Theme loading failed:', error);
        }
    }

    // Enhanced smooth scrolling with error handling
    setupSmoothScrolling() {
        try {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    const href = anchor.getAttribute('href');
                    if (href === '#') return;

                    e.preventDefault();
                    const target = document.querySelector(href);

                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });

                        // Update focus for accessibility
                        target.setAttribute('tabindex', '-1');
                        target.focus();
                    }
                });
            });
        } catch (error) {
            console.error('Smooth scrolling setup failed:', error);
        }
    }

    // Performance optimizations
    handlePerformance() {
        try {
            // Throttle scroll events for better performance
            let scrollTimeout;
            const throttledScrollHandler = () => {
                if (!scrollTimeout) {
                    scrollTimeout = setTimeout(() => {
                        this.handleNavbarScroll();
                        this.handleScrollAnimations();
                        this.handleParallax();
                        scrollTimeout = null;
                    }, 16); // ~60fps
                }
            };

            window.addEventListener('scroll', throttledScrollHandler, { passive: true });

            // Setup intersection observer for better performance
            this.setupIntersectionObserver();
        } catch (error) {
            console.error('Performance optimization failed:', error);
        }
    }

    handleNavbarScroll() {
        try {
            const navbar = document.querySelector('.navbar');
            const isDark = document.body.dataset.theme === 'dark';

            if (window.scrollY > 50) {
                navbar.style.background = isDark
                    ? 'rgba(31, 41, 55, 0.98)'
                    : 'rgba(255, 255, 255, 0.98)';
                navbar.style.backdropFilter = 'blur(15px)';
            } else {
                navbar.style.background = isDark
                    ? 'rgba(31, 41, 55, 0.95)'
                    : 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        } catch (error) {
            console.error('Navbar scroll handling failed:', error);
        }
    }

    // Enhanced scroll animations
    handleScrollAnimations() {
        try {
            const elements = document.querySelectorAll('.fade-in:not(.visible)');
            const windowHeight = window.innerHeight;

            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        } catch (error) {
            console.error('Scroll animations failed:', error);
        }
    }

    // Parallax effect for floating shapes
    handleParallax() {
        try {
            const shapes = document.querySelectorAll('.shape');
            const scrolled = window.pageYOffset;

            shapes.forEach((shape, index) => {
                const rate = scrolled * -0.3 * (index + 1) * 0.1;
                shape.style.transform = `translateY(${rate}px)`;
            });
        } catch (error) {
            console.error('Parallax effect failed:', error);
        }
    }

    // Setup intersection observer for better performance
    setupIntersectionObserver() {
        try {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Observe all fade-in elements
            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        } catch (error) {
            console.error('Intersection observer setup failed:', error);
        }
    }

    // Accessibility enhancements
    setupAccessibility() {
        try {
            // Keyboard navigation for custom elements
            document.querySelectorAll('.btn, .theme-toggle').forEach(element => {
                element.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        element.click();
                    }
                });
            });

            // Announce theme changes to screen readers
            const announcer = document.createElement('div');
            announcer.setAttribute('aria-live', 'polite');
            announcer.setAttribute('aria-atomic', 'true');
            announcer.className = 'sr-only';
            document.body.appendChild(announcer);
            this.announcer = announcer;

        } catch (error) {
            console.error('Accessibility setup failed:', error);
        }
    }

    // Announce changes for screen readers
    announceThemeChange(message) {
        if (this.announcer) {
            this.announcer.textContent = message;
        }
    }

    // Enhanced event listener setup
    setupEventListeners() {
        try {
            this.setupSmoothScrolling();
            this.setupFormHandling();
            this.setupFeatureCardEffects();

            // Global error handler
            window.addEventListener('error', (e) => {
                console.error('Global error:', e.error);
            });

            // Handle unhandled promise rejections
            window.addEventListener('unhandledrejection', (e) => {
                console.error('Unhandled promise rejection:', e.reason);
                e.preventDefault();
            });

        } catch (error) {
            console.error('Event listener setup failed:', error);
        }
    }

    // Enhanced form handling
    setupFormHandling() {
        try {
            const form = document.querySelector('.email-form');
            if (form) {
                form.addEventListener('submit', (e) => this.handleFormSubmission(e));
            }
        } catch (error) {
            console.error('Form handling setup failed:', error);
        }
    }

    // Feature card hover effects
    setupFeatureCardEffects() {
        try {
            const featureCards = document.querySelectorAll('.feature-card');
            featureCards.forEach((card) => {
                card.addEventListener('mouseenter', function () {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                    this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                });

                card.addEventListener('mouseleave', function () {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        } catch (error) {
            console.error('Feature card effects setup failed:', error);
        }
    }

    // Public methods
    scrollToTop() {
        try {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } catch (error) {
            console.error('Scroll to top failed:', error);
            window.scrollTo(0, 0); // Fallback
        }
    }

    showDemo() {
        try {
            this.announceThemeChange('Demo video would open here in a real application');
            alert('Demo video would open here in a real application');
        } catch (error) {
            console.error('Demo display failed:', error);
        }
    }

    handleFormSubmission(e) {
        try {
            e.preventDefault();

            const form = e.target;
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            // Add loading state
            submitBtn.classList.add('loading');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing up...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Success!';
                submitBtn.classList.remove('loading');

                this.announceThemeChange('Successfully signed up for FlowTrack');

                // Reset form
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    form.reset();
                }, 2000);
            }, 2000);
        } catch (error) {
            console.error('Form submission failed:', error);
        }
    }

    // Typing effect for hero title
    addTypingEffect() {
        try {
            const heroTitle = document.getElementById('hero-title');
            const text = heroTitle.textContent;
            heroTitle.textContent = '';

            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 80);
        } catch (error) {
            console.error('Typing effect failed:', error);
        }
    }
}

// Global functions for backward compatibility
let app;

function toggleTheme() {
    if (app) app.toggleTheme();
}

function scrollToTop() {
    if (app) app.scrollToTop();
}

function showDemo() {
    if (app) app.showDemo();
}

function handleFormSubmission(e) {
    if (app) app.handleFormSubmission(e);
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        app = new FlowTrackApp();
        // Start typing effect after page loads
        setTimeout(() => app.addTypingEffect(), 500);
    });
} else {
    app = new FlowTrackApp();
    setTimeout(() => app.addTypingEffect(), 500);
}
