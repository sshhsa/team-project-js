const openMenuBtn = document.querySelector('.menu-burger-open');
const closeMenuBtn = document.querySelector('.mobile-menu-close-button');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const body = document.body;

openMenuBtn.addEventListener('click', function() {
  mobileMenuContainer.classList.toggle('is-open');
  openMenuBtn.firstElementChild.classList.toggle('burger-toggle-hidden');
  openMenuBtn.lastElementChild.classList.toggle('burger-toggle-hidden');
  body.classList.add('lock');
});

closeMenuBtn.addEventListener('click', function() {
  mobileMenuContainer.classList.toggle('is-open');
  openMenuBtn.firstElementChild.classList.toggle('burger-toggle-hidden');
  openMenuBtn.lastElementChild.classList.toggle('burger-toggle-hidden');
  body.classList.remove('lock');
});