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

import './js/storage';
import './js/pagination';

import './js/footer';
import './js/modal_footer';

window.addEventListener('load', function () {
  const conatinerAnimation = document.querySelector('.animation');
  const body = document.querySelector('body');
  setTimeout(() => {
    conatinerAnimation.style.display = 'none';
    body.classList.remove('overlay');
  }, 2000);
  body.classList.add('overlay');
});
