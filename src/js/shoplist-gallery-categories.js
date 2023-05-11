// const books =
//   localStorage.getItem('shopping-list') === null
//     ? []
//     : JSON.parse(localStorage.getItem('shopping-list'));


// import addToLocalStorage from './add-to-shopping-list';
// import removeFromLocalStorage from './remove-from-shopping-list';
// import { paginationBtnEl } from '../js/shopping-list__pagination';

import spriteSvgEls from '../images/svg-sprite/symbol-defs.svg';

const paginationBtnEl = document.querySelector('.btn-pagination__list');
const numericBtnEl = document.querySelector('.btn-pagination__numeric-list');
const liofNumbersEl = document.querySelector('.btn-paggination__numbers');


const countPages = Math.ceil(books.length / 3);
let currentPage = 1;

toAddCurrentClass = num => {
  const numberedNum = Number(num);
  if (num === '...') {
    return;
  }

  if (numberedNum === currentPage) {
    return 'btn-current';
  }
};

const mobileRendering = array => {
  if (array.length === 2) {
    return `<ul class="btn-pagination__numeric-list">
    <li><button class="btn-pagination__numeric ${toAddCurrentClass(array[0])}">
      <span class="text-numeric">${array[0]}</span>
    </button></li>
    <li><button class="btn-pagination__numeric ${toAddCurrentClass(array[1])}">
      <span class="text-numeric">${array[1]}</span>
    </button></li>
    </ul>`;
  }
  return `<ul class="btn-pagination__numeric-list">
    <li><button class="btn-pagination__numeric btn-current ${toAddCurrentClass(
      array[0]
    )}">
      <span class="text-numeric">${array[0]}</span>
    </button></li>
    <li><button class="btn-pagination__numeric ${toAddCurrentClass(array[1])}">
      <span class="text-numeric">${array[1]}</span>
    </button></li>
    <li><button class="btn-pagination__numeric ${toAddCurrentClass(array[2])}">
      <span class="text-numeric">${array[2]}</span>
    </button></li>
    </ul>`;
};

const tabletAndDesktopRendering = array => {
  if (array.length === 2) {
    return `<ul class="btn-pagination__numeric-list">
    <li><button class="btn-pagination__numeric ${toAddCurrentClass(array[0])}">
      <span class="text-numeric">${array[0]}</span>
    </button></li>
    <li><button class="btn-pagination__numeric ${toAddCurrentClass(array[1])}">
      <span class="text-numeric">${array[1]}</span>
    </button></li>
    </ul>`;
  }

  if (array.length === 3) {
    return `<ul class="btn-pagination__numeric-list">
    <li><button class="btn-pagination__numeric ${toAddCurrentClass(array[0])}">
      <span class="text-numeric">${array[0]}</span>
    </button></li>
    <li><button class="btn-pagination__numeric ${toAddCurrentClass(array[1])}">
      <span class="text-numeric">${array[1]}</span>
    </button></li>
    <li><button class="btn-pagination__numeric ${toAddCurrentClass(array[2])}">
      <span class="text-numeric">${array[2]}</span>
    </button></li>
    </ul>`;
  }

  //const indexOfCurrent = array.indexof(String(currentPage));// это чтобы както передать класс current
  return `<ul class="btn-pagination__numeric-list">
    <li><button class="btn-pagination__numeric ${toAddCurrentClass(array[0])}">
      <span class="text-numeric">${array[0]}</span>
    </button></li>
    <li><button class="btn-pagination__numeric ${toAddCurrentClass(array[1])}">
      <span class="text-numeric">${array[1]}</span>
    </button></li>
    <li><button class="btn-pagination__numeric ${toAddCurrentClass(array[2])}">
      <span class="text-numeric">${array[2]}</span>
    </button></li>
    <li><button class="btn-pagination__numeric ${toAddCurrentClass(array[3])}">
      <span class="text-numeric">${array[3]}</span>
    </button></li>
    </ul>`;
};

isAvailableBtn = (...args) => {
  if (currentPage - 2 > 0) {
    args[0].classList.add('btn-available');
  } else {
    args[0].classList.add('btn-not-available');
  }

  if (currentPage - 1 > 0) {
    args[1].classList.add('btn-available');
  } else {
    args[1].classList.add('btn-not-available');
  }

  if (currentPage + 1 <= countPages) {
    args[2].classList.add('btn-available');
  } else {
    args[2].classList.add('btn-not-available');
  }

  if (currentPage + 2 <= countPages) {
    args[3].classList.add('btn-available');
  } else {
    args[3].classList.add('btn-not-available');
  }

 
};



const renderNumbers = () => {
  if (window.screen.width >= 768) {
    return tabletAndDesktopRendering(numericBtnFunc(currentPage));
  }

  return mobileRendering(numericBtnFunc(currentPage));
};

