// modal-moderator
let modalModerator = document.querySelector('.modal__moderator')
let modalModeratorOpen = document.querySelector('.upload__error-send')
let modalModeratorClose = document.querySelector('.modal__moderator-close')

modalModeratorOpen.addEventListener('click', () => {
  modalModerator.classList.add('modal__moderator--show')
})

modalModeratorClose.addEventListener('click', () => {
  modalModerator.classList.remove('modal__moderator--show')
})

//Закрывает модальное окно, если клик за контентом
modalModerator.addEventListener('click', (e) => {
  if(!e.target.closest('.modal__moderator-wrap')){
    modalModerator.classList.remove('modal__moderator--show')
  }
})