const openMenuBtn = document.querySelector('.menu-burger-open');
const closeMenuBtn = document.querySelector('.mobile-menu-close-button');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');


openMenuBtn.addEventListener('click', () => {
  mobileMenuContainer.classList.add('is-open');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenuContainer.classList.remove('is-open');
});

