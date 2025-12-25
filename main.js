// ============================================
// 🎄 CHRISTMAS MODE TOGGLE 🎄
// Set to false to disable Christmas decorations
// ============================================
const ENABLE_CHRISTMAS_MODE = true;

// Projects Data Configuration
const projects = [
    {
        id: "login-ui-trilogy",
        icon: '<i class="fas fa-layer-group"></i>',
        category: "UI/UX DESIGN SHOWCASE",
        title: "Triple Threat Auth Kit",
        description: "Six spectacular authentication screens from 'The Triple Threat Auth Kit' - where logging in meets luxury. Three themes, six screens, infinite style.",
        longDescription: "Welcome to The Triple Threat Auth Kit - not your grandma's login forms (unless she's incredibly cool). This collection of 6 production-ready Flutter screens features three distinct design philosophies: Dark Mode (for the mysterious types), Light Mode (for the optimists), and Glassmorphism (for the show-offs). Each theme comes with both a sleek login screen and its trusty signup companion. Built with Flutter's most powerful animation libraries and enough visual polish to make designers cry happy tears. Whether you're building the next big SaaS, a crypto wallet that needs to look expensive, or just want authentication screens that spark joy, this kit has you covered. It's like getting three complete UI kits in one - because why settle for boring when you can have spectacular?",
        features: [
            "Three Complete Design Systems - Dark, Light, and Glassmorphic themes that actually look different",
            "Six Full Screens - Login AND Signup for each theme (no half-measures here)",
            "Buttery Smooth Animations - Using flutter_animate because janky is not in our vocabulary",
            "Pixel-Perfect Responsive Design - Looks stunning on everything from watches to tablets",
            "Custom Reusable Components - Clean architecture that future-you will thank present-you for",
            "Interactive Micro-Interactions - Focus states, hover effects, and feedback that feels good",
            "Smart Form Validation - Password matching, email checking, and gentle error messages",
            "Visual Depth Mastery - Gradients, shadows, glassmorphism, and enough blur to make your GPU sweat",
            "Production-Ready Code - Clean, commented, scalable, and actually documented",
            "The Triple Threat Auth Kit™ - Authentication has never looked this good"
        ],
        designs: [
            {
                name: "🌑 Dark Mode Elegance",
                file: "triple-threat-auth-kit/dark.dart",
                description: "The Batman of login screens - sleek, sophisticated, and a little mysterious. This design embraces the dark side with a pure black background and crisp white accents. Features a minimalist approach where every pixel has a purpose. Basically, if Steve Jobs designed a login screen at 3am.",
                highlights: [
                    "Pure Black (#121212) background for OLED perfection",
                    "White-on-black high contrast that your optometrist would approve",
                    "Subtle radial gradient that whispers sweet nothings",
                    "Floating white button that practically begs to be clicked",
                    "Inter font family for that 'I mean business' look",
                    "Animated entrance effects that make users go 'ooh'",
                    "Focus states that glow like a lightsaber (but classier)",
                    "Perfect for: Late-night coding sessions, cybersecurity apps, and brooding dramatically"
                ]
            },
            {
                name: "☀️ Light Mode Delight",
                file: "triple-threat-auth-kit/light.dart",
                description: "The friendly neighborhood login screen that greets you with a smile and probably offers you cookies. Soft colors, rounded everything, and a general vibe of 'hey, come on in!' This is what happens when minimalism meets personality and they become best friends.",
                highlights: [
                    "Soft off-white (#F8F9FD) that's easier on the eyes than morning sunlight",
                    "Indigo accent color (#4F46E5) for that pop of 'I got this' confidence",
                    "Super-rounded inputs (20px radius!) for maximum huggability",
                    "Waving hand icon (👋) because who doesn't love a warm greeting?",
                    "Social login buttons styled like fluffy clouds you want to poke",
                    "Poppins font that says 'I'm modern but I'll still help you move apartments'",
                    "Hover effects that lift elements like magic carpets on vacation",
                    "Perfect for: Lifestyle apps, social platforms, and making your grandma say 'Oh, how nice!'"
                ]
            },
            {
                name: "✨ Glassmorphism Premium",
                file: "triple-threat-auth-kit/glass.dart",
                description: "The showstopper. The one that makes other login screens jealous at parties. This design uses glassmorphism (frosted glass effect) with glowing orbs and premium animations. It's like logging into a spaceship's control panel designed by Apple's design team, but actually user-friendly. Might cause jaw drops.",
                highlights: [
                    "Frosted glass card with BackdropFilter blur (sigma 15 - yes, we're showing off)",
                    "Ambient glowing orbs that float around like they own the place",
                    "Multi-layer gradient background that creates more depth than a philosophy textbook",
                    "Shimmer effect on buttons (yes, really - we went there)",
                    "Password visibility toggle with smooth icon transitions that feel buttery",
                    "Form validation with elegant error states (even errors look good here)",
                    "Mock authentication with loading states that make waiting pleasant",
                    "Perfect for: Premium apps, crypto wallets, impressing your tech lead, and showing off at conferences"
                ]
            },
            {
                name: "🌑 Dark Signup Companion",
                file: "triple-threat-auth-kit/signup_dark.dart",
                description: "The sophisticated sibling of Dark Mode Login. Where the login screen is 'Welcome back, friend,' this one is 'Hello there, future legend.' Four fields instead of two because good things take time. Same mysterious Batman vibes, now with extra commitment.",
                highlights: [
                    "All the dark elegance of its login twin, but longer (it's not you, it's the extra form fields)",
                    "Four beautifully animated input fields: Name, Email, Password, Confirm Password",
                    "Password matching validation that gently reminds you when you typo",
                    "Same pure black aesthetic that makes night owls feel at home",
                    "Smooth animations that distract you from the fact you're filling out a form",
                    "Minimal design that says 'we respect your time but need your info'",
                    "'Create Account' button that glows with entrepreneurial energy",
                    "Perfect for: Building your empire, starting fresh, joining the dark side (we have cookies)"
                ]
            },
            {
                name: "☀️ Light Signup Friend",
                file: "triple-threat-auth-kit/signup_light.dart",
                description: "The cheerful onboarding buddy that's practically throwing confetti while you type. If Light Mode Login is a friendly wave, this is a warm hug and a welcome gift basket. Four rounded input fields that look so friendly, they might send you birthday cards.",
                highlights: [
                    "Person-add icon instead of waving hand (it's recruitment time!)",
                    "Same delightful pastel color palette that makes you feel good about yourself",
                    "Four super-rounded fields with 20px corners (borderline circular, we're not judging)",
                    "Indigo accent colors that scream confidence without actually screaming",
                    "Smooth slide-in animations that feel like a gentle introduction",
                    "Password confirmation field styled with the same cloud-like softness",
                    "Validation messages delivered with a smile (metaphorically)",
                    "Perfect for: Community apps, wellness platforms, anywhere people gather to be wholesome"
                ]
            },
            {
                name: "✨ Glass Signup Spectacular",
                file: "triple-threat-auth-kit/signup_glass.dart",
                description: "The crown jewel of the auth collection. The final boss of signup forms. This isn't just a registration page - it's a premium experience wrapped in frosted glass. Four fields, all the glassmorphism glory, and enough visual polish to make designers weep tears of joy. Comes with its own gravitational pull.",
                highlights: [
                    "Person-add-outlined icon floating majestically like a registration deity",
                    "Full glassmorphism treatment on a FOUR-FIELD form (we're ambitious)",
                    "BackdropFilter blur that makes everything behind it look artsy",
                    "Two password fields with individual visibility toggles (luxury!)",
                    "Validation that checks if passwords match before you even think about it",
                    "Shimmer effects on the submit button because why stop at good when you can be fabulous",
                    "Glowing ambient orbs strategically placed to frame your data entry like a masterpiece",
                    "Perfect for: SaaS platforms, fintech apps, NFT marketplaces, or anywhere you want users to feel like VIPs"
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
            { url: "assets/dark.png", desc: "Dark Mode - The Minimalist Masterpiece" },
            { url: "assets/light.png", desc: "Light Mode - Fresh and Friendly" },
            { url: "assets/glass.png", desc: "Glassmorphism - The Premium Experience" },
            // for the signup pages
            { url: "assets/dark2.png", desc: "Dark Mode - The Minimalist Masterpiece" },
            { url: "assets/light2.png", desc: "Light Mode - Fresh and Friendly" },
            { url: "assets/glass2.png", desc: "Glassmorphism - The Premium Experience" }
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

// ============================================
// 🔮 CHRISTMAS 2085 - NEON FUTURE EDITION 🔮
// ============================================
function initChristmasMode() {
    if (!ENABLE_CHRISTMAS_MODE) return;

    // Add Christmas mode class to body
    document.body.classList.add('christmas-mode');

    // Create Pixel Snow Container
    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.id = 'snowflakes-container';
    snowflakeContainer.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; overflow: hidden;';
    document.body.appendChild(snowflakeContainer);

    // Create 20 pixel/soft snow particles
    for (let i = 0; i < 20; i++) {
        const snowflake = document.createElement('div');
        // Alternate between pixel, plus, and soft styles
        const styles = ['', 'pixel-plus', 'soft'];
        snowflake.className = 'snowflake ' + styles[i % 3];
        snowflakeContainer.appendChild(snowflake);
    }

    // Create Linear Neon Lights (single bar, no bulbs)
    const lightsContainer = document.createElement('div');
    lightsContainer.className = 'christmas-lights';
    document.body.appendChild(lightsContainer);

    // Create Vertical Neon Accent Lines
    const neonLineLeft = document.createElement('div');
    neonLineLeft.className = 'neon-line-left';
    document.body.appendChild(neonLineLeft);

    const neonLineRight = document.createElement('div');
    neonLineRight.className = 'neon-line-right';
    document.body.appendChild(neonLineRight);

    // Create Geometric Stars
    const star1 = document.createElement('div');
    star1.className = 'geometric-star';
    star1.innerHTML = '<div class="geometric-star-inner"></div>';
    document.body.appendChild(star1);

    const star2 = document.createElement('div');
    star2.className = 'geometric-star-2';
    document.body.appendChild(star2);

    // Create Neon Sparkles (geometric)
    function createNeonSparkle() {
        if (!ENABLE_CHRISTMAS_MODE) return;

        const sparkle = document.createElement('div');
        sparkle.className = Math.random() > 0.5 ? 'sparkle' : 'sparkle-diamond';
        sparkle.style.left = (5 + Math.random() * 90) + '%';
        sparkle.style.top = (15 + Math.random() * 70) + '%';
        sparkle.style.animationDelay = Math.random() * 1.5 + 's';

        // Vary size
        const size = 6 + Math.random() * 6;
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';

        document.body.appendChild(sparkle);

        setTimeout(() => {
            if (document.body.contains(sparkle)) {
                document.body.removeChild(sparkle);
            }
        }, 3000);
    }

    // Add sparkles periodically
    setInterval(createNeonSparkle, 2000);

    // Initial sparkles
    for (let i = 0; i < 6; i++) {
        setTimeout(createNeonSparkle, i * 400);
    }

    // Create Holiday Mode Banner (cyberpunk style)
    const holidayBanner = document.createElement('div');
    holidayBanner.className = 'holiday-banner';
    holidayBanner.id = 'holidayBanner';
    holidayBanner.innerHTML = `
        <div class="holiday-icon"><i class="fas fa-bolt"></i></div>
        <span class="holiday-text">// HOLIDAY_2085</span>
        <div class="holiday-dot"></div>
    `;
    document.body.appendChild(holidayBanner);

    console.log('🔮 Christmas 2085 Neon Mode Activated! 🔮');
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    // Shared initializations
    document.body.style.opacity = '1';

    // Initialize Christmas Mode
    initChristmasMode();

    // Page specific logic
    if (isDetailsPage) {
        loadProjectDetails();
    } else if (isStartProjectPage) {
        initMultiStepForm();
    } else {
        // Index page logic
        const typingTitle = document.getElementById('typingTitle');
        if (typingTitle) typeWriter(typingTitle, 'OnFiNtY', 100);
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

// Music Player with State Persistence (Common)
const musicBtn = document.getElementById('musicBtn');
const headerMusicBtn = document.getElementById('headerMusicBtn');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

// Save music state to localStorage
function saveMusicState() {
    if (bgMusic) {
        localStorage.setItem('musicPlaying', isPlaying);
        localStorage.setItem('musicTime', bgMusic.currentTime);
        localStorage.setItem('musicVolume', bgMusic.volume);
    }
}

// Update UI elements for music state
function updateMusicUI(playing) {
    isPlaying = playing;
    const playIcon = '<i class="fas fa-pause"></i>';
    const pauseIcon = '<i class="fas fa-music"></i>';

    // Update Floating Button
    if (musicBtn) {
        musicBtn.innerHTML = playing ? playIcon : pauseIcon;
        musicBtn.classList.toggle('playing', playing);
    }

    // Update Header Visualizer (now a simple icon)
    if (headerMusicBtn) {
        headerMusicBtn.innerHTML = playing ? playIcon : pauseIcon;
        headerMusicBtn.classList.toggle('playing', playing);
    }

    // Show/Hide holiday banner
    const holidayBanner = document.getElementById('holidayBanner');
    if (holidayBanner) {
        holidayBanner.classList.toggle('visible', playing);
    }
}

// Restore music state from localStorage
function restoreMusicState() {
    if (!bgMusic) return;

    const wasPlaying = localStorage.getItem('musicPlaying') === 'true';
    const savedTime = parseFloat(localStorage.getItem('musicTime')) || 0;
    const savedVolume = parseFloat(localStorage.getItem('musicVolume')) || 0.5;

    // Restore volume
    bgMusic.volume = savedVolume;

    // Restore playback position
    if (savedTime > 0) {
        bgMusic.currentTime = savedTime;
    }

    // Auto-resume if music was playing
    if (wasPlaying) {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                updateMusicUI(true);
            })
                .catch(error => {
                    console.log('Auto-play failed (browser may require user interaction):', error);
                    // Reset state if auto-play fails
                    updateMusicUI(false);
                    localStorage.setItem('musicPlaying', false);
                });
        }
    }
}

// Global Music Toggle Logic
function toggleMusic() {
    if (!bgMusic) return;

    if (isPlaying) {
        bgMusic.pause();
        updateMusicUI(false);
        saveMusicState();
    } else {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                updateMusicUI(true);
                saveMusicState();
            })
                .catch(error => {
                    console.log('Audio play failed:', error);
                });
        }
    }
}

// Event Listeners
if (bgMusic) {
    // Restore state on page load
    restoreMusicState();

    if (musicBtn) {
        musicBtn.addEventListener('click', toggleMusic);
    }

    if (headerMusicBtn) {
        headerMusicBtn.addEventListener('click', toggleMusic);
    }

    // Save current time periodically while playing
    bgMusic.addEventListener('timeupdate', () => {
        if (isPlaying) {
            saveMusicState();
        }
    });

    // Save state before leaving the page
    window.addEventListener('beforeunload', () => {
        saveMusicState();
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
