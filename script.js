// JavaScript code to toggle the mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.center ul');

let menuOpen = false;

menuToggle.addEventListener('click', () => {
    if (!menuOpen) {
        mobileMenu.style.display = 'block';
        menuOpen = true;
    } else {
        mobileMenu.style.display = 'none';
        menuOpen = false;
    }
});
