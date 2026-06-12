# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Test Locally
```bash
# Option A: Open directly in browser
# Double-click index.html

# Option B: Use a local server
python -m http.server 8000
# Then open http://localhost:8000
```

### Step 2: Customize Content
1. Open `index.html` in a text editor
2. Search and replace:
   - Personal name, email, phone
   - GitHub and LinkedIn URLs
   - Project details
   - Experience information
   - Education history

### Step 3: Add Your Resume
1. Save your resume as `resume.pdf`
2. Place it in the root directory
3. Done! The link will work automatically

### Step 4: Test on Mobile
- Open http://localhost:8000 on your phone
- Verify everything looks good
- Test buttons and links

### Step 5: Deploy

#### Deploy to GitHub Pages (Free)
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio1
git push -u origin main
```
Then enable GitHub Pages in repository settings.

#### Deploy to Netlify (Free, Easy)
1. Visit [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select your GitHub repository
4. Click "Deploy"

#### Deploy to Vercel (Free, Fast)
1. Visit [vercel.com](https://vercel.com)
2. Import from GitHub
3. Click "Deploy"

## 🎨 Key Customization Points

### Colors
File: `styles.css`, lines 8-14
```css
:root {
    --primary-color: #00d9ff;      /* Change accent color here */
    --bg-dark: #0a0a0a;            /* Background */
    --text-primary: #ffffff;       /* Text color */
}
```

### Hero Section Text
File: `index.html`, lines 58-62
```html
<p class="hero-subheading">I engineer scalable backend systems</p>
<h1 class="hero-heading">AND HIGH-PERFORMANCE<br>ARCHITECTURES.</h1>
```

### Social Links
Update throughout the file:
- GitHub URL
- LinkedIn URL
- Email address

### 3D Shapes
File: `script.js`, functions: `createSphere()`, `createCube()`, `createPyramid()`
- Modify positions, colors, sizes
- Change animation speeds in `animate()` function

## 📊 File Guide

| File | Purpose |
|------|---------|
| `index.html` | Main content and structure |
| `styles.css` | All styling (colors, fonts, layout) |
| `script.js` | Interactivity, animations, 3D |
| `README.md` | Full documentation |
| `RESUME.txt` | Instructions for adding resume |
| `.gitignore` | Git ignore rules |

## 🔍 Testing Checklist

- [ ] All sections visible and scroll smoothly
- [ ] 3D shapes visible in hero section
- [ ] Loading counter animates on load
- [ ] Navigation links work
- [ ] Buttons have hover effects
- [ ] Custom cursor appears on desktop
- [ ] Contact form validates input
- [ ] Mobile view is responsive
- [ ] All external links work (GitHub, LinkedIn)
- [ ] Page loads in < 3 seconds

## 💡 Tips & Tricks

### Adding a Favicon
1. Create or download a favicon image
2. Save as `favicon.ico` in root directory
3. Add to `index.html` head:
   ```html
   <link rel="icon" href="favicon.ico">
   ```

### Changing Font
1. Go to [Google Fonts](https://fonts.google.com)
2. Find a font you like
3. Replace the font import in `styles.css`
4. Update `font-family` in CSS

### Adding More Projects
1. Duplicate a project card in `index.html`
2. Update project details
3. The grid will automatically adjust

### Changing Animation Speed
File: `script.js`
```javascript
gsap.fromTo(projectCards, 
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6 }  // Change 0.6 to speed it up/down
);
```

## 🐛 Troubleshooting

### 3D shapes not showing?
- Clear browser cache (Ctrl+Shift+Delete)
- Try a different browser
- Check browser console for errors (F12)

### Animations not working?
- Make sure you're viewing in a modern browser
- GSAP is loaded from CDN - check internet connection
- Try disabling browser extensions

### Contact form not sending?
- Currently it's frontend-only (shows success message)
- Add backend to send actual emails
- Consider using services like Formspree or SendGrid

### Mobile view looks off?
- The design is mobile-responsive
- Check viewport meta tag in HTML
- Test with browser DevTools (F12 → Toggle device toolbar)

## 📧 Need Help?

Refer to:
1. [README.md](README.md) - Full documentation
2. Code comments in files
3. Browser console (F12 → Console tab)

## 🎉 You're All Set!

Your portfolio is ready to showcase your skills. Share the link with:
- Potential employers
- Collaborators
- Friends and family

---

**Last Updated**: 2024
**Version**: 1.0
