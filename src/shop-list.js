import axios from 'axios';
import Notiflix from 'notiflix';

import './js/api-books';

import './js/header';
import './js/tumbler-theme';

import './js/auth-modal';
import './js/support-ukraine';
import './js/shoplist-gallery-categories';

import './js/storage-methods';
import './js/pagination';

import './js/footer';
import './js/modal_footer';

window.addEventListener('load', function () {
  const conatinerAnimation = document.querySelector('.animation');
  setTimeout(() => {
    conatinerAnimation.style.display = 'none';
  }, 300);
});
