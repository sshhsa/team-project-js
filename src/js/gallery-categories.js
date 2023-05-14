import { getTopBooks, getCategoryList, getBooksCategory } from './api-books';
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

  for (let i = 0; i < data.length; i += 1) {
    const booksArr = data[i].books;
    const bookCards = [];

    booksArr.forEach(({ _id, book_image, title, author }) => {
      // Перевірка кількості символів у назві книги і обрізка до необхідного значення //
      const numberOfSymbol = 16;
      if (title.length > numberOfSymbol) {
        title = title.slice(0, numberOfSymbol) + '...';
      }

      //  Перевірка чи пришла обложка книги з бекенду і заміна її на заглушку в разі необхідності //
      if (!book_image) {
        book_image = '../images/book_plug.jpg';
      }

      const bookCardsMarcup = `<li id="${_id}" class = "book-cards">
              <div class = "card-container">
                <img src="${book_image}" alt="${title}">
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
  }

  return marcup.join('');
}

function onBtnOpen(evt) {
  const bookId = evt.currentTarget.id;
  modalOpen(bookId);
}

/////=================== ВІДОБРАЖЕННЯ КНИГ ПО КАТЕГОРІЯМ =============================////

let categoryValue = 'ALL CATEGORIES';
const eventLister = document.querySelector('.books-gallery');

//// Рендер списку книг по категорії при події на "see more" кнопці
eventLister.addEventListener('click', onMoreBtnClick);
function onMoreBtnClick(e) {
  if (e.target.localName === 'button') {
    categoryValue = e.target.getAttribute('id');

    addCardsByCategory();
  }
}

//// Рендер карток книжок по категоріям
function addCardsByCategory() {
  getBooksCategory(categoryValue).then(booksArr => {
    galleryTitle.innerHTML = categoryValue;
    booksList.innerHTML = createMoreBooks(booksArr);

    addColorToTitle();
  });
}

//// Створення карток книжок по категоріям
function createMoreBooks(booksArr) {
  const bookCard = booksArr
    .map(({ _id, book_image, title, author }) => {
      //  Перевірка чи пришла обложка книги з бекенду і заміна її на заглушку в разі необхідності //
      if (!book_image) {
        book_image = '../images/book_plug.jpg';
      }

      const markup = `<li id="${_id}" class="books-gallery__card">
        <img class="books-gallery__card-img"src="${book_image}" alt="${title}" width="200">
        <h2 class="books-gallery__card-title">${title}</h2>
        <p class="books-gallery__card-author">${author}</p>
        </li>`;

      return markup;
    })
    .join('');

  return bookCard;
}

//// Додавання акцентного кольолру до заголовку з назвою категорії списку книг
function addColorToTitle() {
  const textgalleryTitle = galleryTitle.innerHTML;

  let wordsArray = categoryValue.split(' ');
  let lastWord = wordsArray.pop();
  let firstPart = wordsArray.join(' ');

  galleryTitle.innerHTML = `${firstPart} <span class="books-gallery__title-accent">${lastWord}</span>`;
}
