// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');

    // Hide preloader when page is loaded
    window.addEventListener('load', function() {
      preloader.classList.add('loaded');

      // Remove preloader from DOM after animation completes
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    });

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const siteNav = document.querySelector('.site-nav');

    navToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      siteNav.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (siteNav.classList.contains('active')) {
          navToggle.classList.remove('active');
          siteNav.classList.remove('active');
        }
      });
    });

    // Sticky Header
    const header = document.querySelector('.site-header');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Initialize Swiper for Testimonials
    const testimonialSwiper = new Swiper('.testimonial-slider', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // Initialize Fancybox for Gallery
    Fancybox.bind("[data-fancybox]", {
      // Your custom options
    });

    // Gallery Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        // Filter gallery items
        galleryItems.forEach(item => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());

        // Here you would typically send the form data to a server
        console.log('Form submitted:', formValues);

        // Show success message
        alert('Thank you for your message! We will contact you soon.');

        // Reset form
        this.reset();
      });
    }
  });
