/* ==========================================
   SmileCare Dental Clinic
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       MOBILE MENU
    ====================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-menu a");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    function closeMenu() {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeMenu);

    mobileLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    /* ======================================
       STICKY NAVBAR SHADOW
    ====================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
        } else {
            header.style.boxShadow = "0 3px 20px rgba(0,0,0,.05)";
        }

    });

    /* ======================================
       TESTIMONIAL SLIDER
    ====================================== */

    const testimonials = document.querySelectorAll(".testimonial");

    let current = 0;

    function showSlide(index) {

        testimonials.forEach(card => {

            card.classList.remove("active");

        });

        testimonials[index].classList.add("active");

    }

    setInterval(() => {

        current++;

        if (current >= testimonials.length) {

            current = 0;

        }

        showSlide(current);

    }, 4500);

    /* ======================================
       FAQ ACCORDION
    ====================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-question");

        button.addEventListener("click", () => {

            faqItems.forEach(faq => {

                if (faq !== item) {

                    faq.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    /* ======================================
       SCROLL REVEAL
    ====================================== */

    const revealElements = document.querySelectorAll(
        ".service-card, .feature, .stat-card, .testimonial, .contact-grid, .about-grid, .faq-item"
    );

    revealElements.forEach(el => {

        el.classList.add("hidden");

    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    revealElements.forEach(el => {

        observer.observe(el);

    });

    /* ======================================
       ACTIVE NAVIGATION LINKS
    ====================================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                currentSection = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    });

    /* ======================================
       SMOOTH SCROLL OFFSET
    ====================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        });

    });

    /* ======================================
       CONTACT FORM DEMO
    ====================================== */

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you! Your appointment request has been received.");

        form.reset();

    });

});