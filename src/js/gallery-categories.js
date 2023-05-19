import { getTopBooks, getBooksCategory } from './api-books';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { modalOpen } from './modal-item-home';

const booksList = document.querySelector('.js-gallery-best-books');
const galleryTitle = document.querySelector('.gallery-title');

getTopBooks().then(data => {
  if (!data.length) {
    Notify.failure(
      'Sorry, there are no best sellers books. Please choose a category.'
    );
    return;
  }
  galleryTitle.insertAdjacentHTML('beforeend', createTitleMarcup());
  booksList.insertAdjacentHTML('beforeend', createBooklistMarcup(data));

  const galeryList = document.querySelectorAll('.book-cards');
  galeryList.forEach(element => {
    element.addEventListener('click', onBtnOpen);
  });
});

function createTitleMarcup() {
  return 'Best Sellers <span class="gallery-title-span">Books</span>';
}

function createBooklistMarcup(data) {
  const marcup = [];

  // Відображення необхідної кількості категорій  //

  data.forEach((element, i) => {
    const booksArr = data[i].books;
    const bookCards = [];

    booksArr.forEach(({ _id, book_image, title, author }) => {
      //  Перевірка чи пришла обложка книги з бекенду і заміна її на заглушку в разі необхідності //
      if (!book_image) {
        book_image = '../images/book_plug.jpg';
      }

      const bookCardsMarcup = `<li id="${_id}" class = "book-cards">
              <div class = "card-container">
                <img src="${book_image}" alt="${title}" loading="lazy">
                  <div class="port-overlay">
                    <p>quick view</p>
                  </div>
              </div>
                <h2>${title}</h2>
                <p>${author}</p>
                </li>`;

      bookCards.push(bookCardsMarcup);
    });

    const btnSeeMore = `<button type="button" id="${data[i].list_name}" class="book-class-more">
        see more
      </button>`;

    marcup.push(`<li class = "category-block">
            <p class = "gallery-category-title">${data[i].list_name}</p>
            <ul class = "category-block-list">${bookCards.join('')}</ul>
            ${btnSeeMore}
            </li>`);
  });

  return marcup.join('');
}

function onBtnOpen(evt) {
  const bookId = evt.currentTarget.id;
  modalOpen(bookId);
}

//=================== ВІДОБРАЖЕННЯ КНИГ ПО КАТЕГОРІЯМ =============================

const eventLister = document.querySelector('.books-gallery');
let categoryValue = 'ALL CATEGORIES';

// Рендер списку книг по категорії при кліку на "see more" кнопці
eventLister.addEventListener('click', onMoreBtnClick);
function onMoreBtnClick(e) {
  if (e.target.localName === 'button') {
    categoryValue = e.target.getAttribute('id');

    addCardsByCategory();
    changeColorTitle(categoryValue);
  }
}

// Рендер карток книжок по категоріям
function addCardsByCategory() {
  getBooksCategory(categoryValue).then(booksArr => {
    if (!booksArr.length) {
      Notify.failure(
        `Sorry, there are no ${categoryValue} books. Please choose another category.`
      );
      return;
    }

    galleryTitle.innerHTML = categoryValue;
    booksList.innerHTML = createMoreBooks(booksArr);

    addColorToTitle();
    addModal();
  });
}

// Створення карток книжок по категоріям
function createMoreBooks(booksArr) {
  const bookCard = booksArr
    .map(({ _id, book_image, title, author }) => {
      //  Перевірка чи пришла обложка книги з бекенду і заміна її на заглушку в разі необхідності //
      if (!book_image) {
        book_image = '../images/book_plug.jpg';
      }

      const markup = `<li id="${_id}" class="books-gallery__card">
        <div class="card-container">
        <img class="books-gallery__card-img" src="${book_image}" alt="${title}" loading="lazy">
        <div class="port-overlay"><p>quick view</p></div>
        </div>
        <h2 class="books-gallery__card-title">${title}</h2>
        <p class="books-gallery__card-author">${author}</p>
        </li>`;

      return markup;
    })
    .join('');

  return bookCard;
}

// Додавання акцентного кольолру до заголовку з назвою категорії списку книг
function addColorToTitle() {
  const textgalleryTitle = galleryTitle.innerHTML;

  let wordsArray = categoryValue.split(' ');
  let lastWord = wordsArray.pop();
  let firstPart = wordsArray.join(' ');

  galleryTitle.innerHTML = `${firstPart} <span class="books-gallery__title-accent">${lastWord}</span>`;
}

function changeColorTitle(title) {
  const labelCategories = document.querySelectorAll('.filter__item');
  const activeElement = document.querySelector('.filter__item--active');

  activeElement.classList.remove('filter__item--active');
  const selectedElement = [...labelCategories].find(({ textContent }) => {
    return textContent === title;
  });
  console.log(selectedElement);
  selectedElement.classList.add('filter__item--active');
}

// Відкриття модального вікна при кліку по картці
function addModal() {
  const booksGalleryCards = document.querySelectorAll('.books-gallery__card');

  booksGalleryCards.forEach(card => {
    card.addEventListener('click', onBtnOpen);
  });
}
