// Hamburger navigatie in nav
const navHamburger = document.querySelector("nav button");
const navMenu = document.querySelector("nav ul");
const navButton = document.querySelector(".nav-button img");

navHamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    navMenu.classList.toggle("showMenu");
    navButton.classList.toggle("showMenu");

    if (navMenu.hasAttribute("inert")) {
        navMenu.removeAttribute("inert");
    } else {
        navMenu.setAttribute("inert", true);
    }
}

// hamburger als je resized
function reportWindowSize() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 800) {
        navMenu.removeAttribute("inert");
    } else {
        navMenu.setAttribute("inert", true);
    }
}

// checken als het schermbreedte verandert
window.onresize = reportWindowSize;

// checken bij laden pagina
reportWindowSize();

// Zenders menu bij nav
const buttonZenders = document.querySelector(".nav-zenders button");
const navZenders = document.querySelector(".nav-zenders");
const buttonImgZenders = document.querySelector(".nav-zenders button img");
const navZendersUl = document.querySelector(".zenders-menu")

buttonZenders.addEventListener("click", toggleZenders);

function toggleZenders() {
    navZenders.classList.toggle("showZenders");
    buttonImgZenders.classList.toggle("showZenders");

    if (navZendersUl.hasAttribute("inert")) {
        navZendersUl.removeAttribute("inert");
    } else {
        navZendersUl.setAttribute("inert", true);
    }
}

// Titels op cards
document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll('.title-card');

    titles.forEach(title => {
        const containerWidth = title.parentElement.offsetWidth;
        const titleWidth = title.scrollWidth;

        const bufferThreshold = 0.9; // 90%

        if (titleWidth > containerWidth * bufferThreshold) {
            title.classList.add('scroll-title');
        } else {
            title.classList.remove('scroll-title');
        }
    });
});

// Re-check on window resize to handle responsive layouts
window.addEventListener('resize', () => {
    const titles = document.querySelectorAll('.title-card');

    titles.forEach(title => {
        const containerWidth = title.parentElement.offsetWidth;
        const titleWidth = title.scrollWidth;

        const bufferThreshold = 0.9; // 90%

        if (titleWidth > containerWidth * bufferThreshold) {
            title.classList.add('scroll-title');
        } else {
            title.classList.remove('scroll-title');
        }
    });
});

// Current time indicator
function updateTime() {
    const now = new Date();

    const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    document.querySelector(".current-time-indicator").textContent = currentTime;
}
setInterval(updateTime, 1000);
