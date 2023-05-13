import {getTopBooks, getBooksCategory} from './api-books';

const bestBooksList = document.querySelector('.js-gallery-best-books');
const galleryTitle = document.querySelector('.gallery-title');

// console.log(getTopBooks());

getTopBooks().then((data) => {
    galleryTitle.insertAdjacentHTML('beforeend', createTitleMarcup());
    bestBooksList.insertAdjacentHTML('beforeend', createBooklistMarcup(data))
});




function createTitleMarcup() {
    return 'Best Sellers <span class="gallery-title-span">Books</span>';
}

function createBooklistMarcup (data) {
    const marcup = [];

    //////////////////////////////////////////////////    ДЛЯ ВІДОБРАЖЕННЯ НЕОБХІДНОЇ КІЛЬКОСТІ КАТЕГОРІЙ        ///////////////////////////////////

    for (let i = 0; i < 4; i += 1) {
        
               
        const bookCards = data[i].books.map(({_id, book_image, title, author}) => 
            `<div id="${_id}" class = "book-cards">
            <img src="${book_image}" alt="${title}" >
            <h2>${title.slice(0,17)}</h2>
            <p>${author}</p>
            </div>`).join('');
    
            

        const btnSeeMore = `<button type="button" id="${data[i].list_name}" class="book-class-more">see more</button>`

        marcup.push(`<div class = "category-block">
        <p class = "gallery-category-title">${data[i].list_name}</p>
        <div class = "category-block-list">${bookCards}</div>
        ${btnSeeMore}
        </div>`);

        
        
    }

    //////////////////////////////////////////////////    АЛЬТЕРНАТИВА ДЛЯ ВІДОБРАЖЕННЯ ВСІХ КАТЕГОРІЙ        ///////////////////////////////////

    // data.forEach(element => {

    //     const bookCards = element.books.map(({_id, book_image, title, author}) => 
    //         `<div id="${_id}" class = "book-cards">
    //             <img src="${book_image}" alt="${title}" >
    //             <h2>${title}</h2>
    //             <p>${author}</p>
    //             </div>`).join('');

    //     const btnSeeMore = `<button type="button" id="${element.list_name}" class="book-class-more">see more</button>`

    //     marcup.push(`<div class = "category-block">
    //     <p class = "gallery-category-title">${element.list_name}</p>
    //     <div class = "category-block-list">${bookCards}</div>
    //     ${btnSeeMore}
    //     </div>`);

    // });
    return marcup.join('')
}