const toAddListeners = (...args) => {
  const handleBtmClick = 

  args.map(button => button.addEventListener('click', event => {
    event.preventDefault();

    if (
      button.classList.contains('btn-pagination__double-arrow-left') &&
      button.classList.contains('btn-available')
    ) {
      currentPage -= 2;
      mainRenderingFunc(currentPage);
    }

    if (
      button.classList.contains('btn-pagination__arrow-left') &&
      button.classList.contains('btn-available')
    ) {
      currentPage -= 1;
      mainRenderingFunc(currentPage);
    }

    if (
      button.classList.contains('btn-pagination__arrow-right') &&
      button.classList.contains('btn-available')
    ) {
      currentPage += 1;
      mainRenderingFunc(currentPage);
    }

    if (
      button.classList.contains('btn-pagination__double-arrow-right') &&
      button.classList.contains('btn-available')
    ) {
      currentPage += 2;
      mainRenderingFunc(currentPage);
    }

    
  }));

  
};

 const renderPaginationBtn = () => {
  console.log('books.length in buttons', books.length);
  if (books.length === 0 || books.length <= 3) {
    return;
  }

  paginationBtnEl.innerHTML = `
    <li>
    <ul class="btn-pagination__arrow-list">
      <li>
        <button class="btn-pagination__double-arrow-left">
          <svg class="" width="32" height="32">
            <use href="${spriteSvgEls}#double-check-left"></use>
          </svg>
        </button>
      </li>
      <li>
        <button class="btn-pagination__arrow-left" style={fill: #fff;}>
          <svg class="" width="24" height="24">
            <use href="${spriteSvgEls}#icon-check-left"></use>
          </svg>
        </button>
      </li>
    </ul>
    </li>
    <li class="btn-paggination__numbers">
    ${renderNumbers()}
    </li>
    <li>
    <ul class="btn-pagination__arrow-list">
      <li>
        <button class="btn-pagination__arrow-right">
          <svg class="" width="24" height="24">
            <use href="${spriteSvgEls}#check-right"></use>
          </svg>
        </button>
      </li>
      <li>
        <button class="btn-pagination__double-arrow-right">
          <svg class="" width="32" height="32">
            <use href="${spriteSvgEls}#double-check-right"></use>
          </svg>
        </button>
      </li>
    </ul>
    </li>
    `;

  const arrowDoubleLeftBtnEl = document.querySelector(
    '.btn-pagination__double-arrow-left'
  );
  const arrowLeftBtnEl = document.querySelector('.btn-pagination__arrow-left');
  const arrowRightBtnEl = document.querySelector(
    '.btn-pagination__arrow-right'
  );
  const arrowDoubleRightBtnEl = document.querySelector(
    '.btn-pagination__double-arrow-right'
  );

  isAvailableBtn(
    arrowDoubleLeftBtnEl,
    arrowLeftBtnEl,
    arrowRightBtnEl,
    arrowDoubleRightBtnEl
  );

  toAddListeners(
    arrowDoubleLeftBtnEl,
    arrowLeftBtnEl,
    arrowRightBtnEl,
    arrowDoubleRightBtnEl
  );


};




const addBookBtnEl = document.querySelector('[data-add]');
const supUkrContainerEl = document.querySelector('.support-ukraine');
const ulEl = document.querySelector('.check');
export const shoppingListSectionEl = document.querySelector('.shopping-list__page');
const shoppingListContainer = shoppingListSectionEl.parentNode;




const getListObjectsOfPage = numberPage => {
  let indexOfStart = (numberPage * 3) - 3;
  const arrayOfBooks = [];

  for (let i = indexOfStart; i < indexOfStart + 3; i += 1){
    console.log('i: ', i);
    arrayOfBooks.push(books[i]);
  }

  return arrayOfBooks;
}

const getAppropriateMurkup = (book) => {
  if (window.screen.width < 768) {
    return murkupForMobile(book);
  }

  return murkupForTabketAndDesktop(book);
}

export const murkupShoppingList = numberPage => {
  const arrayOfMurkup = [];
  getListObjectsOfPage(numberPage).map(book => {

    arrayOfMurkup.push(getAppropriateMurkup(book))
  })


  return arrayOfMurkup.join('');

}

const checkCountOfPages = () => {
  return Math.ceil(books.length / 3);
};

export const mainRenderingFunc = () => {
  if (window.screen.width >= 1440) {
    supUkrContainerEl.innerHTML = `<h2 class="support-ukraine__title">
    <span class="support-title-container">
      Support Ukraine
      <svg class="logo-ukr" width="20" height="32">
        <use href="../images/svg-sprite.svg#ukraine-arms"></use>
      </svg>
    </span>
  </h2>
  <ul class="support-companies"></ul>
  <button type="button" class="support__load-more">
    <svg class="button__icon" width="64" height="64">
      <use href="../images/svg-sprite.svg#arrow-down-icon"></use>
    </svg>
  </button>`;
  }
  if (checkCountOfPages() === 0) {
    shoppingListSectionEl.insertAdjacentHTML(
      'beforeend',
      '<div class="empty-bookshelf"><p class="empty-bookshelf__text">This page is empty, add some books and proceed to order.</p><div class="empty-bookshelf__image"></div></div>'
    );
    const bookShelfImgEl = document.querySelector('.empty-bookshelf__image');
    bookShelfImgEl.classList.add('shopping-list__page-empty');

    return;
  }
  
  console.log('books.length', books.length);
  ulEl.innerHTML = murkupShoppingList(currentPage);
  renderPaginationBtn();
}

try {

  console.log('Let`s go');
  mainRenderingFunc();

} catch (error) {
  console.log(error);
}


