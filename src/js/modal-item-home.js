//====================================КОД ДЛЯ ВІДКРИТТЯ ТА ЗАКРИТЯ МОДАЛЬНОГО ВІКНА===========================================
const refsBtnOpen = document.querySelectorAll('.js-open');
const btnClose = document.querySelector('.js-close');
const refModal = document.querySelector('.backdrop');

btnClose.addEventListener('click', onBtnClose)

for (let refBtnOpen of refsBtnOpen) {
  refBtnOpen.addEventListener('click', onClickBtn);
}

function onClickBtn(e){
  e.preventDefault()
  refModal.classList.add('is-block')
}

function onBtnClose(e){
  e.preventDefault()
    refModal.classList.remove('is-block')
}

//================================КОД ДЛЯ ВІДКРИТТЯ ТА ЗАКРИТЯ МОДАЛЬНОГО ВІКНА REMOVE=============================================
const refsBtnOpenRemove = document.querySelectorAll('.js-open-remove');
const btnCloseRemove = document.querySelector('.js-close-remove');
const refModalRemove = document.querySelector('.backdrop-remove');

btnCloseRemove.addEventListener('click', onBtnClose)

for (let refBtnOpenRemove of refsBtnOpenRemove) {
  refBtnOpenRemove.addEventListener('click', onClickBtn);
}

function onClickBtn(e){
  e.preventDefault()
  refModalRemove.classList.add('is-block')
}

function onBtnClose(e){
  e.preventDefault()
    refModalRemove.classList.remove('is-block')
}