
/* =========================================
   VISHAL KUMAR - PREMIUM PORTFOLIO
   COMPLETE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  // =====================================
  // 1. PREMIUM PAGE LOADER
  // =====================================

  const loader = document.querySelector(".preloader");

  function hideLoader() {
    if (loader) {
      loader.classList.add("hide");
    }
  }

  window.addEventListener("load", hideLoader);

  // Backup loader
  setTimeout(hideLoader, 3000);


  // =====================================
  // 2. MOBILE NAVIGATION MENU
  // =====================================

  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".navbar nav");

  if (menuBtn && nav) {

    menuBtn.addEventListener("click", function () {

      const isOpen = nav.classList.toggle("open");

      menuBtn.textContent = isOpen ? "✕" : "☰";

      menuBtn.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });

    // Close menu after clicking links
    nav.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        nav.classList.remove("open");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-expanded", "false");

      });

    });

  }


  // =====================================
  // 3. PREMIUM TYPING TEXT EFFECT
  // =====================================

  const typingText = document.getElementById("typing-text");

  if (typingText) {

    const words = [
      "Creative Thinker",
      "Digital Explorer",
      "Future Developer",
      "Dream Chaser",
      "Big Dreamer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

      const currentWord = words[wordIndex];

      if (deleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      typingText.textContent = currentWord.substring(0, charIndex);

      let speed = deleting ? 45 : 100;

      if (!deleting && charIndex === currentWord.length) {

        deleting = true;
        speed = 1500;

      } else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;

      }

      setTimeout(typeEffect, speed);

    }

    typeEffect();

  }


  // =====================================
  // 4. SCROLL REVEAL ANIMATION
  // =====================================

  const animatedElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

      function (entries, observer) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

          }

        });

      },

      {
        threshold: 0.10,
        rootMargin: "0px 0px -40px 0px"
      }

    );

    animatedElements.forEach(function (element) {
      observer.observe(element);
    });

  } else {

    animatedElements.forEach(function (element) {
      element.classList.add("show");
    });

  }


  // =====================================
  // 5. ACTIVE NAVIGATION ON SCROLL
  // =====================================

  const sections = document.querySelectorAll("main section[id]");

  const navLinks = document.querySelectorAll(".navbar nav a");

  function updateNavigation() {

    let current = "home";

    sections.forEach(function (section) {

      const sectionTop = section.offsetTop - 180;

      if (window.scrollY >= sectionTop) {

        current = section.getAttribute("id");

      }

    });

    navLinks.forEach(function (link) {

      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {

        link.classList.add("active");

      }

    });

  }

  window.addEventListener("scroll", updateNavigation);

  updateNavigation();


  // =====================================
  // 6. AUTOMATIC COPYRIGHT YEAR
  // =====================================

  const year = document.getElementById("year");

  if (year) {

    year.textContent = new Date().getFullYear();

  }


  // =====================================
  // 7. SMOOTH SCROLLING
  // =====================================

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


  // =====================================
  // 8. PREMIUM BUTTON CLICK EFFECT
  // =====================================

  document.querySelectorAll(".btn").forEach(function (button) {

    button.addEventListener("click", function () {

      button.style.transform = "scale(0.96)";

      setTimeout(function () {

        button.style.transform = "";

      }, 150);

    });

  });


  // =====================================
  // 9. PAGE READY
  // =====================================

  document.body.classList.add("page-ready");

  console.log("Vishal Kumar Premium Portfolio Loaded Successfully!");

});
