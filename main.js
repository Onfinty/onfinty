// ============================================
// 🎄 CHRISTMAS MODE TOGGLE 🎄
// Set to false to disable Christmas decorations
// ============================================
const ENABLE_CHRISTMAS_MODE = true;

// Projects Data Configuration
const projects = [
    {
        id: "onfinity-auth-kit",
        icon: '<i class="fas fa-palette"></i>',
        category: "UI/UX DESIGN SHOWCASE",
        title: "OnFiNtY - Advanced Auth UI Kit",
        externalImage: "assets/auth kit 1.png",
        description: "Seven breathtaking themes, complete authentication flow, and glassmorphism everything. OnFiNtY isn't just an auth kit - it's a design system that makes logging in feel like luxury.",
        longDescription: "Welcome to OnFiNtY - where authentication meets art. This isn't your average login form collection. This is a complete, production-ready authentication system with SEVEN stunning themes that you can switch between with literally two lines of code. Built with modern Flutter, powered by Riverpod, and animated with flutter_animate, OnFiNtY delivers a premium user experience from the welcome screen to the success celebration. Each theme - Cosmic, Ocean, Nature, Sunset, Royal, Midnight, and Minimal - comes with its own carefully crafted color palette, animated background with floating orbs, and glassmorphic UI elements that make every interaction feel premium. Whether you're building a fintech app that needs Royal gold elegance, a wellness platform that deserves Nature's earthy vibes, or a tech startup that wants Cosmic's purple mystique, OnFiNtY has you covered. Complete with smart form validation, smooth page transitions, responsive design, and enough visual polish to make your users say 'Wow!' - this is authentication, elevated.",
        features: [
            "Seven Complete Themes - Cosmic, Ocean, Nature, Sunset, Royal, Midnight, and Minimal (switch with 2 lines of code)",
            "Eight Full Authentication Screens - Welcome, Login, Register, Forgot Password, OTP, Reset Password, Success, and Error",
            "Glassmorphism Everywhere - Frosted glass effects on buttons, cards, inputs, and containers",
            "Animated Background System - Floating gradient orbs that move, scale, and create depth",
            "Smart Form Validation - Email regex, password strength (8+ chars, uppercase, numbers), and name validation",
            "Buttery Smooth Animations - Page transitions, button effects, and micro-interactions using flutter_animate",
            "Responsive Design - ScreenUtil integration for pixel-perfect layouts across all devices",
            "Modern Tech Stack - Riverpod state management, GoRouter navigation, Google Fonts (Outfit family)",
            "Reusable Components - GlassButton, GlassCard, CustomTextField, AnimatedBackground, and GlassScaffold",
            "Client Configuration System - Easy customization without touching the core code",
            "Production-Ready Architecture - Clean folder structure, centralized theme management, separation of concerns",
            "Dynamic Color Palettes - Each theme has 12+ custom colors including primary, secondary, accent, glass, and text colors"
        ],
        designs: [
            {
                name: "🌌 Cosmic Theme",
                file: "",
                description: "The original masterpiece. Purple and blue gradients meet dark cosmic vibes in a theme that screams 'tech startup meets space exploration.' This is what happens when you ask a designer to make something that feels both mysterious and trustworthy. Perfect for SaaS platforms, crypto apps, or any product that wants to feel cutting-edge.",
                highlights: [
                    "Primary: Deep Purple (#6B4CFF) that commands attention without shouting",
                    "Secondary: Rich Blue (#4C8DFF) for that tech-forward feel",
                    "Background: Dark Cosmic (#0F0C29) gradient with purple and navy layers",
                    "Accents: Cyan (#00D4FF) and Pink (#FF4C8D) for pops of energy",
                    "Floating orbs in purple, blue, and cyan creating depth and movement",
                    "Glass elements with subtle white borders and shadows",
                    "White text with perfect contrast ratios for readability",
                    "Perfect for: Tech startups, crypto wallets, AI platforms, developer tools"
                ]
            },
            {
                name: "🌊 Ocean Theme",
                file: "",
                description: "Dive into serenity with deep teal and aqua blues that evoke calm, trust, and professionalism. This theme whispers 'we've got this handled' while making users feel like they're floating on tranquil waters. The deep ocean background gives it gravitas while the bright cyan accents keep it fresh.",
                highlights: [
                    "Primary: Deep Cyan (#00B4D8) like tropical waters at noon",
                    "Secondary: Ocean Blue (#0077B6) for depth and stability",
                    "Background: Deep Ocean Dark (#021019) gradient - mysterious yet inviting",
                    "Accents: Light Cyan (#90E0EF) and Sky Blue (#48CAE4) for sparkle",
                    "Teal-bordered glass elements that feel like underwater windows",
                    "Light cyan text (#E0F7FA) that's easy on the eyes",
                    "Floating orbs creating an underwater ambient effect",
                    "Perfect for: Healthcare apps, meditation platforms, financial services, travel booking"
                ]
            },
            {
                name: "🌿 Nature Theme",
                file: "",
                description: "Earthy greens and forest vibes for apps that want to feel grounded, organic, and trustworthy. This isn't your aggressive neon green - it's sophisticated emerald and sage that whispers 'sustainability' and 'wellness' without trying too hard. Like a walk in a premium botanical garden.",
                highlights: [
                    "Primary: Forest Green (#2D6A4F) that feels both premium and natural",
                    "Secondary: Emerald (#40916C) for growth and vitality",
                    "Background: Deep Forest (#1B4332) gradient with layered greens",
                    "Accents: Sage (#95D5B2) and Mint (#D8F3DC) for freshness",
                    "Mint-colored text that's soothing and readable",
                    "Glass elements with nature-inspired transparency",
                    "Floating green orbs like fireflies in a forest",
                    "Perfect for: Wellness apps, eco-friendly products, organic marketplaces, fitness platforms"
                ]
            },
            {
                name: "🌅 Sunset Theme",
                file: "",
                description: "Warm oranges, passionate reds, and golden accents that evoke energy, creativity, and boldness. This theme doesn't whisper - it confidently announces itself. Perfect for brands that want to stand out and make a statement. Think sunset over the desert meets modern luxury.",
                highlights: [
                    "Primary: Rose Pink (#E05780) with attitude and warmth",
                    "Secondary: Deep Magenta (#D9376E) for intensity",
                    "Background: Dark Burgundy (#25020F) gradient transitioning to warmer tones",
                    "Accents: Orange (#FF9E00) and Golden Yellow (#FFBC42) like sunset rays",
                    "Peachy text colors (#FFE5D9) that feel warm and inviting",
                    "Glass elements with sunset-tinted borders",
                    "Floating warm-colored orbs creating ambient glow",
                    "Perfect for: Creative agencies, music apps, dating platforms, event management"
                ]
            },
            {
                name: "👑 Royal Theme",
                file: "",
                description: "Pure black, gold accents, and silver details. This is luxury distilled into pixels. The Royal theme doesn't ask for attention - it commands it. Gold borders on glass elements, dramatic shadows, and a color palette that screams 'premium' without saying a word. For apps that cater to the VIP crowd.",
                highlights: [
                    "Primary: Pure Gold (#FFD700) - because subtlety is overrated",
                    "Secondary: Polished Silver (#C0C0C0) for that metallic elegance",
                    "Background: Pure Black (#000000) with subtle gray gradients",
                    "Accents: Goldenrod (#DAA520) and Platinum (#E5E4E2)",
                    "Gold-bordered glass elements that literally glow",
                    "Gold shadows creating dramatic depth effects",
                    "White text on black for maximum contrast and sophistication",
                    "Perfect for: Luxury brands, VIP memberships, high-end e-commerce, exclusive clubs"
                ]
            },
            {
                name: "🌙 Midnight Theme",
                file: "",
                description: "Deep midnight blues meet silver accents in a theme that feels like 3 AM coding sessions but make it fashion. This is the theme for apps that want to feel professional, trustworthy, and just a little bit mysterious. Navy blues that CEOs would approve of, with enough visual interest to keep it modern.",
                highlights: [
                    "Primary: Midnight Blue (#191970) - classic and commanding",
                    "Secondary: Dark Slate Blue (#483D8B) for depth",
                    "Background: Almost Black (#050510) with navy and indigo layers",
                    "Accents: Light Steel Blue (#B0C4DE) and Lavender (#E6E6FA)",
                    "Ghost white text (#F8F8FF) with perfect readability",
                    "Blue-tinted glass borders creating ethereal effects",
                    "Floating blue orbs like stars in the night sky",
                    "Perfect for: Corporate apps, legal services, consulting firms, professional networks"
                ]
            },
            {
                name: "⚫ Minimal Theme",
                file: "",
                description: "Black, white, and shades of gray. No nonsense, no distractions, just pure minimalist perfection. This theme is for apps that want to let their content shine. Clean lines, subtle shadows, and a monochromatic palette that works everywhere. The Swiss Army knife of themes.",
                highlights: [
                    "Primary: Pure White (#FFFFFF) on dark - clean and timeless",
                    "Secondary: Medium Gray (#CCCCCC) for hierarchy",
                    "Background: Dark Gray (#121212) with subtle gray gradients",
                    "Accents: White and Gray (#808080) - simplicity at its finest",
                    "Monochromatic glass elements with minimal borders",
                    "White text with varying opacity for visual hierarchy",
                    "Subtle floating orbs that don't compete for attention",
                    "Perfect for: News apps, productivity tools, minimalist brands, content-focused platforms"
                ]
            }
        ],
        technologies: [
            "Flutter 3.x",
            "Dart",
            "flutter_riverpod",
            "go_router",
            "flutter_screenutil",
            "google_fonts",
            "flutter_animate",
            "Material Design 3",
            "Glassmorphism",
            "BackdropFilter"
        ],
        technicalDetails: [
            "State Management: Riverpod 2.4.0+ for scalable, testable state handling",
            "Navigation: GoRouter 12.0+ with declarative routing and deep linking support",
            "Responsive Design: ScreenUtil 5.9.0+ ensuring consistent 375x812 design across all devices",
            "Typography: Google Fonts (Outfit family) with 5 weight variations for perfect hierarchy",
            "Animation Framework: flutter_animate 4.3.0+ for declarative, chainable animations",
            "Theme System: Centralized color management with 7 complete palettes switching via config",
            "Glassmorphism: BackdropFilter with 15 sigma blur and layered opacity effects",
            "Form Validation: Regex-based email validation, 8+ char passwords with uppercase and number requirements",
            "Architecture: Feature-based folder structure with core/features separation",
            "Custom Widgets: 5 reusable components (GlassButton, GlassCard, CustomTextField, AnimatedBackground, GlassScaffold)",
            "Background Animation: Multi-orb system with 5-9 second animation cycles and reverse repetition",
            "Performance: Optimized blur effects and gradient rendering for 60fps animations"
        ],
        images: [
            { url: "assets/forgot password.png", desc: "Foreget password flow" },
            { url: "assets/create account.png", desc: "Create account flow" },
        ],
        link: ""
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
        <div class="project-card fade-in ${project.externalImage ? 'has-image' : ''}" style="transition-delay: ${index * 0.1}s">
            <div class="project-image">
                ${project.externalImage ?
            `<div class="blur-bg" style="background-image: url('${project.externalImage}');"></div>
                     <img src="${project.externalImage}" alt="${project.title}" loading="lazy" class="main-img loading" onload="this.classList.add('loaded');">`
            : project.icon}
            </div>
            <div class="project-content">
                <p class="project-category">${project.category}</p>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
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

    // Handle Hero Visual (Image or Icon)
    const visualEl = document.getElementById('projectVisual');
    if (visualEl) {
        if (project.externalImage) {
            visualEl.innerHTML = `
                <div class="blur-bg" style="background-image: url('${project.externalImage}');"></div>
                <img src="${project.externalImage}" alt="${project.title}" class="main-img loading" onload="this.classList.add('loaded');">
            `;
            visualEl.classList.remove('no-image');
        } else {
            visualEl.innerHTML = project.icon;
            visualEl.classList.add('no-image');
        }
    }

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
                <div class="img-placeholder" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></div>
                <img src="${img.url}" alt="${img.desc}" loading="lazy" class="loading" style="position:relative; z-index:2;" onload="this.classList.add('loaded'); this.previousElementSibling.style.display='none';">
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

