window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animation elements
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});

// Mobile menu functionality
function createMobileMenu() {
    if (window.innerWidth <= 768) {
        const navContainer = document.querySelector('.nav-container');
        let mobileButton = document.querySelector('.mobile-menu-btn');
        
        if (!mobileButton) {
            mobileButton = document.createElement('button');
            mobileButton.innerHTML = '☰';
            mobileButton.className = 'mobile-menu-btn';
            mobileButton.style.cssText = 'background: none; border: none; color: #FF7F27; font-size: 1.8rem; cursor: pointer;';
            
            mobileButton.onclick = function() {
                const navLinks = document.querySelector('.nav-links');
                if (navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                } else {
                    navLinks.style.cssText = 'display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; width: 100%; background: rgba(0,0,0,0.95); padding: 20px; border-radius: 0 0 10px 10px;';
                }
            };
            
            navContainer.appendChild(mobileButton);
        }
    }
}

// Initialize mobile menu
createMobileMenu();
window.addEventListener('resize', createMobileMenu);

// Add some interactive effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});