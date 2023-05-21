import {
  user,
  createUser,
  signInUser,
  signOutUser,
  setUserInLS,
  isUserSet,
  getUserFromLS,
} from './auth-modal';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Notify Options
const notifyOptions = {
  fontFamily: 'DM Sans',
  zindex: 1010,
  clickToClose: true,
  position: 'center-top',
};

// Открытие закрытие мобильного меню
const toggleMenuBtnHeader = document.querySelector('.js-open-menu');
const mobileMenuContainerHeader = document.querySelector(
  '.mobile-menu-container'
);
toggleMenuBtnHeader.addEventListener('click', function () {
  mobileMenuContainerHeader.classList.toggle('is-open');
  toggleMenuBtnHeader.firstElementChild.classList.toggle(
    'burger-toggle-hidden'
  );
  toggleMenuBtnHeader.lastElementChild.classList.toggle('burger-toggle-hidden');
  if (mobileMenuContainerHeader.classList.contains('is-open')) {
    document.body.style.overflow = 'hidden';
  } else {
    {
      document.body.style.overflow = '';
    }
  }
});

// список елементів меню, котрі з'являються під час авторизації
// list-elements of the menu, whose appear during authorization
const toggleHeaderMenuAuth = document.querySelector('.page-nav'); // header menu
const togglemobileMenuAuth = document.querySelector('.js-mobile-menu-logedin'); // mobile menu items
const toggleHeaderSignUp = document.querySelector('.js-header-signup'); // header signUp btn
const togglemobileSignUp = document.querySelector('.js-mobile-signup'); // header signUp btn
const signOutHeaderBtn = document.querySelector('.js-header-logout'); // header logOut btn
const signOutMobile = document.querySelector('.js-mobile-logout'); // mobile signOut btn
const headerInfoBtn = document.querySelector('.js-header-info'); // mobile signOut btn

const mobileName = document.querySelector('.js-mob-name'); // mobile user name
const headerName = document.querySelector('.js-header-name'); // header user name
const navItems = document.querySelector('.header-list');
const mobNavItems = document.querySelector('.nav-list');
signOutHeaderBtn.addEventListener('click', onClickHeaderSignOutUser);
signOutMobile.addEventListener('click', onClickSignOutUser);
headerInfoBtn.addEventListener('click', onClickInfoButton);
// перемикання видимості за уомвами
function onClickInfoButton() {
  headerInfoBtn.classList.toggle('is-visible');
  headerInfoBtn.nextElementSibling.classList.toggle('is-visible');
}
function menusToggleOnAuth() {
  if (document.location.pathname.includes('shop-list')) {
    navItems.firstElementChild.firstElementChild.classList.remove('is-active');
    navItems.lastElementChild.firstElementChild.classList.add('is-active');
    mobNavItems.firstElementChild.classList.remove('nav-active');
    mobNavItems.lastElementChild.classList.add('nav-active');
  }
  if (document.location.pathname.includes('index')) {
    navItems.firstElementChild.firstElementChild.classList.add('is-active');
    navItems.lastElementChild.firstElementChild.classList.remove('is-active');
    mobNavItems.firstElementChild.classList.add('nav-active');
    mobNavItems.lastElementChild.classList.remove('nav-active');
  }
  if (isUserSet()) {
    toggleHeaderMenuAuth.classList.toggle('is-visible');
    togglemobileMenuAuth.classList.toggle('is-visible');
    headerInfoBtn.previousElementSibling.classList.toggle('is-visible');
    headerInfoBtn.classList.toggle('is-visible');
    headerInfoBtn.nextElementSibling.classList.toggle('is-visible');
    signOutHeaderBtn.classList.toggle('is-visible');
    togglemobileSignUp.classList.toggle('is-visible');
    const { name } = getUserFromLS();
    mobileName.textContent = name;
    headerName.textContent = name;
  }
}
// ініціалізація DOMа
// initialization of the DOM
menusToggleOnAuth();
if (!localStorage.getItem('user')) {
  setUserInLS(user);
}

//==================================================================
// Функції авторизації користувача || user`s functions for authorization
//==================================================================

