console.log("main js is online");

const openNavButton = document.querySelector('.mobile-nav-trigger');
const closeNavButton = document.querySelector('.close-overlay-trigger');
const mobileNav = document.querySelector('#mobileMenu');

openNavButton.addEventListener('click', function() {
    mobileNav.classList.remove('hidden');
});

closeNavButton.addEventListener('click', function() {
    mobileNav.classList.add('hidden');
});

