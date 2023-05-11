//====================================КОД ДЛЯ ВІДКРИТТЯ ТА ЗАКРИТЯ МОДАЛЬНОГО ВІКНА===========================================
const refsBtnOpen = document.querySelectorAll('.js-open');
const btnClose = document.querySelector('.js-close');
const refModal = document.querySelector('.backdrop');

btnClose.addEventListener('click', onBtnClose);

function onClickBtn(e) {
  refModal.classList.add('is-block');
}

function onBtnClose(e) {
  refModal.classList.remove('is-block');
}

for (let refBtnOpen of refsBtnOpen) {
  refBtnOpen.addEventListener('click', onClickBtn);
}

//================================КОД ДЛЯ ВІДКРИТТЯ ТА ЗАКРИТЯ МОДАЛЬНОГО ВІКНА REMOVE=============================================
const refsBtnOpenRemove = document.querySelectorAll('.js-open-remove');
const btnCloseRemove = document.querySelector('.js-close-remove');
const refModalRemove = document.querySelector('.backdrop-remove');

btnCloseRemove.addEventListener('click', onBtnClose);

function onClickBtnRemove(e) {
  refModalRemove.classList.add('is-block');
}

function onBtnClose(e) {
  refModalRemove.classList.remove('is-block');
}

for (let refBtnOpenRemove of refsBtnOpenRemove) {
  refBtnOpenRemove.addEventListener('click', onClickBtnRemove);
}
