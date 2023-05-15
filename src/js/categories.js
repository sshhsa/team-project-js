import { getCategoryList, getBooksCategory } from './api-books';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const filterListEl = document.querySelector('.filter__list');
let varWithActiveValueFilter = document.querySelector('.filter__item--active');
const booksList = document.querySelector('.js-gallery-best-books');
const galleryTitle = document.querySelector('.gallery-title');

let varWithCurrentCategoryValue = 'ALL CATEGORIES';
const bookApi = getCategoryList();


getCategoryList()
// .then((response) => {
//     return response.json();
// })
.then((categorie) => {
    if (!categorie.length) {
        Notify.failure("Oops something going wrong.");
        return;
    }
    console.log(categorie);
    filterListEl.insertAdjacentHTML('beforeend', createMarkup(categorie));;
});
// .catch((error) => {
//     Notify.info(`Oops something going wrong`, notifyOptions);
//     filterListEl.innerHTML=`Oops something going wrong. Error 404`;
// });


function createMarkup (arr){
    return arr.map(value => `<li class="filter__item" data-mark-active="${value.list_name}">${value.list_name}</li>`).join('');
 }

filterListEl.addEventListener('click', event => {
    
    if (event.target.outerText.toLowerCase() === varWithCurrentCategoryValue.toLowerCase()) {
      return;
    }
  
    varWithCurrentCategoryValue = event.target.outerText;
  
    addGalleryMarkupAndChangeFilter();
    addCardsByCategory();
  });
  
  function addGalleryMarkupAndChangeFilter() {
    const targetEl = document.querySelector(`[data-mark-active="${varWithCurrentCategoryValue}"]`);
  
    varWithActiveValueFilter.classList.remove('filter__item--active');
  
    targetEl.classList.add('filter__item--active');
  
    varWithActiveValueFilter = targetEl;
  } 

//// Рендер карток книжок по категоріям
function addCardsByCategory() { 
  const categoryValue = varWithActiveValueFilter.innerHTML;
  console.log(categoryValue) 
  getBooksCategory(categoryValue).then((booksArr) => {
     if (!booksArr.length) {
         Notify.failure(`Sorry, there are no ${categoryValue} books. Please choose another category.`);
         return;
     }
     
     galleryTitle.innerHTML = categoryValue;
     booksList.innerHTML = createMoreBooks(booksArr);

     addColorToTitle();

    //  bookGalleryCard.forEach((book) => {
    //    book.addEventListener('click', (e) => {
    //      const bookId = e.currentTarget.id;
    //      modalOpen(bookId);
    //    }) 
    //  })
 })
}

//// Створення карток книжок по категоріям
function createMoreBooks(booksArr) {
 const bookCard =  booksArr.map(({_id, book_image, title, author}) => {
     //  Перевірка чи пришла обложка книги з бекенду і заміна її на заглушку в разі необхідності //
     if (!book_image) {
         book_image = "../images/book_plug.jpg";
     }

     const markup = `<li id="${_id}" class="books-gallery__card">
     <div class="card-container">
     <img class="books-gallery__card-img" src="${book_image}" alt="${title}" loading="lazy">
     <div class="port-overlay"><p>quick view</p></div>
     </div>
     <h2 class="books-gallery__card-title">${title}</h2>
     <p class="books-gallery__card-author">${author}</p>
     </li>`

     return markup
 }).join('');

 return bookCard;
}

//// Додавання акцентного кольолру до заголовку з назвою категорії списку книг
function addColorToTitle() {
// const textgalleryTitle = galleryTitle.innerHTML;
const categoryValue = varWithActiveValueFilter.innerHTML;

let wordsArray = categoryValue.split(" ");
let lastWord = wordsArray.pop();
let firstPart = wordsArray.join(" ");

galleryTitle.innerHTML = `${firstPart} <span class="books-gallery__title-accent">${lastWord}</span>`;
}
  
