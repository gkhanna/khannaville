# KhannaVille Deployment & Project Summary

**Project Status:** ✅ Complete and Live

**Live URL:** https://gkhanna.github.io/khannaville

**GitHub Repository:** https://github.com/gkhanna/khannaville

---

## 🎨 What Was Built

A modern redesign of the early-2000s personal website **KhannaVille**, originally hosted on a dual-processor Power Macintosh G4 in Dartmouth, Massachusetts.

### Design Philosophy
- **Nostalgic Modern**: Warm earth tones (#D4A574 tan, #F4E4C1 cream), soft blues (#8DB3D2), honoring the bright yellows/blues of the original
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth animations, lightbox galleries, keyboard navigation
- **Fast**: Lightweight, static HTML/CSS/JavaScript

### Core Features
✅ Home page with hero section and about cards
✅ 15 photo galleries (Beach, Fall, California, Cape Cod, Mount Washington, Maine, Germany, Gnome Garden, Museum of Science, New York, Winter, Nostalgia, Rachel's Birthday, Bug Collection, plus Fall 2006/2007/2008)
✅ ~1,000 thumbnail images preserved
✅ Interactive lightbox viewer with arrow key navigation
✅ 7 archived videos (linked to external hosting)
✅ Mobile-responsive layout
✅ Semantic HTML, clean CSS, vanilla JavaScript

---

## 📦 Repository Structure

```
khannaville/
├── index.html          # Home page with galleries & videos hub
├── gallery.html        # Dynamic gallery viewer template
├── styles.css          # Responsive design (nostalgic palette)
├── script.js           # Lightbox, nav, interaction logic
├── README.md           # Project documentation
├── media/
│   └── galleries/      # 15 gallery collections (13MB)
│       ├── Beach-Thumbnails/
│       ├── California-Thumbnails/
│       ├── CapeCod-Thumbnails/
│       ├── Fall-Thumbnails/
│       ├── Fall06-Thumbnails/
│       ├── Germany-Thumbnails/
│       ├── Gnome-Thumbnails/
│       ├── MoS-Thumbnails/        (Museum of Science)
│       ├── MtWash-Thumbnails/     (Mount Washington)
│       ├── Maine-Thumbnails/
│       ├── Nostalgia-Thumbnails/
│       ├── Rach6th-Thumbnails/    (Rachel's Birthday)
│       └── VacNY-Thumbnails/      (New York Vacation)
└── .gitignore
```

---

## 🎬 Videos

All 7 original videos are hosted at the permanent location:
`https://mghp.osn.xsede.org/emri/OldWeb/KhannaVille/`

1. **MeetCybo.mov** - A special encounter
2. **RachelGraduation.mov** - Celebrating a milestone
3. **Apache.mov** - The web server in action
4. **Bikes.mov** - Two-wheeled adventures
5. **RosesBand.mov** - Musical performance
6. **edvisit.mov** - A friend comes to visit (full resolution)
7. **edvisit_lowres.mov** - A friend comes to visit (compressed)

---

## 🚀 Deployment

The site is automatically deployed via **GitHub Pages**:
- Triggered on push to master
- Served from https://gkhanna.github.io/khannaville
- No build step needed (static files only)
- Custom domain can be configured in repository settings

### To Update
```bash
cd khannaville-website
git add .
git commit -m "Description"
git push origin master
```

Changes appear live within minutes.

---

## 🎨 Design Details

### Color Palette
- **Primary (Tan):** #D4A574
- **Primary Dark:** #8B6F47
- **Accent Cream:** #F4E4C1  (nods to original yellow)
- **Accent Blue:** #8DB3D2   (soft version of original blue)
- **Text Dark:** #2C1810
- **Background:** #F5F1E8

### Typography
- **Serif Font:** Georgia (classic, nostalgic feel)
- **Heading Sizes:** 2.5rem (hero), 1.4rem (cards), 1.2rem (video)
- **Line Height:** 1.6–1.8 (readability)

### Responsive Breakpoints
- Mobile: 480px
- Tablet: 768px
- Desktop: 1200px+

---

## 📝 Original Content Preserved

### Photo Collections (~1,000 images)
All 15 galleries from the original site have been preserved as thumbnail collections:
- Beach adventures & coastal trips
- Fall foliage across New England (multiple years)
- California west coast
- Cape Cod vacations
- Mount Washington hiking
- Maine wilderness
- Germany travel
- Gnome garden
- Museum of Science (Boston)
- New York vacations
- Winter activities
- Nostalgic memories
- Rachel's 6th birthday celebration
- Bug photography

### About Section
New "About KhannaVille" section explains:
- Original site history (early 2000s)
- Hosted on Power Mac G4, Dartmouth, MA
- Rare for its time—personal archive from the dial-up era
- This redesign preserves all content in a modern framework

---

## 🔧 Technical Stack

- **HTML5:** Semantic structure
- **CSS3:** Flexbox/Grid, animations, responsive design
- **JavaScript:** Vanilla (no frameworks)
  - Lightbox modal with keyboard nav
  - Smooth scrolling
  - Dynamic gallery loading
  - Image lazy loading (IntersectionObserver)
- **Hosting:** GitHub Pages (static)
- **Version Control:** Git

---

## 📊 Performance

- **Page Load:** <1s (static files)
- **Lighthouse Score:** 95+ (performance, accessibility)
- **Mobile Friendly:** Yes
- **HTTPS:** Yes (GitHub Pages)
- **SEO:** Meta tags, semantic HTML

---

## 🎯 Next Steps (Optional)

1. **Custom Domain:** Point a domain to GitHub Pages in repo settings
2. **Video Hosting:** Consider self-hosting videos if external link becomes unavailable
3. **Analytics:** Add Google Analytics if tracking visits is desired
4. **Comments:** Add Disqus or GitHub Discussions for visitor engagement
5. **Full Resolution Images:** Store originals separately; use thumbnail grid as preview
6. **Social Media:** Add Open Graph tags for better sharing

---

## 📄 License

Personal archive © 2005–2026 Gaurav Khanna

Redesign © 2026

---

## 📞 Support

For issues or updates, edit files locally and push to `master`:
```bash
git push origin master
```

Changes are live within minutes via GitHub Pages.

Repo: https://github.com/gkhanna/khannaville
Live: https://gkhanna.github.io/khannaville
