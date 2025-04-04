// Image Slider
let sliderIndex = 0;
const slides = document.querySelectorAll(".slider img");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === sliderIndex ? "block" : "none";
    });
    sliderIndex = (sliderIndex + 1) % slides.length;
}

setInterval(showSlides, 3000); // Change image every 3 seconds
showSlides();

// Testimonial Carousel
let testimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial() {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === testimonialIndex ? "block" : "none";
    });
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

setInterval(showTestimonial, 4000); // Change testimonial every 4 seconds
showTestimonial();

// WhatsApp Button Animation
const whatsappButton = document.querySelector(".whatsapp-button");

function animateWhatsApp() {
    whatsappButton.classList.add("bounce");
    setTimeout(() => whatsappButton.classList.remove("bounce"), 1000);
}

setInterval(animateWhatsApp, 5000); // Animate every 5 seconds
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});


// Hamburger Menu Toggle
// Select elements
const navbar = document.querySelector(".navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Hamburger Menu Toggle
hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
});

// Shrink Navbar on Scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});
