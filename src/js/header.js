const openMenuBtnHeader = document.querySelector('.menu-burger-open');
const closeMenuBtnHeader = document.querySelector('.header-menu-mob-close');
const mobileMenuContainerHeader = document.querySelector(
  '.mobile-menu-container'
);
const body = document.body;

openMenuBtnHeader.addEventListener('click', function () {
  mobileMenuContainerHeader.classList.toggle('is-open');
  openMenuBtnHeader.firstElementChild.classList.toggle('burger-toggle-hidden');
  openMenuBtnHeader.lastElementChild.classList.toggle('burger-toggle-hidden');
  body.classList.add('lock');
});

closeMenuBtnHeader.addEventListener('click', function () {
  mobileMenuContainerHeader.classList.toggle('is-open');
  openMenuBtnHeader.firstElementChild.classList.toggle('burger-toggle-hidden');
  openMenuBtnHeader.lastElementChild.classList.toggle('burger-toggle-hidden');
  body.classList.remove('lock');
});
