const header = document.querySelector("header");
const toggleButton = document.querySelector("#menuBtn");
const mobileMenu = document.querySelector("#mobileMenu");

// Sticky header scroll effect (Tailwind version)
// const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("py-3", "shadow-md");
        header.classList.remove("py-5");
    } else {
        header.classList.add("py-5");
        header.classList.remove("py-3", "shadow-md");
    }
});

// Mobile menu toggle
toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});