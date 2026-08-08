# KhannaVille

A modern redesign of the classic early-2000s personal website **KhannaVille**, originally hosted on a dual-processor Power Macintosh G4 in Dartmouth, Massachusetts.

## About

KhannaVille operated in the early 2000s as a personal digital archive—a rare thing at the time. It captured family adventures, travels, and cherished memories across America, Europe, and New England, along with home videos of special moments.

This redesigned version preserves all the original content while presenting it in a modern, responsive design that honors the nostalgic spirit of the original.

## Contents

- **15 Photo Galleries** – Collections from travels and family moments:
  - Beach, California, Cape Cod, Fall Leaves (multiple years)
  - Maine, Mount Washington, Germany, Gnome Garden
  - Museum of Science, New York, Winter, Nostalgia, Rachel's Birthday, and more

- **7 Videos** – Cherished moments captured on video:
  - Meet Cybo, Rachel's Graduation, Apache Server, Bikes
  - Roses Band, Ed's Visit (full and low-res versions)

## Design Philosophy

The site combines modern web design principles with warm, nostalgic colors and typography that evoke the original early-2000s aesthetic:

- **Color Palette**: Warm earth tones, soft creams, and gentle blues
- **Typography**: Classic serif fonts (Georgia) paired with modern layouts
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Lightbox gallery viewers with keyboard navigation

## Technical Details

- **Static Site**: Pure HTML/CSS/JavaScript – no backend required
- **Hosted on GitHub Pages**: Fast, reliable, and free
- **Performance**: Optimized image loading, smooth animations
- **Accessibility**: Semantic HTML, keyboard navigation

## Building Locally

```bash
# Clone the repository
git clone https://github.com/gkhanna/khannaville.git
cd khannaville

# Serve locally (using Python 3)
python3 -m http.server 8000

# Visit http://localhost:8000 in your browser
```

## File Structure

```
khannaville/
├── index.html           # Home page
├── gallery.html         # Gallery viewer template
├── styles.css           # Styling
├── script.js            # JavaScript (lightbox, navigation)
├── media/
│   ├── galleries/       # Photo galleries (18 collections)
│   └── ...
├── videos/              # Video files (.mov)
└── README.md
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

- **Original Site**: Created by Gaurav Khanna, early 2000s
- **Redesign**: 2026
- **Preservation**: All original content maintained and archived

## License

Personal archive – content owned by Gaurav Khanna. Redesign available under the MIT License.

---

**Copyright © 2005–2026 Gaurav Khanna**

Originally hosted on a Power Macintosh G4 running Mac OS X with Apache HTTP Server, Dartmouth, Massachusetts.
