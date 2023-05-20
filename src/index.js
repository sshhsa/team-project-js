import axios from 'axios';
import Notiflix from 'notiflix';

import './js/api-books';

import './js/header';
import './js/tumbler-theme';

import './js/auth-modal';
import './js/categories';
import './js/gallery-categories';
import './js/modal-item-home';
import './js/support-ukraine';

import './js/storage-methods';
import './js/pagination';

import './js/footer';
import './js/modal_footer';

window.addEventListener('load', function () {
  const conatinerAnimation = document.querySelector('.animation');
  setTimeout(() => {
    conatinerAnimation.style.display = 'none';
  }, 2000);
});
