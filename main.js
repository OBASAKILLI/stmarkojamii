document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header Logic
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 2rem';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '1rem 2rem';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        }
    });

    // Mobile Menu Toggle Logic
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileNavList = document.querySelector('.mobile-nav-list');
    let isMenuOpen = false;

    // Clone desktop nav to mobile nav
    const desktopNav = document.querySelector('.nav-links');
    if (desktopNav && mobileNavList && mobileNavList.children.length === 0) {
        const desktopLinks = Array.from(desktopNav.children);
        
        desktopLinks.forEach(item => {
            const clone = item.cloneNode(true);
            const subMenu = clone.querySelector('.dropdown-content') || clone.querySelector('.mega-menu');
            
            if (subMenu) {
                // Add a toggle button for sub-menus
                const toggle = document.createElement('span');
                toggle.className = 'mobile-toggle';
                toggle.innerHTML = '<i class="fas fa-chevron-down"></i>';
                
                const parentLink = clone.querySelector('a');
                parentLink.appendChild(toggle);
                
                // Toggle when the WHOLE link row is clicked
                parentLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const isNowActive = subMenu.classList.contains('active');
                    
                    // Close all other open sub-menus (Accordion effect)
                    if (!isNowActive) {
                        const allSubMenus = mobileNavList.querySelectorAll('.dropdown-content, .mega-menu');
                        const allToggles = mobileNavList.querySelectorAll('.mobile-toggle');
                        
                        allSubMenus.forEach(menu => {
                            menu.classList.remove('active');
                            menu.style.maxHeight = '0';
                            menu.style.opacity = '0';
                            setTimeout(() => {
                                if (!menu.classList.contains('active')) {
                                    menu.style.display = 'none';
                                }
                            }, 400);
                        });
                        
                        allToggles.forEach(t => t.classList.remove('rotated'));
                    }

                    // Toggle current one
                    if (isNowActive) {
                        subMenu.classList.remove('active');
                        toggle.classList.remove('rotated');
                        subMenu.style.maxHeight = '0';
                        subMenu.style.opacity = '0';
                        setTimeout(() => {
                            if (!subMenu.classList.contains('active')) {
                                subMenu.style.display = 'none';
                            }
                        }, 400);
                    } else {
                        subMenu.classList.add('active');
                        toggle.classList.add('rotated');
                        subMenu.style.display = 'block';
                        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                        subMenu.style.opacity = '1';
                    }
                });
            }
            
            mobileNavList.appendChild(clone);
        });
    }

    const toggleMenu = (show) => {
        isMenuOpen = show;
        if (show) {
            mobileNav.classList.add('show');
            mobileOverlay.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            mobileNav.classList.remove('show');
            mobileOverlay.classList.remove('show');
            document.body.style.overflow = '';
        }
    };

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => toggleMenu(true));
    }

    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', () => toggleMenu(false));
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', () => toggleMenu(false));
    }

    // Manual close only as requested - removed automatic toggleMenu(false) on link clicks



    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
