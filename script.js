document.addEventListener('DOMContentLoaded', () => {

    // ── Hamburger menu ──
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            mobileNav.classList.toggle('open');
        });

        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                mobileNav.classList.remove('open');
            });
        });
    }

    // ── ACTIVE NAV ON SCROLL FIX ──

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[data-section]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                const activeId = entry.target.id;

                navLinks.forEach(link => {
                    const linkTarget = link.getAttribute('href');

                    if (linkTarget === `#${activeId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }

        });
    }, {
        threshold: 0.5
    });

    // ⭐ THIS IS THE FIX (IMPORTANT PART)
    sections.forEach(section => {
        observer.observe(section);
    });

});
