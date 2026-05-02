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

// WhatsApp Popup Logic
const popup = document.getElementById('wa-popup');
const openButtons = document.querySelectorAll('.open-wa');
const closeBtn = document.getElementById('wa-close');

const phone = "919909550405";
const message = "Hi, I'd like to enquire about your products and services.";

const normalLink = document.getElementById('wa-normal');
const businessLink = document.getElementById('wa-business');

// Open popup
openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.display = "flex";
    });
});

// Close popup
closeBtn.addEventListener('click', () => {
    popup.style.display = "none";
});

// Links
normalLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

// WhatsApp Business (Android specific deep link)
businessLink.href = `intent://send?phone=${phone}#Intent;scheme=smsto;package=com.whatsapp.w4b;end`;
