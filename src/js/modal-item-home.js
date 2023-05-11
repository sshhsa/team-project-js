//====================================КОД ДЛЯ ВІДКРИТТЯ ТА ЗАКРИТЯ МОДАЛЬНОГО ВІКНА===========================================
const btnOpen = document.querySelector('.js-open');
const btnClose = document.querySelector('.js-close');
const modal = document.querySelector('.backdrop');

btnClose.addEventListener('click', onBtnClose);
btnOpen.addEventListener('click', onBtnOpen);

function onBtnOpen() {
  modal.classList.add('is-block');
  console.log("click")
}

function onBtnClose() {
  modal.classList.remove('is-block');
}

//================================КОД ДЛЯ ВІДКРИТТЯ ТА ЗАКРИТЯ МОДАЛЬНОГО ВІКНА REMOVE=============================================
const btnOpenRemove = document.querySelector('.js-open-remove');
const btnCloseRemove = document.querySelector('.js-close-remove');
const modalRemove = document.querySelector('.backdrop-remove');

btnCloseRemove.addEventListener('click', onBtnCloseRemove);
btnOpenRemove.addEventListener('click', onBtnOpenRemove);

function onBtnOpenRemove() {
  modalRemove.classList.add('is-block');
}

function onBtnCloseRemove() {
  modalRemove.classList.remove('is-block');
}

