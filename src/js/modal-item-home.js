export {modalOpen, modalOpenRemove};

import { getBooksId } from './api-books';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const modal = document.querySelector('.backdrop');

//================================МОДАЛЬНОГО ВІКНО=============================================

function modalOpen (id) {
  getBooksId(id).then(data => { 

    //   Перевірка чи не пришли пусті дані //
    if (!data) {
      Notify.failure(
        'Sorry, an error has occurred'
      );
      return;
    }
    const modalBody = document.querySelector('.js-modal-body');
    modalBody.innerHTML = "";
    modalBody.insertAdjacentHTML('beforeend', createModalMarcup(data));
    openModalWindow();
    const btnClose = document.querySelector('.js-close');
    btnClose.addEventListener('click', closeModalWindow);
  });
}

function createModalMarcup({author, book_image, title, description, buy_links}) {
  if (!book_image) {
    book_image = '../images/book_plug.jpg';
  }

  if (!description) {
    description = 'There is no description';
  }

  let amazonLink;
  let appleBooksLink;
  let bookshopLink

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
    </div>`
}

function openModalWindow() {
  modal.classList.add('is-block');
}

function closeModalWindow() {
  modal.classList.remove('is-block');
}

//================================МОДАЛЬНОГО ВІКНО REMOVE=============================================

const modalRemove = document.querySelector('.backdrop-remove');

function modalOpenRemove (id) {
  getBooksId(id).then(data => { 

    //   Перевірка чи не пришли пусті дані //
    if (!data) {
      Notify.failure(
        'Sorry, an error has occurred'
      );
      return;
    }
    const modalBodyRemove = document.querySelector('.js-modal-body-remove');
    modalBodyRemove.innerHTML = "";
    modalBodyRemove.insertAdjacentHTML('beforeend', createModalMarcup(data));
    openModalWindowRemove();
    const btnCloseRemove = document.querySelector('.js-close-remove');
    btnCloseRemove.addEventListener('click', closeModalWindowRemove);
  });
}


const btnOpenRemove = document.querySelector('.js-open-remove');
btnOpenRemove.addEventListener('click', onBtnOpenRemove);
function onBtnOpenRemove() {
  modalOpenRemove('643282b2e85766588626a118');
}

function openModalWindowRemove() {
  modalRemove.classList.add('is-block');
}

function closeModalWindowRemove() {
  modalRemove.classList.remove('is-block');
}
