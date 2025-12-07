// Carousel variables
let currentSlide = 0;
let slides = [];
let totalSlides = 0;
let carouselInterval;

// Move carousel
function moveCarousel(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarouselPosition();
    updateIndicators();
}

// Go to specific slide
function goToSlide(index) {
    currentSlide = index;
    updateCarouselPosition();
    updateIndicators();
}

// Update carousel position - vertical slide transitions
function updateCarouselPosition() {
    const track = document.querySelector('.carousel-track');
    if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

// Update indicators
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Start auto-play - automatically swipe every 5 seconds
function startAutoPlay() {
    carouselInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarouselPosition();
        updateIndicators();
    }, 5000); // Change slide every 5 seconds
}

// Stop auto-play
function stopAutoPlay() {
    clearInterval(carouselInterval);
}

// Simple JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('AKKI Website loaded successfully!');
    
    // Initialize carousel
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        slides = document.querySelectorAll('.carousel-slide');
        totalSlides = slides.length;
        
        if (totalSlides > 0) {
            updateIndicators();
            startAutoPlay();
            
            // Pause on hover
            carouselContainer.addEventListener('mouseenter', () => {
                stopAutoPlay();
            });
            
            // Resume on mouse leave
            carouselContainer.addEventListener('mouseleave', () => {
                startAutoPlay();
            });
        }
    }
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = this.querySelector('#name').value.trim();
            const email = this.querySelector('#email').value.trim();
            const message = this.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all required fields');
                e.preventDefault();
                return;
            }

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                e.preventDefault();
                return;
            }
        });
    }
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scroll behavior for navigation
function smoothScroll(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
