/**
 * DostWin - Main JavaScript
 * Clean vanilla JS without external libraries.
 * 
 * Features:
 * 1. Mobile menu toggle with hamburger animation and auto-close on link click
 * 2. Smooth scroll for anchor links with 72px header offset
 * 3. Active navigation highlighting based on section in viewport
 * 4. FAQ accordion auto-close (exclusive accordion behavior)
 * 5. Dynamically created, styled scroll-to-top button
 * 6. Sticky header shadow state toggled on scroll
 */

document.addEventListener('DOMContentLoaded', () => {
    // =========================================================================
    // 1. Mobile Menu Toggle
    // =========================================================================
    const mobileBtn = document.getElementById('mobileBtn') || document.querySelector('.mobile-menu-btn');
    const mainNav = document.getElementById('mainNav') || document.querySelector('.main-nav');

    if (mobileBtn && mainNav) {
        const spans = mobileBtn.querySelectorAll('span');

        const closeMobileMenu = () => {
            mobileBtn.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
            if (spans.length >= 3) {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        };

        const openMobileMenu = () => {
            mobileBtn.setAttribute('aria-expanded', 'true');
            mainNav.classList.add('active');
            if (spans.length >= 3) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            }
        };

        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Close menu when clicking a nav link (for anchor links)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                const href = link.getAttribute('href');
                if (href && (href.startsWith('#') || href.includes('#'))) {
                    closeMobileMenu();
                }
            });
        });

        // Close menu if user clicks outside of nav while open
        document.addEventListener('click', (e) => {
            if (
                mainNav.classList.contains('active') &&
                !mainNav.contains(e.target) &&
                !mobileBtn.contains(e.target)
            ) {
                closeMobileMenu();
            }
        });

        // Auto-close on resize if transitioning to desktop viewport
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }

    // =========================================================================
    // 2. Smooth Scroll Offset
    // =========================================================================
    const HEADER_OFFSET = 72; // Header height in pixels
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Ensure target is a valid ID selector (more than just '#')
            if (href && href.startsWith('#') && href.length > 1) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Update URL hash without jumping
                    if (window.history && window.history.pushState) {
                        window.history.pushState(null, '', href);
                    }
                }
            }
        });
    });

    // =========================================================================
    // 3. Active Nav Highlighting
    // =========================================================================
    const navAnchorElements = document.querySelectorAll('#mainNav a, .main-nav a');
    const contentSections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        if (!contentSections.length || !navAnchorElements.length) return;

        const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        let activeSectionId = '';

        // Determine which section currently occupies viewport
        contentSections.forEach((section) => {
            const sectionTop = section.offsetTop - HEADER_OFFSET - 60;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                activeSectionId = section.getAttribute('id');
            }
        });

        // If at the very bottom of the page, activate the last section
        if (window.innerHeight + scrollPos >= document.documentElement.scrollHeight - 60) {
            const lastSection = contentSections[contentSections.length - 1];
            if (lastSection) {
                activeSectionId = lastSection.getAttribute('id');
            }
        }

        // Apply .active class to matching navigation links
        navAnchorElements.forEach((link) => {
            const href = link.getAttribute('href');
            if (!href) return;

            let matches = false;
            if (activeSectionId) {
                if (href === `#${activeSectionId}`) {
                    matches = true;
                } else if (href === `/${activeSectionId}/` || href === `/${activeSectionId}`) {
                    matches = true;
                } else if (activeSectionId === 'home' && (href === '/' || href === '#home')) {
                    matches = true;
                } else if (activeSectionId === 'features' && href.includes('features')) {
                    matches = true;
                } else if ((activeSectionId === 'guides' || activeSectionId === 'guide') && href.includes('guide')) {
                    matches = true;
                } else if (activeSectionId === 'faq' && href.includes('faq')) {
                    matches = true;
                } else if (activeSectionId === 'about' && href.includes('about')) {
                    matches = true;
                }
            }

            if (matches) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // =========================================================================
    // 4. FAQ Accordion Auto-Close
    // =========================================================================
    const faqContainers = document.querySelectorAll('.faq-accordion');

    faqContainers.forEach((container) => {
        const detailsList = container.querySelectorAll('details');

        detailsList.forEach((detail) => {
            detail.addEventListener('toggle', () => {
                if (detail.open) {
                    detailsList.forEach((otherDetail) => {
                        if (otherDetail !== detail && otherDetail.open) {
                            otherDetail.removeAttribute('open');
                        }
                    });
                }
            });
        });
    });

    // =========================================================================
    // 5. Scroll-to-Top Button
    // =========================================================================
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.type = 'button';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollTopBtn.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    `;

    // Dynamic styling: fixed bottom-right, accent background, round, hidden by default
    Object.assign(scrollTopBtn.style, {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        backgroundColor: '#E5B83B',
        color: '#111111',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 18px rgba(0, 0, 0, 0.4)',
        zIndex: '999',
        opacity: '0',
        visibility: 'hidden',
        transform: 'translateY(16px)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    });

    // Interactive hover state
    scrollTopBtn.addEventListener('mouseenter', () => {
        scrollTopBtn.style.backgroundColor = '#ffcf40';
        scrollTopBtn.style.transform = 'translateY(-3px) scale(1.05)';
        scrollTopBtn.style.boxShadow = '0 6px 22px rgba(229, 184, 59, 0.45)';
    });

    scrollTopBtn.addEventListener('mouseleave', () => {
        scrollTopBtn.style.backgroundColor = '#E5B83B';
        scrollTopBtn.style.transform = 'translateY(0) scale(1)';
        scrollTopBtn.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.4)';
    });

    // Smooth scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.body.appendChild(scrollTopBtn);

    function updateScrollTopVisibility(scrollY) {
        if (scrollY > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
            scrollTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
            scrollTopBtn.style.transform = 'translateY(16px)';
        }
    }

    // =========================================================================
    // 6. Header Shadow on Scroll
    // =========================================================================
    const globalHeader = document.querySelector('.global-header');

    function updateHeaderShadow(scrollY) {
        if (!globalHeader) return;
        if (scrollY > 10) {
            globalHeader.classList.add('scrolled');
        } else {
            globalHeader.classList.remove('scrolled');
        }
    }

    // =========================================================================
    // Optimized Scroll Listener
    // =========================================================================
    let ticking = false;

    function handleScroll() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        updateHeaderShadow(scrollY);
        updateScrollTopVisibility(scrollY);
        updateActiveNav();
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Initial check on load
    handleScroll();
});
