/* ==========================================
   MOBILE MENU
========================================== */

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    hamburger.classList.toggle("active");

});



/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    icon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        icon.classList.replace("fa-moon", "fa-sun");

    } else {

        localStorage.setItem("theme", "light");
        icon.classList.replace("fa-sun", "fa-moon");

    }

});


/* ==========================================
   CLOSE MENU WHEN CLICKING A LINK
========================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        hamburger.classList.remove("active");

    });

});


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.padding = "12px 28px";
        navbar.style.boxShadow = "0 18px 45px rgba(0,0,0,.15)";

    } else {

        navbar.style.padding = "14px 28px";
        navbar.style.boxShadow = "";

    }

});


/* ==========================================
   HERO BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* ==========================================
   SIMPLE SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .stat"
);

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/* ==========================================
   ANIMATED NUMBER COUNTERS
========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = parseFloat(counter.dataset.target);
        const suffix = counter.dataset.suffix || "";

        let start = 0;
        const duration = 1800;
        const startTime = performance.now();

        function updateCounter(currentTime) {

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth ease-out animation
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            const currentValue = start + (target - start) * easedProgress;

            // Keep 4.9 as 4.9 instead of 5
            counter.textContent =
                target % 1 !== 0
                    ? currentValue.toFixed(1) + suffix
                    : Math.floor(currentValue) + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }

        }

        requestAnimationFrame(updateCounter);

        // Only animate once
        observer.unobserve(counter);

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});
