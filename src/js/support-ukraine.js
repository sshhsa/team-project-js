import found1 from '../images/png/support-Ukraine/01-found-1.png';
import found1x from '../images/png/support-Ukraine/01-found-2.png';
import found2 from '../images/png/support-Ukraine/02-found-1.png';
import found2x from '../images/png/support-Ukraine/02-found-2.png';
import found3 from '../images/png/support-Ukraine/03-found-1.png';
import found3x from '../images/png/support-Ukraine/03-found-2.png';
import found4 from '../images/png/support-Ukraine/04-found-1.png';
import found4x from '../images/png/support-Ukraine/04-found-2.png';
import found5 from '../images/png/support-Ukraine/05-found-1.png';
import found5x from '../images/png/support-Ukraine/05-found-2.png';
import found6 from '../images/png/support-Ukraine/06-found-1.png';
import found6x from '../images/png/support-Ukraine/06-found-2.png';
import found7 from '../images/png/support-Ukraine/07-found-1.png';
import found7x from '../images/png/support-Ukraine/07-found-2.png';
import found8 from '../images/png/support-Ukraine/08-found-1.png';
import found8x from '../images/png/support-Ukraine/08-found-2.png';
import found9 from '../images/png/support-Ukraine/09-found-1.png';
import found9x from '../images/png/support-Ukraine/09-found-2.png';

const charityFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: found1,
    img2: found1x,
    width: 154,
    height: 32,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: found2,
    img2: found2x,
    width: 71,
    height: 32,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: found3,
    img2: found3x,
    width: 219,
    height: 32,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: found4,
    img2: found4x,
    width: 136,
    height: 32,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: found5,
    img2: found5x,
    width: 76,
    height: 32,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: found6,
    img2: found6x,
    width: 96,
    height: 32,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: found7,
    img2: found7x,
    width: 57,
    height: 32,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: found8,
    img2: found8x,
    width: 106,
    height: 32,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: found9,
    img2: found9x,
    width: 180,
    height: 32,
  },
];

const logoContainer = document.querySelector('.logoContainer');

function renderLogos() {
  const markup = charityFunds
    .map(({ title, url, img, img2, width, height }, index) => {
      const paddedIndex = (index + 1).toString().padStart(2, '0');
      return `<div class="logo-item fund-item"><p class="fund-number">${paddedIndex}</p>
      <a href="${url}" class="logo-img"  target="_blank" crossorigin="anonymous"  rel="noopener noreferrer nofollow" aria-label="${title}" >
      <picture>
      <source srcset="${img}, ${img2} 2x" />
      <img src="${img}" alt="${title}" loading="lazy" width="${width}" height="${height}">
    </picture>
      </a></div>`;
    })
    .join('');
  logoContainer.insertAdjacentHTML('beforeend', markup);
}

renderLogos();


// slider

const swiperOverflowContainerEl = document.querySelector('.swiper-container');
const logosContainerEl = document.querySelector('.logoContainer');
const logoItemEl = document.querySelector('.logo-item');
const btnDownEl = document.querySelector('.swiper-button-next');
const btnDownIconEl = document.querySelector('.swiper-button-next-icon');

let currentClick = 1;
const scrolledDistance = 100;

let numberOfClicks = Math.ceil(
  (logoItemEl.clientHeight * logosContainerEl.children.length +
    20 * (logosContainerEl.children.length - 1) -
    swiperOverflowContainerEl.clientHeight) /
    scrolledDistance
);

btnDownEl.addEventListener('click', onMoveDownClick);

function onMoveDownClick() {
  if (currentClick <= numberOfClicks) {
    if (currentClick === numberOfClicks) {
      btnDownIconEl.style.transform = 'rotate(180deg)';
    }

    logosContainerEl.style.transform = `translateY(${
      -scrolledDistance * currentClick
    }px)`;
    ++currentClick;
  } else {
    currentClick = 1;
    logosContainerEl.style.transform = '';

    btnDownIconEl.style.transform = '';
  }
}


// scroll

window.onload = function () {
  const fullDocumentHeight = document.documentElement.scrollHeight;
  const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up-hide');
    },
    hide() {
      this.el.classList.add('btn-up-hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 0.2 * fullDocumentHeight ? this.show() : this.hide();
      });
      this.el.onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      };
    },
  };
  btnUp.addEventListener();
};
