import { getCategoryList } from './api-books';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const filterListEl = document.querySelector('.filter__list');
let varWithActiveValueFilter = document.querySelector('.filter__item--active');

let varWithCurrentCategoryValue = 'ALL CATEGORIES';

fetch(`https://books-backend.p.goit.global/books/category-list`)
.then((response) => {
    return response.json();
})
.then((categorie) => {
    console.log(categorie);
    filterListEl.insertAdjacentHTML('beforeend', createMarkup(categorie));;
})
.catch((error) => {
    Notify.info(`Oops something going wrong`, notifyOptions);
    filterListEl.innerHTML=`Oops something going wrong. Error 404`;
});


function createMarkup (arr){
    return arr.map(value => `<li class="filter__item" data-mark-active="${value.list_name}">${value.list_name}</li>`).join('');
 }




filterListEl.addEventListener('click', event => {
    
    if (event.target.outerText.toLowerCase() === varWithCurrentCategoryValue.toLowerCase()) {
      return;
    }
  
    varWithCurrentCategoryValue = event.target.outerText;
  
    addGalleryMarkupAndChangeFilter(event);
  });
  
  function addGalleryMarkupAndChangeFilter(event) {
    const targetEl = document.querySelector(`[data-mark-active="${varWithCurrentCategoryValue}"]`);
  
    varWithActiveValueFilter.classList.remove('filter__item--active');
  
    targetEl.classList.add('filter__item--active');
  
    varWithActiveValueFilter = targetEl;
    
  }  



  
