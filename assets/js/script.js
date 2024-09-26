'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});


let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
  // Trigger counting when section is fully in view
  if (window.scrollY >= statsSection.offsetTop - window.innerHeight + 100) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 10); // Faster counting
}


let aboutSection = document.querySelector(".about");

window.addEventListener("scroll", function () {
  if (window.scrollY >= aboutSection.offsetTop - window.innerHeight / 1.5) {
    aboutSection.classList.add("show");
  }
});


const serviceCards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Add the 'show' class to trigger the animation
      observer.unobserve(entry.target); // Stop observing once the animation has been triggered
    }
  });
}, {
  threshold: 0.2 // Trigger the animation when 20% of the card is visible
});

// Observe each service card
serviceCards.forEach(card => {
  observer.observe(card);
});


const featuresCards = document.querySelectorAll('.features-card');

const featuresObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Add the 'show' class to trigger the animation
      observer.unobserve(entry.target); // Stop observing once the animation has been triggered
    }
  });
}, {
  threshold: 0.2 // Trigger the animation when 20% of the card is visible
});

// Observe each feature card
featuresCards.forEach(card => {
  featuresObserver.observe(card);
});


const testimonialCards = document.querySelectorAll('.testimonials .box');

const testimonialObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Add the 'show' class to trigger the animation
      observer.unobserve(entry.target); // Stop observing once the animation has been triggered
    }
  });
}, {
  threshold: 0.2 // Trigger the animation when 20% of the card is visible
});

// Observe each feature card
testimonialCards.forEach(card => {
  testimonialObserver.observe(card);
});
