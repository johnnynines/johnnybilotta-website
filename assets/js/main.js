console.log("main js is online");

// const openNavButton = document.querySelector('.mobile-nav-trigger');
// const closeNavButton = document.querySelector('.close-overlay-trigger');
// const mobileNav = document.querySelector('#mobileMenu');

// openNavButton.addEventListener('click', function() {
//     mobileNav.classList.remove('hidden');
// });

// closeNavButton.addEventListener('click', function() {
//     mobileNav.classList.add('hidden');
// });

const body = document.body;
const modal = document.getElementById('modalContact');
const modalTrigger = document.getElementById('modalTrigger');
const modalClose = document.getElementById('modalClose');
const messageSuccess = document.getElementById('messageSuccess');
const messageError = document.getElementById('messageError');


modalTrigger.addEventListener('click', () => {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');
    body.style.overflow = 'hidden';
    body.style.top = `-${window.scrollY}px`;
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0', 'pointer-events-none');
});

// Initialize the Highlight.js plugin
hljs.initHighlighting();

