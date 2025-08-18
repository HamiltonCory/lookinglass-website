// Theme Management
class ThemeManager {
    constructor() {
        this.theme = this.getStoredTheme() || this.getSystemTheme();
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        this.bindEvents();
        this.updateToggleIcon();
    }

    getStoredTheme() {
        return localStorage.getItem('theme');
    }

    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.theme = theme;
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        this.updateToggleIcon();
    }

    updateToggleIcon() {
        const button = document.getElementById('theme-toggle');
        if (button) {
            const isDark = this.theme === 'dark';
            button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    bindEvents() {
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggleTheme());
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!this.getStoredTheme()) {
                this.applyTheme(e.matches ? 'dark' : 'light');
                this.updateToggleIcon();
            }
        });
    }
}

// Mobile Menu Management
class MobileMenu {
    constructor() {
        this.isOpen = false;
        this.init();
    }

    init() {
        this.bindEvents();
        this.createMobileMenu();
    }

    bindEvents() {
        const toggleButton = document.getElementById('mobile-menu-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggle());
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && !e.target.closest('.nav')) {
                this.close();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }

    createMobileMenu() {
        const nav = document.querySelector('.nav');
        const navMenu = document.querySelector('.nav-menu');
        
        if (nav && navMenu) {
            const mobileMenu = navMenu.cloneNode(true);
            mobileMenu.classList.add('mobile-menu');
            mobileMenu.style.display = 'none';
            nav.appendChild(mobileMenu);
        }
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const toggleButton = document.getElementById('mobile-menu-toggle');
        
        if (mobileMenu) {
            mobileMenu.style.display = 'flex';
            mobileMenu.classList.add('mobile-menu-open');
            this.isOpen = true;
            
            if (toggleButton) {
                toggleButton.classList.add('mobile-menu-active');
            }
        }
    }

    close() {
        const mobileMenu = document.querySelector('.mobile-menu');
        const toggleButton = document.getElementById('mobile-menu-toggle');
        
        if (mobileMenu) {
            mobileMenu.style.display = 'none';
            mobileMenu.classList.remove('mobile-menu-open');
            this.isOpen = false;
            
            if (toggleButton) {
                toggleButton.classList.remove('mobile-menu-active');
            }
        }
    }
}

// Smooth Scrolling for Anchor Links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                
                // Skip if it's just "#"
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    this.scrollToElement(target);
                }
            });
        });
    }

    scrollToElement(element) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = element.offsetTop - headerHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Intersection Observer for Animations
class AnimationObserver {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.createObserver();
            this.observeElements();
        }
    }

    createObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
    }

    observeElements() {
        const elementsToAnimate = document.querySelectorAll(
            '.feature-card, .hero-content, .hero-image, .section-title, .section-subtitle'
        );
        
        elementsToAnimate.forEach(el => {
            this.observer.observe(el);
        });
    }
}

// Performance Optimizations
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.preloadCriticalResources();
    }

    lazyLoadImages() {
        if ('loading' in HTMLImageElement.prototype) {
            // Native lazy loading support
            document.querySelectorAll('img[data-src]').forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        } else {
            // Fallback for browsers without native lazy loading
            this.implementIntersectionObserverLazyLoading();
        }
    }

    implementIntersectionObserverLazyLoading() {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    preloadCriticalResources() {
        // Preload critical CSS and fonts
        const criticalResources = [
            { href: '/assets/css/style.css', as: 'style' },
            { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
            { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossorigin: true }
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            Object.assign(link, resource);
            link.rel = resource.rel || 'preload';
            document.head.appendChild(link);
        });
    }
}

// Error Handling and Analytics
class ErrorHandler {
    constructor() {
        this.init();
    }

    init() {
        this.bindErrorEvents();
    }

    bindErrorEvents() {
        window.addEventListener('error', (e) => {
            console.error('JavaScript Error:', e.error);
            // In production, you might want to send this to an analytics service
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled Promise Rejection:', e.reason);
            // In production, you might want to send this to an analytics service
        });
    }
}

// Accessibility Enhancements
class AccessibilityEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.enhanceKeyboardNavigation();
        this.announcePageChanges();
        this.manageFocus();
    }

    enhanceKeyboardNavigation() {
        // Add skip link
        this.addSkipLink();
        
        // Enhance button keyboard interactions
        document.querySelectorAll('button, [role="button"]').forEach(button => {
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    button.click();
                }
            });
        });
    }

    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            z-index: 1000;
            text-decoration: none;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    announcePageChanges() {
        // Create live region for announcements
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.style.cssText = `
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow: hidden;
        `;
        document.body.appendChild(liveRegion);
        
        // Store reference for potential use
        window.accessibilityAnnouncer = liveRegion;
    }

    manageFocus() {
        // Manage focus for modal dialogs and dynamic content
        let lastFocusedElement = null;
        
        document.addEventListener('focusin', (e) => {
            lastFocusedElement = e.target;
        });
        
        // Store reference for potential modal use
        window.focusManager = {
            lastFocusedElement: () => lastFocusedElement,
            returnFocus: () => {
                if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
                    lastFocusedElement.focus();
                }
            }
        };
    }
}

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core functionality
    new ThemeManager();
    new MobileMenu();
    new SmoothScroll();
    new AnimationObserver();
    new PerformanceOptimizer();
    new ErrorHandler();
    new AccessibilityEnhancer();
    
    // Add main landmark for accessibility
    const main = document.querySelector('main');
    if (main) {
        main.id = 'main';
    }
    
    console.log('🔭 Lookinglass website initialized successfully!');
});

// CSS for mobile menu animation (injected via JavaScript)
const mobileMenuStyles = `
    .mobile-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--background-color);
        border-top: 1px solid var(--border-color);
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        box-shadow: 0 4px 6px var(--shadow-color);
        z-index: 999;
    }
    
    .mobile-menu-toggle.mobile-menu-active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle.mobile-menu-active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.mobile-menu-active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @media (min-width: 769px) {
        .mobile-menu {
            display: none !important;
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
`;

// Inject mobile menu styles
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileMenuStyles;
document.head.appendChild(styleSheet);
