// ====== PHOTOGRAPHY PORTFOLIO MODULE ======
const PhotographyPortfolio = (function() {
    // Private variables
    let currentImageIndex = 0;
    let currentSlide = 0;
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

    // Private methods
    function createParticles() {
        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }
        
        const particlesContainer = document.getElementById('particles');
        const particleCount = window.innerWidth < 768 ? 20 : 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    const navLinks = document.querySelector('.nav-links');
                    const mobileToggle = document.querySelector('.mobile-menu-toggle');
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        mobileToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        });
    }

    function initScrollAnimations() {
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
    }

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

    function initMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            mobileToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    function initPortfolioFiltering() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                
                // Update active filter button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter portfolio items
                portfolioItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    function initImageLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('src');
                    
                    img.addEventListener('load', () => {
                        img.classList.add('loaded');
                        const placeholder = img.previousElementSibling;
                        if (placeholder && placeholder.classList.contains('image-placeholder')) {
                            placeholder.style.display = 'none';
                        }
                    });
                    
                    img.addEventListener('error', () => {
                        const placeholder = img.previousElementSibling;
                        if (placeholder && placeholder.classList.contains('image-placeholder')) {
                            placeholder.innerHTML = '<span class="error-icon">⚠️</span>';
                        }
                    });
                    
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }

    function initPortfolioModal() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        const modal = document.getElementById('portfolioModal');
        const modalImage = document.getElementById('modalImage');
        const closeBtn = document.querySelector('.close');
        const prevBtn = document.querySelector('.modal-prev');
        const nextBtn = document.querySelector('.modal-next');

        portfolioItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentImageIndex = index;
                openModal();
            });
        });

        function openModal() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            updateModalImage();
        }

        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function updateModalImage() {
            modalImage.src = '';
            modalImage.classList.remove('loaded');
            const placeholder = modalImage.previousElementSibling;
            placeholder.style.display = 'flex';
            
            modalImage.src = portfolioImages[currentImageIndex];
            modalImage.alt = `Portfolio image ${currentImageIndex + 1}`;
        }

        modalImage.addEventListener('load', () => {
            modalImage.classList.add('loaded');
            const placeholder = modalImage.previousElementSibling;
            placeholder.style.display = 'none';
        });

        closeBtn.addEventListener('click', closeModal);
        
        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + portfolioImages.length) % portfolioImages.length;
            updateModalImage();
        });
        
        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % portfolioImages.length;
            updateModalImage();
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (modal.style.display === 'block') {
                if (e.key === 'Escape') {
                    closeModal();
                } else if (e.key === 'ArrowLeft') {
                    currentImageIndex = (currentImageIndex - 1 + portfolioImages.length) % portfolioImages.length;
                    updateModalImage();
                } else if (e.key === 'ArrowRight') {
                    currentImageIndex = (currentImageIndex + 1) % portfolioImages.length;
                    updateModalImage();
                }
            }
        });
    }

    function initTestimonialSlider() {
        const slides = document.querySelectorAll('.testimonial-slide');
        const totalSlides = slides.length;
        const prevBtn = document.querySelector('.testimonial-slider .prev');
        const nextBtn = document.querySelector('.testimonial-slider .next');

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        function changeSlide(direction) {
            currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }

        prevBtn.addEventListener('click', () => changeSlide(-1));
        nextBtn.addEventListener('click', () => changeSlide(1));

        // Auto-play testimonials
        setInterval(() => {
            changeSlide(1);
        }, 5000);
    }

    function initContactForm() {
        const form = document.querySelector('.contact-form');
        const feedback = document.querySelector('.form-feedback');

        function showFeedback(message, type) {
            feedback.textContent = message;
            feedback.className = `form-feedback ${type}`;
            feedback.style.display = 'block';
            
            setTimeout(() => {
                feedback.style.display = 'none';
            }, 5000);
        }

        function validateForm() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                showFeedback('Please fill all required fields', 'error');
                return false;
            }
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFeedback('Please enter a valid email address', 'error');
                return false;
            }
            
            return true;
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm()) {
                return;
            }
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                showFeedback('Message sent successfully! I\'ll get back to you soon.', 'success');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    function initNavigationBackground() {
        const nav = document.querySelector('nav');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });
    }

    function initRippleEffect() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function(e) {
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

    // Public API
    return {
        init: function() {
            createParticles();
            initSmoothScrolling();
            initScrollAnimations();
            initMobileMenu();
            initPortfolioFiltering();
            initImageLoading();
            initPortfolioModal();
            initTestimonialSlider();
            initContactForm();
            initNavigationBackground();
            initRippleEffect();
            
            // Add staggered animation to portfolio items
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            portfolioItems.forEach((item, index) => {
                item.style.transitionDelay = (index * 0.1) + 's';
            });
        }
    };
})();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', PhotographyPortfolio.init);