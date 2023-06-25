import {
  setUserInLS,
  getUserFromLS,
  updateUserDatabase,
} from './auth-modal.js';

import amazonImage1 from '../images/png/amazon-shop-1x.png';
import amazonImage2 from '../images/png/amazon-shop-2x.png';
import appleImage1 from '../images/png/apple-shop-1x.png';
import appleImage2 from '../images/png/apple-shop-2x.png';
import bookshopImage1 from '../images/png/bookshop-1x.png';
import bookshopImage2 from '../images/png/bookshop-2x.png';

const refs = {
  navlinks: document.querySelectorAll('.active'),
  shoppingListEl: document.querySelector('.shopping__cards'),
  notificationContainerEl: document.querySelector('.shopping__storage'),
  shoppingHeadingEl: document.querySelector('.shopping__heading'),
  jsGuard: document.querySelector('.js-guard'),
  logoTrashPath: new URL(
    '../images/svg-sprite/symbol-defs.svg',
    import.meta.url
  ),
};

let currUser = localStorage.getItem('user') ? getUserFromLS() : [];
let bookList = currUser.booksArr;
let userShoplist = currUser.bookDataArr;

let currentPage = 1;
let itemsPerPage = 5;
// let bookCount = bookList.length;

renderShoppingList(userShoplist, currentPage);

// let optionsObserver = {
//   root: null,
//   rootMargin: '600px',
//   threshold: 1.0,
// };
// let observer = new IntersectionObserver(onLoad, optionsObserver);
// function onLoad(entries) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       currentPage++;
//       renderShoppingList(userShoplist, currentPage);
//     }
//   });
// }

function renderShoppingList(data, page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let currentData = data.slice(startIndex, endIndex);

  if (currentData.length) {
    removeEmptyNotificationContainer();
    const markup = userShoplist
      .map(
        ({
          _id,
          book_image,
          author,
          book_image_width,
          book_image_height,
          title,
          list_name,
          description,
          buy_links: [amazon, apple, , , bookshop],
        }) => {
          return `<li class="shopping__card" data-id="${_id}">
  <div class="shopping__block">
    <div>
      <div class="shopping__thumb">
        <img src="${book_image}" alt="${list_name}" class="shopping__book-img" width="${book_image_width}" height="${book_image_height}"/>
      </div>
      <p class="shopping__book-author">${author}</p>
    </div>
    <div class="shopping__wrap">
      <h2 class="shopping__title">${title}</h2>
      <p class="shopping__category">${cutNameCategory(list_name)}</p>
      <p class="shopping__book-description--tablet">${description}</p>
      <ul class="shopping__shops">
        <li class="shopping__shop">
          <a href="${
            amazon.url
          }" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon-book site">
            <img srcset="${amazonImage1} 1x, ${amazonImage2} 2x" src="${amazonImage1}" alt="${
            amazon.name
          }" class="shopping__shop-img" width="48" height="15"/>
          </a>
        </li>
        <li class="shopping__shop">
          <a href="${
            apple.url
          }" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-book site">
            <img srcset="${appleImage1} 1x, ${appleImage2} 2x" src="${appleImage1}" alt="${
            apple.name
          }" class="shopping__shop-img" width="28" height="27"/>
          </a>
        </li>
        <li class="shopping__shop">
          <a href="${
            bookshop.url
          }" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Book-shop site">
            <img srcset="${bookshopImage1} 1x, ${bookshopImage2} 2x" src="${bookshopImage1}" alt="${
            bookshop.name
          }" class="shopping__shop-img" width="32" height="30"/>
          </a>
        </li>
      </ul>
      <div class="shopping__wrap-shops--tablet">
      <p class="shopping__book-author--tablet">${author}</p>
      <ul class="shopping__shops--tablet">
        <li class="shopping__shop">
          <a href="${
            amazon.url
          }" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon-book site">
            <img srcset="${amazonImage1} 1x, ${amazonImage2} 2x" src="${amazonImage1}" alt="${
            amazon.name
          }" class="shopping__shop-img" width="48" height="15"/>
          </a>
        </li>
        <li class="shopping__shop">
          <a href="${
            apple.url
          }" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-book site">
            <img srcset="${appleImage1} 1x, ${appleImage2} 2x" src="${appleImage1}" alt="${
            apple.name
          }" class="shopping__shop-img" width="28" height="27"/>
          </a>
        </li>
        <li class="shopping__shop">
          <a href="${
            bookshop.url
          }" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Book-shop site">
            <img srcset="${bookshopImage1} 1x, ${bookshopImage2} 2x" src="${bookshopImage1}" alt="${
            bookshop.name
          }" class="shopping__shop-img" width="32" height="30"/>
          </a>
        </li>
      </ul>
      </div>
      </div>
  </div>
  <button type="button" class="shopping__btn" aria-label="Delete the book from shopping list" data-id="${_id}">
    <svg class="shopping__btn-icon" width="18" height="18">
      <use href="${refs.logoTrashPath}#icon-trash"></use>
    </svg>
  </button>
  <p class="shopping__book-description">${description}</p>
</li>`;
        }
      )
      .join('');
    refs.shoppingListEl.innerHTML = markup;
    refs.shoppingListEl.addEventListener('click', onTrashClick);
    // observer.observe(refs.jsGuard);
    // if (currentPage === Math.ceil(bookCount / itemsPerPage)) {
    //   observer.unobserve(refs.jsGuard);
    // }
  } else {
    pasteEmptyNotificationContainer();
  }
}

function pasteEmptyNotificationContainer() {
  refs.shoppingListEl.innerHTML = '';
  refs.notificationContainerEl.classList.add('empty-js');
  refs.shoppingHeadingEl.style.marginBottom = '140px';
}

function removeEmptyNotificationContainer() {
  refs.notificationContainerEl.classList.remove('empty-js');
  refs.shoppingHeadingEl.style.marginBottom = '';
  removeEventListener('click', onTrashClick);
}

function cutNameCategory(name) {
  if (window.innerWidth <= 768) {
    if (name.length > 20) {
      return name.substring(0, 20) + '...';
    }
    return name;
  }
  return name;
}

function onTrashClick(e) {
  const isButton = e.target
    .closest('.shopping__btn')
    .classList.contains('shopping__btn');
  if (!isButton) {
    return;
  }

  // const bookEl = target.closest('.shopping__btn').closest('.shopping__card');
  const idToDelete = e.target.closest('.shopping__btn').dataset.id.trim();
  const removedElIndexFromStorage = bookList.findIndex(
    item => item === idToDelete
  );

  bookList.splice(removedElIndexFromStorage, 1);
  userShoplist.splice(removedElIndexFromStorage, 1);
  // let currUser = localStorage.getItem('user') ? getUserFromLS() : [];
  currUser.booksArr = bookList;
  currUser.bookDataArr = userShoplist;
  setUserInLS(currUser);
  updateUserDatabase(currUser);

  // bookCount = bookList.length;
  renderShoppingList(userShoplist, currentPage);
}
