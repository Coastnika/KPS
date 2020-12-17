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