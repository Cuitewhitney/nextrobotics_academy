// Carousel Functionality
// let currentIndex = 0;

// function showNextSlide() {
//     const slides = document.querySelectorAll(".carousel-item");
//     slides[currentIndex].classList.remove("active");

//     currentIndex = (currentIndex + 1) % slides.length;
//     slides[currentIndex].classList.add("active");
// }

// Automatically switch slides every 5 seconds
// setInterval(showNextSlide, 5000);

// Dropdown Menu Toggle (for Trainings)
// document.querySelectorAll('.dropdown').forEach(dropdown => {
//     dropdown.addEventListener('mouseenter', () => {
//         const menu = dropdown.querySelector('.dropdown-menu');
//         if (menu) menu.style.display = 'block';
//     });
//     dropdown.addEventListener('mouseleave', () => {
//         const menu = dropdown.querySelector('.dropdown-menu');
//         if (menu) menu.style.display = 'none';
//     });
// });

// new up
// Animation for the welcome text on each carousel slide
// const animatedTexts = document.querySelectorAll('.animated-text');

// function animateText() {
//     animatedTexts.forEach((text) => {
//         text.style.opacity = '0';
//         text.style.transition = 'opacity 1s, transform 1s';
//         setTimeout(() => {
//             text.style.opacity = '1';
//             text.style.transform = 'scale(1.1)';
//         }, 500);
//     });
// }

// const carousel = document.querySelector('#carouselExampleIndicators');
// carousel.addEventListener('slide.bs.carousel', animateText);

// Initial animation on page load
// window.onload = animateText;


// //////////////////new js ///////////////////////////////////////////////////
// Carousel Delay (5 seconds)
document.querySelector('#carouselExampleIndicators').setAttribute('data-bs-interval', 5000);

// Text Animation
document.addEventListener("DOMContentLoaded", () => {
    const animatedText = document.querySelectorAll(".animated-text");
    animatedText.forEach((text, index) => {
        text.style.opacity = 0;
        text.style.transform = "translateY(50px)";
        setTimeout(() => {
            text.style.transition = "all 1s ease";
            text.style.opacity = 1;
            text.style.transform = "translateY(0)";
        }, index * 500);
    });
});

// Automatically adjust carousel speed (optional enhancement)
document.addEventListener("DOMContentLoaded", () => {
    const trainingsCarousel = document.querySelector("#trainingsCarousel");
    if (trainingsCarousel) {
        trainingsCarousel.setAttribute("data-bs-interval", 5000); // 5-second delay
    }
});

// script.js

// This is just an example if you'd like to add additional behaviors like showing/hiding the icon based on scroll position.
window.onscroll = function() {
    let container = document.getElementById("whatsapp-container");

    // Show the WhatsApp icon only after scrolling 100px down
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        container.style.display = "flex"; // Show the icon
    } else {
        container.style.display = "none"; // Hide the icon when at the top of the page
    }
};

