import './js/header.js';
import './js/tumbler-theme.js';

import './js/auth-modal.js';
import './js/api-books.js';
import './js/support-ukraine.js';
import './js/shoplist-gallery-categories.js';

import './js/modal_footer.js';
import './js/footer.js';
import './js/pagination.js';

window.addEventListener('load', function () {
  const conatinerAnimation = document.querySelector('.animation');
  const body = document.querySelector('body');
  setTimeout(() => {
    conatinerAnimation.style.display = 'none';
    body.classList.remove('overlay');
  }, 2000);
  body.classList.add('overlay');
});
