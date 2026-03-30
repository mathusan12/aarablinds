const header = document.getElementById('header');
const ctaSection = document.getElementById('cta-parallax');
const ctaImage = document.getElementById('cta-parallax-image');

/* =========================
   HEADER EFFECT
========================= */
function updateHeader() {
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
        header.classList.remove('text-white', 'bg-transparent', 'border-white/10');
    } else {
        header.classList.remove('header-scrolled');
        header.classList.add('text-white', 'bg-transparent', 'border-white/10');
    }
}

/* =========================
   CTA PARALLAX EFFECT
========================= */
function updateCtaParallax() {
    if (!ctaSection || !ctaImage) return;

    const rect = ctaSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    /* Only animate when section is around the viewport */
    if (rect.bottom >= 0 && rect.top <= viewportHeight) {
        /*
          progress:
          when section enters viewport from bottom -> positive
          when section goes upward -> negative
        */
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distanceFromCenter = sectionCenter - viewportCenter;

        /*
          Stronger effect so it is visible
          Increase/decrease 0.18 to tune strength
        */
        const moveY = distanceFromCenter * -0.18;

        /*
          Keep image centered and move it vertically
        */
        ctaImage.style.transform = `translate3d(-50%, calc(-50% + ${moveY}px), 0)`;
    }
}

/* =========================
   OPTIMIZED SCROLL LOOP
========================= */
let ticking = false;

function handleScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateHeader();
            updateCtaParallax();
            ticking = false;
        });
        ticking = true;
    }
}

/* Run after full page is ready */
window.addEventListener('load', () => {
    updateHeader();
    updateCtaParallax();
});

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('resize', handleScroll);
