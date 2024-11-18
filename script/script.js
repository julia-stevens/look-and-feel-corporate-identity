// Hamburger navigatie
const navHamburger = document.querySelector("nav button");

navHamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    const navMenu = document.querySelector("nav ul");

    navMenu.classList.toggle("showMenu");
}