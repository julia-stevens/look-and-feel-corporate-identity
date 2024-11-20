// Hamburger navigatie
const navHamburger = document.querySelector("nav button");

navHamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    const navMenu = document.querySelector("nav ul");
    const navButton = document.querySelector(".nav-button img");

    navMenu.classList.toggle("showMenu");
    navButton.classList.toggle("showMenu");
}

// Zenders menu 
const buttonZenders = document.querySelector(".nav-zenders button");

buttonZenders.addEventListener("click", toggleZenders);

function toggleZenders() {
    const navZenders = document.querySelector(".nav-zenders");
    const buttonImgZenders = document.querySelector(".nav-zenders button img");

    navZenders.classList.toggle("showZenders");
    buttonImgZenders.classList.toggle("showZenders");
}

