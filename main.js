// Projects Data Configuration
const projects = [
    {
        id: "login-ui-trilogy",
        icon: '<i class="fas fa-layer-group"></i>',
        category: "UI/UX DESIGN SHOWCASE",
        title: "Triple Threat Login Screens",
        description: "Three distinct login experiences showcasing different design philosophies - from sleek minimalism to luxurious glassmorphism.",
        longDescription: "This project is a playground of login screen aesthetics, featuring three completely different approaches to user authentication interfaces. Each design tells its own story and creates a unique emotional connection with users. Whether you prefer the mysterious allure of dark themes, the fresh optimism of light designs, or the futuristic elegance of glassmorphism, this collection has you covered. Built with Flutter's most powerful animation and styling capabilities, each screen is production-ready and fully responsive.",
        features: [
            "Three Complete Design Systems - Dark, Light, and Glassmorphic themes",
            "Buttery Smooth Animations - Using flutter_animate for professional transitions",
            "Pixel-Perfect Responsive Design - Looks amazing on every device size",
            "Custom Reusable Components - Clean architecture for easy maintenance",
            "Interactive Micro-Interactions - Focus states, hover effects, and delightful feedback",
            "Form Validation Logic - Real-world authentication handling",
            "Gradient & Shadow Mastery - Advanced visual depth techniques",
            "Production-Ready Code - Clean, documented, and scalable"
        ],
        designs: [
            {
                name: "Dark Mode Elegance",
                file: "dark.dart",
                description: "The Batman of login screens - sleek, sophisticated, and a little mysterious. This design embraces the dark side with a pure black background and crisp white accents. Features a minimalist approach where every pixel has a purpose.",
                highlights: [
                    "Pure Black (#121212) background for OLED perfection",
                    "White-on-black high contrast for accessibility",
                    "Subtle radial gradient that whispers, not shouts",
                    "Floating white button that practically begs to be clicked",
                    "Inter font family for that 'I mean business' look",
                    "Animated entrance effects that make users go 'ooh'",
                    "Focus states that glow like a lightsaber (but classier)",
                    "Perfect for: Late-night coding sessions and cybersecurity apps"
                ]
            },
            {
                name: "Light Mode Delight",
                file: "light.dart",
                description: "The friendly neighborhood login screen that greets you with a smile. Soft colors, rounded everything, and a general vibe of 'hey, come on in!' This is what happens when minimalism meets personality.",
                highlights: [
                    "Soft off-white (#F8F9FD) that's easy on the eyes",
                    "Indigo accent color (#4F46E5) for that pop of confidence",
                    "Super-rounded inputs (20px radius!) for maximum friendliness",
                    "Waving hand icon because who doesn't love a good greeting?",
                    "Social login buttons styled like little clouds",
                    "Poppins font that says 'I'm modern but approachable'",
                    "Hover effects that lift elements like magic carpets",
                    "Perfect for: Lifestyle apps, social platforms, and anything fun"
                ]
            },
            {
                name: "Glassmorphism Premium",
                file: "login.dart",
                description: "The showstopper. The one that makes other login screens jealous. This design uses glassmorphism (frosted glass effect) with glowing orbs and premium animations. It's like logging into a spaceship's control panel, but user-friendly.",
                highlights: [
                    "Frosted glass card with BackdropFilter blur (sigma 15!)",
                    "Ambient glowing orbs that float in the background",
                    "Multi-layer gradient background that creates depth",
                    "Shimmer effect on buttons (yes, really)",
                    "Password visibility toggle with smooth icon transitions",
                    "Form validation with elegant error states",
                    "Mock authentication with loading states",
                    "Perfect for: Premium apps, crypto wallets, and showing off"
                ]
            }
        ],
        technologies: ["Flutter", "Dart", "flutter_animate", "flutter_screenutil", "Glassmorphism", "Material Design", "Google Fonts"],
        technicalDetails: [
            "Responsive Design: Uses flutter_screenutil for consistent sizing across devices",
            "Animation Library: flutter_animate for declarative, chainable animations",
            "State Management: StatefulWidget with clean separation of concerns",
            "Custom Widgets: Reusable components for consistency and maintainability",
            "Typography: Google Fonts integration (Inter, Poppins, JetBrains Mono)",
            "Color Theory: Carefully chosen palettes for each theme",
            "Accessibility: High contrast ratios and proper focus indicators",
            "Performance: Optimized animations with 60fps target"
        ],
        images: [
            { url: "assets/login1.png", desc: "Dark Mode - The Minimalist Masterpiece" },
            { url: "assets/login2.png", desc: "Light Mode - Fresh and Friendly" },
            { url: "assets/login3.png", desc: "Glassmorphism - The Premium Experience" }
        ],
        link: "https://github.com/Onfinty"
    }
];


// Helper to determine page type
const isDetailsPage = window.location.pathname.includes('project-details.html');
const isStartProjectPage = window.location.pathname.includes('start-project.html');

