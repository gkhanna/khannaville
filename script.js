// ============================================
// KhannaVille - JavaScript
// ============================================

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            updateActiveNav();
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNav);

function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Gallery lightbox functionality
class GalleryLightbox {
    constructor() {
        this.modal = null;
        this.images = [];
        this.currentIndex = 0;
        this.init();
    }

    init() {
        // Create modal if on gallery page
        const imageItems = document.querySelectorAll('.image-item');
        if (imageItems.length > 0) {
            this.createModal();
            this.setupImageListeners();
        }
    }

    createModal() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <span class="modal-nav modal-prev">&lt;</span>
                <img id="modal-image" src="" alt="">
                <span class="modal-nav modal-next">&gt;</span>
            </div>
        `;
        document.body.appendChild(modal);
        this.modal = modal;

        // Event listeners
        modal.querySelector('.modal-close').addEventListener('click', () => this.close());
        modal.querySelector('.modal-prev').addEventListener('click', () => this.prev());
        modal.querySelector('.modal-next').addEventListener('click', () => this.next());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.close();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.modal && this.modal.classList.contains('show')) {
                if (e.key === 'Escape') this.close();
                if (e.key === 'ArrowLeft') this.prev();
                if (e.key === 'ArrowRight') this.next();
            }
        });
    }

    setupImageListeners() {
        const imageItems = document.querySelectorAll('.image-item');
        this.images = Array.from(imageItems).map(item => item.querySelector('img').src);

        imageItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.currentIndex = index;
                this.open();
            });
        });
    }

    open() {
        if (this.images.length === 0) return;
        const modalImg = this.modal.querySelector('#modal-image');
        modalImg.src = this.images[this.currentIndex];
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.open();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.open();
    }
}

// Initialize lightbox on page load
document.addEventListener('DOMContentLoaded', () => {
    new GalleryLightbox();
});

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
