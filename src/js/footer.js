import { onClickEscape, closeModal } from './modal_footer';
import Glide from '@glidejs/glide';

// render_footer_modal

const refs = {
  footerModal: document.querySelector('.footer-modal'),
  openModalLink: document.querySelector('[data-footer-open]'),
  modal: document.querySelector('[data-modal-footer]'),
  backdrop: document.querySelector('.js-backdrop'),
  addBodyClass: document.querySelector('body'),
};

export function openModal(event) {
  event.preventDefault();
  refs.modal.classList.remove('is-hidden');
  refs.addBodyClass.classList.add('modal-open');
  document.addEventListener('keydown', onClickEscape);
  refs.footerModal.innerHTML = '';
  const markup = `<div class="glide_footer">
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides--footer">
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/118224486?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Alexandr Marynkevych</h3>
          <p class="student__role">Team Lead</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/sshhsa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle"
                >
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/118206308?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Andrij Karmaza</h3>
          <p class="student__role">Scrum Master</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/AndrijKarmaza"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg></a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/118572078?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Yevhenii Malinovskiy</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/Travellin91"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle"
                >
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/108280320?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Влад</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/Elborn666"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/118364212?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Yulia Kalashnyk</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/YuliaKalashnyk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path></svg></a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/114424463?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Roman Babik</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/paladin3x"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg></a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/118547076?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Heorhii Honcharov</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/DemiGGV"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/106540215?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Elizabeth</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/Ielithabeth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/118683335?v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Sergiy Leshchak</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/UFO73"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                  ></path></svg></a>
            </li>
          </ul>
        </div>
      </li>
      <li class="glide__slide">
        <div class="border__outside">
          <div class="border__inside">
            <img
              class="student-foto"
              src="https://avatars.githubusercontent.com/u/118633780?s=96&v=4" alt="Name team member"/>
          </div>
        </div>
        <div class="student__card">
          <h3 class="student__name">Olena Boichenko</h3>
          <p class="student__role">Developer</p>
          <ul class="footer__social">
            <li class="footer__sociallink">
              <a
                class="student__link"
                href="https://github.com/Olena1010"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github">
                <svg height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  class="octicon octicon-mark-github v-align-middle">
                  <path
                    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg></a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

  <div class="glide__arrows" data-glide-el="controls">
    <button
      style="padding: 10px; border: none; left: 10px"
      class="glide__arrow glide__arrow--left arrow__footer"
      data-glide-dir="<">&#5130;</button>
    <button
      style="padding: 10px; border: none; right: 10px"
      class="glide__arrow glide__arrow--right arrow__footer"
      data-glide-dir=">">&#5125;</button></div>
  <div class="close-container" data-footer-close>
    <div class="leftright"></div>
    <div class="rightleft"></div>
  </div>
</div>`;

  refs.footerModal.insertAdjacentHTML('beforeend', markup);

  // const slide = document.querySelector('.glide__slides--footer');

  const closeModalBtn = document.querySelector('[data-footer-close]');

  glideFooter.destroy();
  let glidFooter = new Glide('.glide_footer', options);
  glidFooter.mount();

  closeModalBtn.addEventListener('click', closeModal);
}

// запобігає мерехтіння модалки при перезавантаженні сторінки---

document.addEventListener('DOMContentLoaded', function () {
  const modalFooter = document.getElementById('modalFooter');
  modalFooter.style.display = 'flex';
});

// slider_glide

const options = {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  autoplay: 3000,
  keyboard: true,
};

const glideFooter = new Glide('.glide_footer', options);

// Fixed footer
const footer = document.querySelector('.footer');
const supportUkraine = document.querySelector('.support-container');
const footerHeight = footer.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', onScrollEventWindow);

function onScrollEventWindow() {
  let scrollDistance = window.scrollY;

  if (scrollDistance < lastScrollTop || scrollDistance === 0) {
    setTimeout(function () {
      footer.classList.remove('visible');
    }, 250);
    footer.classList.remove('footer-fixed');
    supportUkraine.style.marginTop = null;
  } else {
    setTimeout(function () {
      footer.classList.add('visible');
    }, 250);
    footer.classList.add('footer-fixed');
    supportUkraine.style.marginTop = `${footerHeight}px`;
  }

  lastScrollTop = scrollDistance;
}
