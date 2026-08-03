/* ==========================================
   MOBILE MENU
========================================== */

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
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
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            count += increment;

            if(count < target){

                counter.textContent = Math.floor(count);

                requestAnimationFrame(updateCounter);

            }else{

                counter.textContent = target + "+";

            }

        };

        updateCounter();

    });

};

let started = false;

window.addEventListener("scroll",()=>{

    const stats = document.querySelector(".hero-stats");

    const top = stats.getBoundingClientRect().top;

    if(top < window.innerHeight && !started){

        started = true;

        startCounters();

    }

});