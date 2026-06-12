// ============================================================================
// CUSTOM CURSOR
// ============================================================================

const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x - 15 + 'px';
    cursor.style.top = y - 15 + 'px';

    cursorDot.style.left = x - 4 + 'px';
    cursorDot.style.top = y - 4 + 'px';
});

// Cursor effect on hover
const interactiveElements = document.querySelectorAll('a, button, input, textarea');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorDot.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorDot.style.opacity = '1';
    });
});

// ============================================================================
// MOVING BLOB CURSOR FOLLOWING
// ============================================================================

const movingBlob = document.querySelector('.moving-blob');
let mouseX = 0;
let mouseY = 0;
let blobX = 0;
let blobY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateBlobPosition() {
    // Smooth following effect
    blobX += (mouseX - blobX) * 0.1;
    blobY += (mouseY - blobY) * 0.1;

    movingBlob.style.left = blobX - 75 + 'px';
    movingBlob.style.top = blobY - 75 + 'px';

    requestAnimationFrame(updateBlobPosition);
}

updateBlobPosition();

// ============================================================================
// TYPEWRITER EFFECT
// ============================================================================

const titles = [
    "Full-Stack Developer",
    "AI Enthusiast",
    "Open Source Contributor",
    "Hackathon Builder"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const textElement = document.querySelector('.typewriter-text');
    if (!textElement) {
        setTimeout(typeWriter, 100); // Retry if not found
        return;
    }

    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        textElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    let nextSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentTitle.length) {
        nextSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        nextSpeed = 500;
    }

    setTimeout(typeWriter, nextSpeed);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(typeWriter, 500));
} else {
    setTimeout(typeWriter, 500);
}

// ============================================================================
// THREE.JS SETUP - 3D SHAPES
// ============================================================================

let scene, camera, renderer, shapes = [];

function initThreeJS() {
    const canvas = document.getElementById('threeCanvas');
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // Scene setup
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0a, 2000, 500);

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 400;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x0a0a0a, 0);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00d9ff, 1);
    pointLight.position.set(100, 100, 100);
    scene.add(pointLight);

    // Create 3D shapes
    createSphere();
    createCube();
    createPyramid();

    // Animation loop
    animate();

    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Mouse move parallax
    document.addEventListener('mousemove', onMouseMove);
}

function createSphere() {
    const geometry = new THREE.IcosahedronGeometry(80, 4);
    const material = new THREE.MeshPhongMaterial({
        color: 0x00d9ff,
        emissive: 0x00d9ff,
        wireframe: true,
        emissiveIntensity: 0.3
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(-200, -100, 0);
    sphere.userData.originalPosition = sphere.position.clone();
    scene.add(sphere);
    shapes.push(sphere);
}

function createCube() {
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshPhongMaterial({
        color: 0x00b8cc,
        emissive: 0x00b8cc,
        wireframe: true,
        emissiveIntensity: 0.2
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(150, 100, -100);
    cube.userData.originalPosition = cube.position.clone();
    scene.add(cube);
    shapes.push(cube);
}

function createPyramid() {
    const geometry = new THREE.TetrahedronGeometry(100, 0);
    const material = new THREE.MeshPhongMaterial({
        color: 0x0099ff,
        emissive: 0x0099ff,
        wireframe: true,
        emissiveIntensity: 0.25
    });
    const pyramid = new THREE.Mesh(geometry, material);
    pyramid.position.set(0, 200, -50);
    pyramid.userData.originalPosition = pyramid.position.clone();
    scene.add(pyramid);
    shapes.push(pyramid);
}

function animate() {
    requestAnimationFrame(animate);

    shapes.forEach((shape, index) => {
        shape.rotation.x += 0.002;
        shape.rotation.y += 0.003;
        shape.rotation.z += 0.001;

        shape.position.y += Math.sin(Date.now() * 0.0005 + index) * 0.5;
    });

    renderer.render(scene, camera);
}

function onMouseMove(e) {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;

    shapes.forEach((shape) => {
        shape.position.x = shape.userData.originalPosition.x + x * 50;
        shape.position.y = shape.userData.originalPosition.y + y * 50;
    });
}

function onWindowResize() {
    const canvas = document.getElementById('threeCanvas');
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

// Initialize Three.js when DOM is ready
document.addEventListener('DOMContentLoaded', initThreeJS);

// ============================================================================
// GSAP ANIMATIONS
// ============================================================================

gsap.registerPlugin(ScrollTrigger);

// Navbar animation
gsap.to('.navbar', {
    scrollTrigger: {
        trigger: 'body',
        start: 'top',
        onToggle: (self) => {
            if (self.isActive) {
                gsap.to('.navbar', { duration: 0.3, opacity: 1 });
            }
        }
    }
});

// Section reveal animations
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
    gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                scrub: false
            }
        }
    );
});