// Render Projects (Index Page)
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return; // Exit if not on index page

    grid.innerHTML = projects.map((project, index) => `
        <div class="project-card fade-in" style="transition-delay: ${index * 0.1}s">
            <div class="project-image">
                ${project.icon}
            </div>
            <div class="project-content">
                <p class="project-category">${project.category}</p>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="project-details.html?id=${project.id}" class="project-link">
                    View Details <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');

    // Re-observe new elements for intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(el => observer.observe(el));
}

// Render Project Details (Details Page)
function loadProjectDetails() {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        // Redirect or show error if project not found
        document.body.innerHTML = '<div style="color:white; text-align:center; padding:5rem;"><h1>Project Not Found</h1><a href="index.html" style="color:#8b5cf6">Return Home</a></div>';
        return;
    }

    // Populate Title and Meta
    document.title = `${project.title} - Project Details`;

    // Header Info
    const titleEl = document.getElementById('detailTitle');
    const categoryEl = document.getElementById('detailCategory');
    const descEl = document.getElementById('detailDescription');
    const techStackEl = document.getElementById('detailTech');
    const externalLinkEl = document.getElementById('externalLink');

    if (titleEl) titleEl.innerText = project.title;
    if (categoryEl) categoryEl.innerText = project.category;
    if (descEl) descEl.innerText = project.longDescription;
    if (externalLinkEl) externalLinkEl.href = project.link;

    if (techStackEl) {
        techStackEl.innerHTML = project.technologies.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('');
    }

    // Features List
    const featuresList = document.getElementById('featuresList');
    if (featuresList) {
        featuresList.innerHTML = project.features.map(feature =>
            `<li><i class="fas fa-check-circle"></i> ${feature}</li>`
        ).join('');
    }

    // Images Gallery
    const galleryGrid = document.getElementById('galleryGrid');
    if (galleryGrid) {
        galleryGrid.innerHTML = project.images.map((img, idx) => `
            <div class="gallery-item fade-in" style="transition-delay: ${idx * 0.15}s">
                <img src="${img.url}" alt="${img.desc}" loading="lazy">
                <p class="image-caption">${img.desc}</p>
            </div>
        `).join('');
    }

    // Render Design Breakdown Cards
    if (project.designs) {
        const designCardsGrid = document.getElementById('designCardsGrid');
        if (designCardsGrid) {
            designCardsGrid.innerHTML = project.designs.map((design, idx) => `
            <div class="design-card fade-in" style="transition-delay: ${idx * 0.15}s">
                <div class="design-card-header">
                    <div class="design-number">${idx + 1}</div>
                    <h4>${design.name}</h4>
                </div>
                <div class="design-file">${design.file}</div>
                <p>${design.description}</p>
                <ul class="highlights-list">
                    ${design.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            </div>
        `).join('');
        }
    }

    // Render Technical Details
    if (project.technicalDetails) {
        const technicalGrid = document.getElementById('technicalGrid');
        if (technicalGrid) {
            technicalGrid.innerHTML = project.technicalDetails.map((detail, idx) => {
                const [title, description] = detail.split(':');
                return `
                <div class="technical-item fade-in" style="transition-delay: ${idx * 0.1}s">
                    <strong>${title}</strong>
                    <span>${description}</span>
                </div>
            `;
            }).join('');
        }
    }
}

// Typing Animation
function typeWriter(element, text, speed = 80) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.innerHTML += '<span class="cursor">|</span>';
        }
    }
    type();
}

// Particles
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return; // Exit if no container

    const symbols = [
        '<i class="fa fa-code"></i>',
        '<i class="fas fa-paint-brush"></i>',
        '<i class="fas fa-mobile-alt"></i>',
        '<i class="fas fa-cube"></i>',
        '<i class="fas fa-layer-group"></i>'
    ];

    function createParticle() {
        if (document.hidden) return;

        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 15 + 15) + 's';
        particle.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        particle.style.color = `hsl(${250 + Math.random() * 30}, 70%, ${60 + Math.random() * 20}%)`;

        container.appendChild(particle);

        setTimeout(() => {
            if (container.contains(particle)) {
                container.removeChild(particle);
            }
        }, 30000);
    }

    for (let i = 0; i < 15; i++) {
        setTimeout(createParticle, i * 600);
    }

    setInterval(createParticle, 3000);
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    // Shared initializations
    document.body.style.opacity = '1';

    // Page specific logic
    if (isDetailsPage) {
        loadProjectDetails();
    } else if (isStartProjectPage) {
        initMultiStepForm();
    } else {
        // Index page logic
        const typingTitle = document.getElementById('typingTitle');
        if (typingTitle) typeWriter(typingTitle, 'Flutter Developer', 100);
        renderProjects();
    }

    // Common Effects
    setTimeout(createParticles, 1000);

    // Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile menu
const mobileMenu = document.getElementById('mobileMenu');
const nav = document.getElementById('nav');

if (mobileMenu && nav) {
    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Music Player (Common)
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

if (musicBtn && bgMusic) {
    bgMusic.volume = 0.5;
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = '<i class="fas fa-music"></i>';
            musicBtn.classList.remove('playing');
            isPlaying = false;
        } else {
            const playPromise = bgMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    musicBtn.classList.add('playing');
                    isPlaying = true;
                })
                    .catch(error => {
                        console.log('Audio play failed:', error);
                    });
            }
        }
    });
}

// Button effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        // ... (existing ripple logic)
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple-effect 0.6s ease-out;
            pointer-events: none;
        `;

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Cursor
if (window.matchMedia("(min-width: 992px)").matches) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(139, 92, 246, 0.5);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.15s ease, opacity 0.3s;
        mix-blend-mode: screen;
        transform: translate(-50%, -50%);
        left: -100px;
        top: -100px;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const interactives = document.querySelectorAll('a, button, .project-card, .skill-card, .gallery-item');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%, -50%) scale(1.8)');
        el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');
    });
}

