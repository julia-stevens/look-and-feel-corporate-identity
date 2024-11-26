// Hamburger navigatie in nav
const navHamburger = document.querySelector("nav button");

navHamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    const navMenu = document.querySelector("nav ul");
    const navButton = document.querySelector(".nav-button img");

    navMenu.classList.toggle("showMenu");
    navButton.classList.toggle("showMenu");
}

// Zenders menu bij nav
const buttonZenders = document.querySelector(".nav-zenders button");

buttonZenders.addEventListener("click", toggleZenders);

function toggleZenders() {
    const navZenders = document.querySelector(".nav-zenders");
    const buttonImgZenders = document.querySelector(".nav-zenders button img");

    navZenders.classList.toggle("showZenders");
    buttonImgZenders.classList.toggle("showZenders");
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

    const currentTime = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    
    document.querySelector(".current-time-indicator").textContent = currentTime; 
}

setInterval(updateTime, 1000);

// Tab-index 
document.addEventListener('DOMContentLoaded', function () {
    // Select the button
    const button = document.querySelector('.zenders-button');
    
    if (button) {
        // Select all menu items
        const menuItems = document.querySelectorAll('#zenders-menu li a');

        // Add click event listener to the button
        button.addEventListener('click', function() {
            menuItems.forEach(function(anchor) {
                // Change tabindex to 0 to make the links focusable
                anchor.setAttribute('tabindex', '0');
            });
        });
    } else {
        console.error("Button with class 'zenders-button' not found.");
    }
});
