import {getTopBooks, getBooksCategory} from './api-books';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const bestBooksList = document.querySelector('.js-gallery-best-books');
const galleryTitle = document.querySelector('.gallery-title');

getTopBooks().then((data) => {
    if (!data.length) {
        Notify.failure("Sorry, there are no best sellers books. Please choose a category.");
        return;
    }
    galleryTitle.insertAdjacentHTML('beforeend', createTitleMarcup());
    bestBooksList.insertAdjacentHTML('beforeend', createBooklistMarcup(data));
});

function createTitleMarcup() {
    return 'Best Sellers <span class="gallery-title-span">Books</span>';
}


function createBooklistMarcup (data) {
    const marcup = [];

    // Відображення необхідної кількості категорій  //

    const numberOfCategory = 4;
    for (let i = 0; i < numberOfCategory; i += 1) {
               
        const booksArr = data[i].books;
        const bookCards = []; 

        booksArr.forEach(({_id, book_image, title, author}) => {

            // Перевірка кількості символів у назві книги і обрізка до необхідного значення //
            const numberOfSymbol = 16;
            if (title.length > numberOfSymbol) {
                title = title.slice(0, numberOfSymbol) + "...";
            }

            //  Перевірка чи пришла обложка книги з бекенду і заміна її на заглушку в разі необхідності //
            if (!book_image) {
                book_image = "../images/book_plug.jpg";
            }

            const bookCardsMarcup =  
            `<li id="${_id}" class="book-cards">
              <div class="book-cover-wraper">
                <img class="book-cover" src="${book_image}" alt="${title}">
              </div>
              <h2>${title}</h2>
              <p>${author}</p>
            </li>`;

            bookCards.push(bookCardsMarcup);
        });

        const btnSeeMore = `<button type="button" id="${data[i].list_name}" class="book-class-more">see more</button>`

        marcup.push(`<li class="category-block">
        <p class="gallery-category-title">${data[i].list_name}</p>
        <ul class="category-block-list">${bookCards.join('')}</ul>
        ${btnSeeMore}
        </li>`);
    }

    return marcup.join('')
}
