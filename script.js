// ============================================
// KhannaVille — JavaScript
// ============================================

// ── Smooth nav scrolling ──────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active nav highlight on scroll
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section[id]').forEach(s => {
        if (pageYOffset >= s.offsetTop - 200) current = s.id;
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
});

// ── Lightbox ─────────────────────────────────
// Uses event delegation so it works on dynamically-loaded images.

(function () {
    let modal, modalImg, images = [], currentIndex = 0;

    function createModal() {
        if (modal) return;
        modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <span class="modal-close" title="Close (Esc)">&times;</span>
            <span class="modal-nav modal-prev" title="Previous (←)">&#8249;</span>
            <div class="modal-content">
                <img id="modal-image" src="" alt="">
            </div>
            <span class="modal-nav modal-next" title="Next (→)">&#8250;</span>`;
        document.body.appendChild(modal);

        modalImg = modal.querySelector('#modal-image');

        modal.querySelector('.modal-close').addEventListener('click', close);
        modal.querySelector('.modal-prev').addEventListener('click', prev);
        modal.querySelector('.modal-next').addEventListener('click', next);
        modal.addEventListener('click', e => { if (e.target === modal) close(); });

        document.addEventListener('keydown', e => {
            if (!modal.classList.contains('show')) return;
            if (e.key === 'Escape')      close();
            if (e.key === 'ArrowLeft')   prev();
            if (e.key === 'ArrowRight')  next();
        });
    }

    function open(index) {
        currentIndex = index;
        modalImg.src = images[currentIndex];
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function next() { open((currentIndex + 1) % images.length); }
    function prev() { open((currentIndex - 1 + images.length) % images.length); }

    // Event delegation on the grid container — catches images added later
    document.addEventListener('click', e => {
        const item = e.target.closest('.image-item');
        if (!item) return;

        // Rebuild image list from current DOM state
        // Use data-full (full-res path) if present, otherwise fall back to thumb src
        const grid = item.closest('.image-grid');
        if (!grid) return;
        images = Array.from(grid.querySelectorAll('.image-item')).map(el =>
            el.dataset.full || el.querySelector('img').src
        );
        const clicked = Array.from(grid.querySelectorAll('.image-item')).indexOf(item);

        createModal();
        open(clicked);
    });
})();
