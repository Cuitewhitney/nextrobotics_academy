// script.js

const registerButton = document.getElementById("register-button");
const dropdownMenu = document.getElementById("dropdown-menu");

// Show dropdown when hovering over the button
registerButton.addEventListener("mouseover", () => {
    dropdownMenu.style.display = "block";
});

// Hide dropdown when cursor leaves the menu
dropdownMenu.addEventListener("mouseleave", () => {
    dropdownMenu.style.display = "none";
});

// Keep dropdown visible while hovering over it
dropdownMenu.addEventListener("mouseover", () => {
    dropdownMenu.style.display = "block";
});

// Optional: Hide dropdown if user moves cursor away
registerButton.addEventListener("mouseleave", () => {
    if (!dropdownMenu.matches(":hover")) {
        dropdownMenu.style.display = "none";
    }
});

// about challenge

document.getElementById("read-more-btn").addEventListener("click", function () {
    const hiddenText = document.querySelector(".hidden-text");
    const button = this;

    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
        hiddenText.style.display = "block"; // Show the hidden text
        button.textContent = "Read Less"; // Change button text
    } else {
        hiddenText.style.display = "none"; // Hide the text
        button.textContent = "Read More"; // Reset button text
    }
});
