import {
  setUserInLS,
  getUserFromLS,
  isUserSet,
  updateUserDatabase,
} from './auth-modal.js';
import { getBooksId } from './api-books.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const modal = document.querySelector('.backdrop');

let currUser = localStorage.getItem('user') ? getUserFromLS() : [];

let idBook;
let bookData;
let btnContainer;
let flag = true;

function modalOpen(id) {
  currUser = localStorage.getItem('user') ? getUserFromLS() : [];
  getBooksId(id).then(data => {
    if (!data) {
      Notify.failure('Sorry, an error has occurred');
      return;
    }
    idBook = id;
    bookData = data;
    const modalBody = document.querySelector('.js-modal-body');
    modalBody.innerHTML = '';
    modalBody.insertAdjacentHTML('beforeend', createModalMarcup(data));
    const btnMarcup = '<div class = "js-btn-container"></div>';
    if (flag) {
      modalBody.insertAdjacentHTML('afterend', btnMarcup);
    }
    btnContainer = document.querySelector('.js-btn-container');
    btnContainer.innerHTML = createButtonMarcup(id);
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

function createButtonMarcup(id) {
  if (!isUserSet()) {
    return `<p class="modal__congratulation">
            Sign in to add the book to your shopping list.
            </p>`;
  }

  if (currUser.booksArr.indexOf(id) === -1) {
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
  currUser.booksArr.push(idBook);
  currUser.bookDataArr.push(bookData);
  setUserInLS(currUser);
  updateUserDatabase(currUser);

  btnContainer.innerHTML = createremoveMarcup();
  const buttonRemove = document.querySelector('.modal__button-remove');
  buttonRemove.addEventListener('click', onButtonRemoveClick);
}

function onButtonRemoveClick() {
  currUser.booksArr.splice(currUser.booksArr.indexOf(idBook), 1);
  currUser.bookDataArr.splice(currUser.bookDataArr.indexOf(bookData), 1);
  setUserInLS(currUser);
  updateUserDatabase(currUser);

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

const modalWindow = document.querySelector('.modal-window');
const modalBody = document.querySelector('.modal__body');

function openModal() {
  modalWindow.classList.add('is-block');
  modalBody.classList.add('modal__body-scrollable');
  document.body.classList.add('disable-scroll');
}

function closeModal() {
  modalWindow.classList.remove('is-block');
  modalBody.classList.remove('modal__body-scrollable');
  document.body.classList.remove('disable-scroll');
}

// Виклик функцій для відкриття та закриття модального вікна
openModal(); // Викликайте цю функцію при відкритті модального вікна
closeModal(); // Викликайте цю функцію при закритті модального вікна

export { modalOpen };