// Multi-step Form Logic
function initMultiStepForm() {
    const form = document.getElementById('projectForm');
    if (!form) return;

    const steps = document.querySelectorAll('.form-step');
    const stepIndicators = document.querySelectorAll('.step');
    const stepLines = document.querySelectorAll('.step-line');
    let currentStep = 1;

    // Next Buttons
    document.querySelectorAll('.next-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                if (currentStep < steps.length) {
                    currentStep++;
                    updateForm();
                }
            }
        });
    });

    // Prev Buttons
    document.querySelectorAll('.prev-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateForm();
            }
        });
    });

    // Validation
    function validateStep(stepIndex) {
        const currentStepEl = document.querySelector(`.form-step[data-index="${stepIndex}"]`);
        const inputs = currentStepEl.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
                input.reportValidity();
                // Shake effect
                input.closest('.input-group')?.classList.add('shake');
                setTimeout(() => input.closest('.input-group')?.classList.remove('shake'), 500);
            }
        });

        // Specific checks for checkboxes/radios if needed
        if (stepIndex === 1) {
            const checked = currentStepEl.querySelector('input[name="work_type"]:checked');
            if (!checked) {
                alert('Please select at least one work type.');
                isValid = false;
            }
        }

        return isValid;
    }

    // Update UI
    function updateForm() {
        // Steps
        steps.forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.dataset.index) === currentStep) {
                step.classList.add('active');
            }
        });

        // Indicators
        stepIndicators.forEach(indicator => {
            const stepNum = parseInt(indicator.dataset.step);
            indicator.classList.remove('active', 'completed');
            if (stepNum === currentStep) {
                indicator.classList.add('active');
            } else if (stepNum < currentStep) {
                indicator.classList.add('completed');
                indicator.innerHTML = '<i class="fas fa-check"></i>';
            } else {
                indicator.innerText = stepNum;
            }
        });

        // Lines
        stepLines.forEach((line, idx) => {
            line.classList.remove('active');
            if (idx < currentStep - 1) {
                line.classList.add('active');
            }
        });

        // Scroll to top of form
        document.querySelector('.form-header').scrollIntoView({ behavior: 'smooth' });
    }

    // Submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!validateStep(currentStep)) return;

        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        // Collect Data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            // Handle multiple checkboxes
            if (data[key]) {
                if (!Array.isArray(data[key])) {
                    data[key] = [data[key]];
                }
                data[key].push(value);
            } else {
                data[key] = value;
            }
        });

        // Real Implementation:
        console.log("🚀 Sending Project Data:", data); // Debug Log
        if (!data.user_email) console.error("⚠️ CRITICAL: user_email is missing or empty!");

        // Send Admin Notification (To You)
        const sendAdmin = emailjs.send("service_fr0ds6h", "template_yj6kehu", data);

        // Send Client Confirmation (To Client) 
        const sendClient = emailjs.send("service_fr0ds6h", "template_hhmqz5n", data);

        // Wait for both
        Promise.all([sendAdmin, sendClient])
            .then(function () {
                console.log("✅ Both emails sent successfully!");
                form.style.display = 'none';
                document.getElementById('successMessage').style.display = 'block';
                confettiEffect();
            })
            .catch(function (error) {
                console.error("❌ Email Error:", error);

                // If at least one failed, we still show success if it's likely just the client one failing due to bad config
                // regarding the 'mixed results', but usually Promise.all rejects if one fails.
                // For UX, we might want to alert if the ADMIN one fails specifically. 
                // But simple approach:
                alert("Something went wrong sending the data. Please try again or email directly.");
                btn.innerHTML = originalText;
                btn.disabled = false;
            });

    });
}

// Simple Confetti
function confettiEffect() {
    const container = document.querySelector('.form-wrapper');
    const colors = ['#8b5cf6', '#a78bfa', '#ffffff'];

    for (let i = 0; i < 50; i++) {
        const conf = document.createElement('div');
        conf.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            animation: pop ${0.5 + Math.random()}s ease-out forwards;
            transform: rotate(${Math.random() * 360}deg);
        `;

        // Random trajectory
        const angle = Math.random() * Math.PI * 2;
        const velocity = 100 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        conf.animate([
            { transform: 'translate(-50%, -50%)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0, .9, .57, 1)',
        });

        container.appendChild(conf);
        setTimeout(() => conf.remove(), 1000);
    }
}
