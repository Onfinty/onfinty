        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? '🌙' : '🌞';
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
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

        // Intersection Observer for fade-in animations
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

        // Observe all elements with fade-in class
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Video play functionality
        document.querySelector('.play-button').addEventListener('click', () => {
            const video = document.getElementById('showcaseVideo');
            video.style.display = 'block';
            video.play();
        });

        // Add hover effects to model cards
        document.querySelectorAll('.model-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add glowing effect to CTA buttons
        document.querySelectorAll('.cta-btn, .final-cta-btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.boxShadow = '0 0 30px rgba(255, 0, 64, 0.6)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.boxShadow = '0 10px 30px rgba(255, 0, 64, 0.4)';
            });
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-bg');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Add dynamic typing effect to hero title
        const heroTitle = document.querySelector('.hero-content h1');
        const originalText = heroTitle.textContent;
        
        function typeWriter(text, element, speed = 100) {
            element.textContent = '';
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, speed);
        }

        // Trigger typing effect after page load
        setTimeout(() => {
            typeWriter(originalText, heroTitle, 150);
        }, 1000);

        // Add counter animation for performance stats
        function animateCounter(element, target, duration = 2000) {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start);
                }
            }, 16);
        }

        // Initialize counters when performance section comes into view
        const performanceSection = document.querySelector('.performance-section');
        const performanceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add any counter animations here if needed
                    performanceObserver.unobserve(entry.target);
                }
            });
        });

        if (performanceSection) {
            performanceObserver.observe(performanceSection);
        }

        // Add floating animation to tech cards
        document.querySelectorAll('.tech-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
            card.style.animation = 'float 3s ease-in-out infinite';
        });

        // Add CSS keyframes for floating animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            
            .tech-card {
                animation: float 3s ease-in-out infinite;
            }
            
            .tech-card:nth-child(2) { animation-delay: 0.5s; }
            .tech-card:nth-child(3) { animation-delay: 1s; }
            .tech-card:nth-child(4) { animation-delay: 1.5s; }
        `;
        document.head.appendChild(style);

        // Add particle effect to hero section
        function createParticles() {
            const hero = document.querySelector('.hero');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '2px';
                particle.style.height = '2px';
                particle.style.background = 'rgba(255, 255, 255, 0.5)';
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animation = `twinkle ${2 + Math.random() * 3}s infinite`;
                hero.appendChild(particle);
            }
        }

        // Add twinkle animation
        const twinkleStyle = document.createElement('style');
        twinkleStyle.textContent = `
            @keyframes twinkle {
                0%, 100% { opacity: 0; transform: scale(0); }
                50% { opacity: 1; transform: scale(1); }
            }
        `;
        document.head.appendChild(twinkleStyle);

        // Initialize particles
        createParticles();