// Handle Authentication form Modal window
const authForm = document.querySelector('.js-auth-form');
const inputName = document.querySelector('.auth-name');
const buttonChooseForm = document.querySelector('.button-form-choose');

authForm.addEventListener('submit', onSubmitAuthForm);
buttonChooseForm.addEventListener('click', onClickButtonChooseForm);

// Choosing SignUp or SignIn method autorization
function onClickButtonChooseForm(event) {
  if (
    !event.target.classList.contains('auth-link') ||
    event.target.classList.contains('button-selected')
  ) {
    return;
  }

  if (event.target.classList.contains('signin')) {
    inputName.style.display = 'none';
    authForm.lastElementChild.textContent = 'sign in';
    event.target.parentElement.firstElementChild.classList.toggle(
      'button-selected'
    );
    event.target.parentElement.lastElementChild.classList.toggle(
      'button-selected'
    );
    return;
  }
  event.target.parentElement.firstElementChild.classList.toggle(
    'button-selected'
  );
  event.target.parentElement.lastElementChild.classList.toggle(
    'button-selected'
  );
  inputName.style.display = 'inline-block';
  authForm.lastElementChild.textContent = 'sign up';
}

// Submit authentication form
function onSubmitAuthForm(event) {
  event.preventDefault();
  const {
    elements: { name, email, password },
  } = event.currentTarget;
  user.name = name.value;
  user.email = email.value;
  if (inputName.style.display === 'none') {
    // Check for empty fields
    if (!user.email.trim() || !user.password.trim) {
      Notify.failure(`Please complete all fields!`, notifyOptions);
    }
    // Sign in
    signInUser(user, password.value);
    // Reset authentication form
    authForm.reset();
    backDropClosing();
    return;
  }
  // Check for empty fields
  if (!user.name.trim() || !user.email.trim || !user.password.trim) {
    Notify.failure(`Please complete all fields!`, notifyOptions);
    return;
  }
  // Sign up
  createUser(user, password.value);
  // Reset authentication form
  authForm.reset();
  backDropClosing();
}
// LogOut function
function onClickSignOutUser() {
  signOutUser(user);
  authForm.reset();
}
// LogOUT from header desktop button
function onClickHeaderSignOutUser() {
  headerInfoBtn.classList.toggle('is-visible');
  headerInfoBtn.nextElementSibling.classList.toggle('is-visible');
  signOutUser(user);
  authForm.reset();

  setTimeout(() => {
    window.location.href = './index.html';
  }, 500);
}

// ==================================================================
// Открытие и закрытие модального окна авторизации.
// Закрытие по клику на бэкдропе, на "крестике", нажатию "ESC"
// и отправке формы.
// ==================================================================
const refs = {
  backDropAuth: document.querySelector('.js-overlay-modal'),
  authModalClose: document.querySelector('.js-modal-close'),
};

togglemobileSignUp.addEventListener('click', onClickOpenAuthModal);
toggleHeaderSignUp.addEventListener('click', onClickOpenAuthModal);

refs.authModalClose.addEventListener('click', onCrossAuthClose);

function onClickOpenAuthModal() {
  document.body.style.position = 'fixed';
  refs.backDropAuth.classList.toggle('is-hidden');
  refs.backDropAuth.addEventListener('click', onBackDropClickClose);
  document.addEventListener('keydown', exitViaEsc);
}
function onCrossAuthClose() {
  backDropClosing();
}
function onBackDropClickClose(event) {
  if (event.target.classList.contains('js-overlay-modal')) {
    backDropClosing();
  }
}
function exitViaEsc(event) {
  if (event.key === 'Escape') {
    backDropClosing();
  }
}
function backDropClosing() {
  document.body.style.position = '';
  refs.backDropAuth.classList.toggle('is-hidden');
  refs.backDropAuth.removeEventListener('click', onBackDropClickClose);
  document.removeEventListener('keydown', exitViaEsc);
  // Reseting Authentication form to SignUp state
  buttonChooseForm.firstElementChild.classList.add('button-selected');
  buttonChooseForm.lastElementChild.classList.remove('button-selected');
  inputName.style.display = 'inline-block';
  authForm.lastElementChild.textContent = 'sign up';
}

export { menusToggleOnAuth };