// Stagger animations for cards
const projectCards = document.querySelectorAll('.project-card');
if (projectCards.length > 0) {
    gsap.fromTo(
        projectCards,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.projects-grid',
                start: 'top 80%'
            }
        }
    );
}

const educationCards = document.querySelectorAll('.education-card');
if (educationCards.length > 0) {
    gsap.fromTo(
        educationCards,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.education-grid',
                start: 'top 80%'
            }
        }
    );
}

// ============================================================================
// NAVIGATION
// ============================================================================

const navLinks = document.querySelectorAll('.nav-links a');
const logo = document.querySelector('.logo');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            gsap.to(window, {
                duration: 0.8,
                scrollTo: targetSection,
                ease: 'power2.inOut'
            });
        }
    });
});

logo.addEventListener('click', () => {
    gsap.to(window, {
        duration: 0.8,
        scrollTo: '#hero',
        ease: 'power2.inOut'
    });
});

// ============================================================================
// CONTACT FORM - FORMSUBMIT AJAX
// ============================================================================

const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

console.log("Contact Form JS Loaded");

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        console.log("Submit Intercepted");

        formNote.textContent = "Sending message...";
        formNote.className = "form-note";

        try {
            const formData = new FormData(contactForm);

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                formNote.textContent =
                    "✅ Thank you! Your message has been sent successfully.";
                formNote.className = "form-note success";

                contactForm.reset();

                setTimeout(() => {
                    formNote.textContent = "";
                    formNote.className = "form-note";
                }, 5000);
            } else {
                throw new Error("Form submission failed");
            }

        } catch (error) {
            console.error(error);

            formNote.textContent =
                "❌ Failed to send message. Please try again.";
            formNote.className = "form-note error";
        }
    });
}

// ============================================================================
// SCROLL PROGRESS
// ============================================================================

function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    // You can use this for scroll progress bar if added to HTML
    document.documentElement.style.setProperty('--scroll-progress', scrolled + '%');
}

window.addEventListener('scroll', updateScrollProgress);

// ============================================================================
// SMOOTH SCROLL BEHAVIOR
// ============================================================================

// Add smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
        }
    });
});

// ============================================================================
// INTERSECTION OBSERVER FOR SCROLL REVEALS
// ============================================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ============================================================================
// PARALLAX EFFECT ON SCROLL
// ============================================================================

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const elements = document.querySelectorAll('[data-parallax]');

    elements.forEach(element => {
        const speed = element.getAttribute('data-parallax');
        element.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// ============================================================================
// PAGE LOAD ANIMATION
// ============================================================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ============================================================================
// KEYBOARD NAVIGATION
// ============================================================================

const pageSections = Array.from(document.querySelectorAll('section[id]'));
let currentSectionIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentSectionIndex < pageSections.length - 1) {
            currentSectionIndex++;
            gsap.to(window, {
                duration: 0.8,
                scrollTo: pageSections[currentSectionIndex],
                ease: 'power2.inOut'
            });
        }
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            gsap.to(window, {
                duration: 0.8,
                scrollTo: sections[currentSectionIndex],
                ease: 'power2.inOut'
            });
        }
    }
});

// Update current section on scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    pageSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            currentSectionIndex = index;
        }
    });
});

// ============================================================================
// PERFORMANCE OPTIMIZATION
// ============================================================================

// Throttle scroll events for better performance
let ticking = false;
function updateOnScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateScrollProgress();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', updateOnScroll, { passive: true });
