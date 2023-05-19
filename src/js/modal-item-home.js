import { getBooksId } from './api-books';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  user,
  setUserInLS,
  getUserFromLS,
  isUserSet,
  updateUserDatabase,
} from './auth-modal';
import { loadLS, saveLS } from './storage';

const modal = document.querySelector('.backdrop');

const shopUserBooks = JSON.parse(localStorage.getItem('user-shop-list')) || [];

user = getUserFromLS();

function checkAutorization() {
  if (isUserSet()) {
    user = getUserFromLS();
  }
}

let userBooks;
if (loadLS('books')) {
  userBooks = loadLS('books');
} else userBooks = [];

let idBook;
let bookData;
let btnContainer;
let flag = true;

function modalOpen(id) {
  getBooksId(id).then(data => {
    //   Перевірка чи не пришли пусті дані //
    if (!data) {
      Notify.failure('Sorry, an error has occurred');
      return;
    }
    idBook = id;
    bookData = data;
    const modalBody = document.querySelector('.js-modal-body');
    modalBody.innerHTML = '';
    modalBody.insertAdjacentHTML('beforeend', createModalMarcup(data));
    const btnMarkup = '<div class = "js-btn-container"></div>';
    if (flag) {
      modalBody.insertAdjacentHTML('afterend', btnMarkup);
    }
    btnContainer = document.querySelector('.js-btn-container');
    checkAutorization();
    btnContainer.innerHTML = createButtonMarcup(user, id);
    openModalWindow();

    const buttonAdd = document.querySelector('.modal__button');
    if (buttonAdd) {
      buttonAdd.addEventListener('click', onButtonAddClick);
    }

    const buttonRemove = document.querySelector('.modal__button-remove');
    if (buttonRemove) {
      buttonRemove.addEventListener('click', onButtonRemoveClick);
    }

    const btnClose = document.querySelector('.js-close');
    btnClose.addEventListener('click', closeModalWindow);
  });
}

function createModalMarcup({
  author,
  book_image,
  title,
  description,
  buy_links,
}) {
  if (!book_image) {
    book_image = '../images/book_plug.jpg';
  }

  if (!description) {
    description = 'There is no description';
  }

  let amazonLink;
  let appleBooksLink;
  let bookshopLink;

  buy_links.forEach(element => {
    if (element.name === 'Amazon') {
      amazonLink = element.url;
    }

    if (element.name === 'Apple Books') {
      appleBooksLink = element.url;
    }

    if (element.name === 'Bookshop') {
      bookshopLink = element.url;
    }
  });
  return `<div class="modal__body">
  <img src="${book_image}" alt="${title}" class="modal__img">
  <div class="modal__box">
  <h2 class="modal__title">${title}</h2>
  <h3 class="modal__subtitle">${author}</h3>
  <p class="modal__text">${description}</p>
  <ul class="modal__social-list">
  <li class="modal__social-amazon">
  <a class="modal__link-social-amazon" href="${amazonLink}" target="_blank"></a>
  </li>
  <li class="modal__social-open-book">
  <a
  class="modal__link-social-open-book"
  href="${appleBooksLink}"
  target="_blank"
  ></a>
  </li>
  <li class="modal__social-book-shop">
  <a
  class="modal__link-social-book-shop"
  href="${bookshopLink}"
  target="_blank"
  ></a>
  </li>
  </ul>
  </div>
  </div>`;
}

function createButtonMarcup({ booksArr } = user, id) {
  if (!isUserSet()) {
    return `<p class="modal__congratulation">
    Sign in to add the book to your shopping list.
        </p>`;
  }

  if (userBooks.indexOf(id) === -1) {
    return `<button class="modal__button">add to shopping list</button>`;
  }

  return `<button class="modal__button-remove">
  remove from the shopping list
  </button>`;
}

function openModalWindow() {
  modal.classList.add('is-block');
  document.body.classList.add('disable-scroll');

  document.addEventListener('keydown', onEscKeyPress);

  const backdrop = document.querySelector('.backdrop');
  backdrop.addEventListener('click', onBackdropClick);

  function onBackdropClick(evt) {
    if (evt.target.classList.contains('backdrop')) {
      closeModalWindow();
      backdrop.removeEventListener('click', onBackdropClick);
    }
    return;
  }
}

function onEscKeyPress(evt) {
  if (evt.code !== 'Escape') {
    return;
  }

  closeModalWindow();
  document.removeEventListener('keydown', onEscKeyPress);
}

function closeModalWindow() {
  flag = false;
  modal.classList.remove('is-block');
  document.body.classList.remove('disable-scroll');
}

function onButtonAddClick() {
  user.booksArr.push(idBook);
  setUserInLS(user);
  updateUserDatabase(user);

  userBooks.push(idBook);
  saveLS('books', userBooks);
  shopUserBooks.push(bookData);
  localStorage.setItem('user-shop-list', JSON.stringify(shopUserBooks));

  btnContainer.innerHTML = createremoveMarcup();
  const buttonRemove = document.querySelector('.modal__button-remove');
  buttonRemove.addEventListener('click', onButtonRemoveClick);
}

function onButtonRemoveClick() {
  user.booksArr.splice(user.booksArr.indexOf(idBook), 1);
  setUserInLS(user);
  updateUserDatabase(user);

  userBooks.splice(user.booksArr.indexOf(idBook), 1);
  saveLS('books', userBooks);

  btnContainer.innerHTML = createAddMarcup();
  const btnAdd = document.querySelector('.modal__button');
  btnAdd.addEventListener('click', onButtonAddClick);
}

function createremoveMarcup() {
  return `<div class="button__wrapper-remove">
  <button class="modal__button-remove">
  remove from the shopping list
  </button>
  </div>
<p class="modal__congratulation">
  Сongratulations! You have added the book to the shopping list. To
  delete, press the button “Remove from the shopping list”.
  </p>`;
}

function createAddMarcup() {
  return `<div class="button__wrapper-remove">
  <button class="modal__button">add to shopping list</button>
  </div>
  <p class="modal__congratulation">
  Сongratulations! You have removed the book from the shopping list. To
  add, press the button “Add to shopping list”.
  </p>`;
}

export { modalOpen };
