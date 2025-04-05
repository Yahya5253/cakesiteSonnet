// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Navbar functionality
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.querySelector('.navbar');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(event) {
            hamburger.classList.remove('open');
            navLinks.classList.remove('active');
            
            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                event.preventDefault();
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Change navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hero Slider Functionality
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroSliderDots = document.querySelectorAll('.hero-slider-dot');
    let currentHeroSlide = 0;
    
    function showHeroSlide(n) {
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroSliderDots.forEach(dot => dot.classList.remove('active'));
        
        currentHeroSlide = (n + heroSlides.length) % heroSlides.length;
        
        heroSlides[currentHeroSlide].classList.add('active');
        heroSliderDots[currentHeroSlide].classList.add('active');
    }
    
    function nextHeroSlide() {
        showHeroSlide(currentHeroSlide + 1);
    }
    
    // Auto advance hero slider
    setInterval(nextHeroSlide, 5000);
    
    // Manual navigation with dots
    heroSliderDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            showHeroSlide(slideIndex);
        });
    });

    // Gallery Modal functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close-modal');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.getAttribute('data-img');
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Testimonials auto-carousel functionality
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDots = document.querySelectorAll('.slider-dot');
    let currentTestimonial = 0;
    
    function showTestimonial(n) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        currentTestimonial = (n + testimonials.length) % testimonials.length;
        
        testimonials[currentTestimonial].classList.add('active');
        testimonialDots[currentTestimonial].classList.add('active');
    }
    
    function nextTestimonial() {
        showTestimonial(currentTestimonial + 1);
    }
    
    // Set first testimonial as active initially
    showTestimonial(0);
    
    // Auto advance testimonials
    setInterval(nextTestimonial, 4000);
    
    // Manual navigation with dots
    testimonialDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            showTestimonial(slideIndex);
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Here you would normally handle form submission
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // WhatsApp button pulse animation
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        setTimeout(() => {
            whatsappButton.classList.add('pulse');
        }, 3000);
    }
});