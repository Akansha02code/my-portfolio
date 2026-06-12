# Akansha Pramod Sahoo - Portfolio Website

A stunning, minimal, and modern personal portfolio website built with HTML, CSS, vanilla JavaScript, Three.js, and GSAP animations.

## ✨ Features

### Design & UX
- **Minimal & Bold Typography** — Space Grotesk font for clean, professional look
- **Dark Theme** — Near-black background with cyan accent color (#00d9ff)
- **Custom Cursor** — Dot with trailing glow effect
- **Smooth Animations** — GSAP-powered scroll triggers and transitions
- **3D Hero Section** — Interactive Three.js shapes (sphere, cube, pyramid)
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Loading Counter** — Animated 0% → 100% percentage counter on page load

### Sections
1. **Hero** — Introduction with loading animation and CTA buttons
2. **About** — Bio and tech stack badges
3. **Work** — Featured projects with GitHub links
4. **Experience** — Timeline of professional experience
5. **Education** — Academic background and achievements
6. **Certifications** — Skills and accomplishments
7. **Contact** — Contact information and message form
8. **Footer** — Quick navigation and social links

### Interactive Elements
- Smooth navigation with scroll animations
- Keyboard navigation (arrow keys)
- Form validation and submission handling
- Parallax effects on scroll
- Intersection Observer for scroll reveals
- Hover effects on all interactive elements

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. **Clone or Download**
   ```bash
   git clone <repository-url>
   cd portfolio1
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for best results:
   
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

3. **Visit**
   - Open `http://localhost:8000` in your browser

## 📝 Customization Guide

### Personal Information
Edit the following in `index.html`:

1. **Navigation**
   ```html
   <div class="logo">AP</div>  <!-- Change to your initials -->
   ```

2. **Contact Links**
   - Update email, phone, GitHub, LinkedIn URLs throughout the file

3. **Hero Section**
   - Modify heading text: `"AND HIGH-PERFORMANCE ARCHITECTURES."`
   - Update subheading: `"I engineer scalable backend systems"`

4. **Resume Link**
   ```html
   <a href="resume.pdf" class="resume-link">RESUME 📋</a>
   ```
   - Add your actual resume.pdf file to the root directory

### Content Updates

#### Projects Section
Each project card follows this structure:
```html
<div class="project-card">
    <div class="project-number">01</div>
    <h3 class="project-title">Project Name</h3>
    <p class="project-year">2024</p>
    <p class="project-description">Description...</p>
    <div class="project-tags">
        <span class="tag">Tech Stack</span>
    </div>
    <a href="github-link" class="project-link">View on GitHub →</a>
</div>
```

#### Experience Section
Update timeline items with your experience details:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3 class="exp-title">Job Title</h3>
        <p class="exp-company">@ Company Name</p>
        <p class="exp-period">Start – End</p>
        <p class="exp-description">Description...</p>
        <ul class="exp-highlights">
            <li>Achievement 1</li>
        </ul>
    </div>
</div>
```

### Color Customization
Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #00d9ff;      /* Cyan accent */
    --bg-dark: #0a0a0a;            /* Dark background */
    --bg-secondary: #1a1a1a;       /* Secondary background */
    --text-primary: #ffffff;       /* Main text */
    --text-secondary: #888888;     /* Secondary text */
}
```

### 3D Shapes Customization
Edit the shape creation functions in `script.js`:

```javascript
// Change sphere properties
const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(-200, -100, 0);  // X, Y, Z position
```

### Form Submission
Currently, the form shows a success message. To add backend functionality:

1. Create a backend API endpoint
2. Update the form submission handler in `script.js`:
   ```javascript
   const response = await fetch('/api/contact', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ name, email, message })
   });
   ```

## 🎨 Design System

### Typography
- **Font Family**: Space Grotesk (from Google Fonts)
- **Headings**: Bold (700 weight), large sizes
- **Body**: Regular (400 weight), 0.95-1.1rem

### Colors
- **Primary**: Cyan (#00d9ff)
- **Background**: Near-black (#0a0a0a)
- **Secondary BG**: Dark gray (#1a1a1a)
- **Text**: White (#ffffff)
- **Secondary Text**: Medium gray (#888888)

### Spacing
- Section padding: 6rem (desktop), 4rem (tablet), 3rem (mobile)
- Gap between elements: 2-4rem
- Gutter/horizontal padding: 2rem (desktop), 1.5rem (tablet), 1rem (mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Modern styling, Grid, Flexbox, CSS variables
- **Vanilla JavaScript** — No frameworks
- **Three.js** — 3D graphics (CDN)
- **GSAP** — Animation library (CDN)
- **Google Fonts** — Space Grotesk typography

## 📦 File Structure

```
portfolio1/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── resume.pdf          # (Add your resume here)
└── README.md           # This file
```

## ⚡ Performance Tips

1. **Optimize Images** — If adding images, use WebP format
2. **Lazy Loading** — Images use native lazy loading
3. **CSS Classes** — Minimal CSS for faster loading
4. **CDN Resources** — Three.js and GSAP loaded from CDN
5. **Scroll Performance** — Animations throttled and optimized

## 🌐 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push files to main branch
3. Go to Settings → Pages → Select "main" branch
4. Site will be available at `https://yourusername.github.io/portfolio1`

### Netlify
1. Connect repository to Netlify
2. Set build command to empty
3. Set publish directory to root (`.`)
4. Deploy!

### Vercel
1. Import project from GitHub
2. Framework: "Other"
3. Deploy!

## 🎯 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Privacy

- No analytics or tracking enabled
- Contact form is client-side only (add backend for functionality)
- No external data collection

## 📄 License

This portfolio is designed for personal use. Feel free to customize and use it as your own.

## 📧 Contact

For questions or suggestions about this template, reach out to Akansha Pramod Sahoo:
- Email: akansha.sahoo02@gmail.com
- GitHub: https://github.com/Akansha02code
- LinkedIn: https://www.linkedin.com/in/akansha-sahoo-3927372aa/

---

**Made with passion** ✨
