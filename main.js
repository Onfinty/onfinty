// Projects Data Configuration
const projects = [
    {
        id: "todo-app",
        icon: '<i class="fas fa-tasks"></i>',
        category: "PRODUCTION APP",
        title: "Advanced Todo Application",
        description: "Feature-rich task management system with 7 dynamic themes, complete English/Arabic localization with RTL support, custom widget library, and smooth animations throughout.",
        longDescription: "This advanced todo application represents a comprehensive approach to task management. Built with Flutter, it emphasizes user experience through fluid animations and a customizable interface. The app supports multiple languages including full RTL layouts for Arabic, making it accessible to a global audience. The architecture uses Hive for local storage ensures offline capability and instant load times.",
        features: [
            "7 Dynamic Themes with Dark Mode support",
            "Complete English & Arabic Localization (RTL)",
            "Custom Widget Library for consistent UI",
            "Local Storage with Hive DB",
            "Smooth Hero Animations and Transitions"
        ],
        images: [
            { url: "assets/black2.png", desc: "Main Dashboard View" },
            { url: "assets/preview.png", desc: "Task Management Interface" },
            { url: "assets/black.png", desc: "Settings and Theme Selection" }
        ],
        technologies: ["Flutter", "UI Design", "Animations", "Theming"],
        link: "https://github.com/Onfinty"
    },
    {
        id: "weather-app",
        icon: '<i class="fas fa-cloud-sun"></i>',
        category: "UI IMPLEMENTATION",
        title: "Real-Time Weather App",
        description: "Beautiful weather application featuring adaptive layouts, glassmorphism effects, dynamic weather animations, and responsive design for all screen sizes.",
        longDescription: "A visually stunning weather application that brings atmospheric data to life. Utilizing modern glassmorphism design trends, the app presents complex meteorological data in a clean, digestible format. It features dynamic background animations that reflect the current weather conditions, providing an immersive user experience.",
        features: [
            "Real-time API Integration",
            "Glassmorphism UI Design",
            "Dynamic Weather Animations",
            "Geolocation Services",
            "7-Day Forecast Visualization"
        ],
        images: [
            { url: "assets/black2.png", desc: "Current Weather Display" },
            { url: "assets/preview.png", desc: "Forecast List View" }
        ],
        technologies: ["Flutter", "Glassmorphism", "Rive", "Responsive"],
        link: "https://github.com/Onfinty"
    },
    {
        id: "chat-ui",
        icon: '<i class="fas fa-comments"></i>',
        category: "MESSAGING UI",
        title: "Chat Interface Design",
        description: "Modern messaging interface featuring fluid message bubbles, media previews, seamless keyboard transitions, and intuitive gesture-based navigation.",
        longDescription: "An exploration of modern chat interfaces, focusing on the subtle details that make messaging feel natural. This project implements advanced sliver scrolling, hero animations for media viewing, and swipe gestures for reply/delete actions. It demonstrates high-fidelity replication of top-tier messaging apps.",
        features: [
            "Fluid Message Bubbles",
            "Interactive Media Previews",
            "Seamless Keyboard Handling",
            "Gesture-based Navigation",
            "Hero Animations for Images"
        ],
        images: [
            { url: "assets/black2.png", desc: "Chat Conversation View" },
            { url: "assets/preview.png", desc: "Media Gallery" }
        ],
        technologies: ["Flutter", "Micro-interactions", "Hero Animations", "Gestures"],
        link: "https://github.com/Onfinty"
    },
    {
        id: "ecommerce-app",
        icon: '<i class="fas fa-shopping-cart"></i>',
        category: "E-COMMERCE",
        title: "Modern Shopping Experience",
        description: "Premium e-commerce interface with parallax product showcasing, advanced filtering interactions, shopping cart animations, and smooth checkout flow.",
        longDescription: "A premium shopping experience designed to convert. This app features a complex product catalog with advanced filtering capabilities. The UI uses parallax effects for product showcases and micro-interactions for the cart additions, making the shopping journey engaging and delightful.",
        features: [
            "Parallax Product Showcase",
            "Advanced Filtering System",
            "Animated Shopping Cart",
            "Smooth Checkout Flow",
            "Wishlist Management"
        ],
        images: [
            { url: "assets/black2.png", desc: "Product Discovery Page" },
            { url: "assets/preview.png", desc: "Product Details & Cart" }
        ],
        technologies: ["Flutter", "Slivers", "Complex UI", "Payment Flow"],
        link: "https://github.com/Onfinty"
    },
    {
        id: "fitness-tracker",
        icon: '<i class="fas fa-dumbbell"></i>',
        category: "HEALTH & FITNESS",
        title: "Fitness Tracker UI",
        description: "Comprehensive fitness dashboard with interactive charts, progress rings, workout timer animations, and sleek dark mode implementation.",
        longDescription: "A data-driven fitness companion that visualizes personal health goals. Using custom painters and charting libraries, this app renders complex health data into beautiful, easy-to-read graphs and rings. The dark mode implementation ensures comfortable viewing during late-night workouts.",
        features: [
            "Interactive Charts & Graphs",
            "Progress Rings with Custom Painters",
            "Workout Timer Animations",
            "Sleek Dark Mode",
            "Activity History Tracking"
        ],
        images: [
            { url: "assets/black2.png", desc: "Activity Dashboard" },
            { url: "assets/preview.png", desc: "Workout Session View" }
        ],
        technologies: ["Flutter", "Data Viz", "Custom Painters", "Dark Mode"],
        link: "https://github.com/Onfinty"
    },
    {
        id: "widget-library",
        icon: '<i class="fas fa-code"></i>',
        category: "OPEN SOURCE",
        title: "Custom Widget Library",
        description: "Production-ready design system with 50+ reusable components. Includes buttons, inputs, dialogs, and loaders designed for consistency and scalability.",
        longDescription: "A robust set of reusable Flutter widgets designed to accelerate development. This library encapsulates common UI patterns and atomic components, ensuring design consistency across applications. It follows a strict design system with configurable themes and properties.",
        features: [
            "50+ Reusable Components",
            "Themable Architecture",
            "Comprehensive Documentation",
            "Input Validation Wrappers",
            "Loading State Indicators"
        ],
        images: [
            { url: "assets/black2.png", desc: "Component Gallery" },
            { url: "assets/preview.png", desc: "Typography & Color System" }
        ],
        technologies: ["Design System", "components", "Documentation", "MIT License"],
        link: "https://github.com/Onfinty"
    }
];

// Helper to determine page type
const isDetailsPage = window.location.pathname.includes('project-details.html');

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

// Header scroll effect
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
