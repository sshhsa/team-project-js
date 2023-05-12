import { getCategoryList } from './api-books';



const filterListEl = document.querySelector('.filter__list');
let varWithActiveValueFilter = document.querySelector('.filter__item--active');

let varWithCurrentCategoryValue = 'ALL CATEGORIES';

fetch(`https://books-backend.p.goit.global/books/category-list`)
.then((response) => {
    return response.json();
})
.then((categorie) => {
    console.log(categorie);
    filterListEl.innerHTML = createMarkup(categorie);
})
.catch((error) => {
    console.log(error);
});


function createMarkup (arr){
    return arr.map(value => `<li class="filter__item" data-mark-active="${value.list_name}">${value.list_name}</li>`).join('');
 }
 


