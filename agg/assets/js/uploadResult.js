let uploadDelGroup = document.querySelectorAll('.uplaod__item-action-del')
let modalDel = document.querySelector('.modal__delete')
let modalDelClose = document.querySelector('.modal__delete-close')

let modalDelConfirm = document.querySelector('.modal__btn-yes')
let modalDelCancel = document.querySelector('.modal__btn-cancel')

uploadDelGroup.forEach(element => {
  element.addEventListener('input', e => {
    let parentElem = e.target.closest('.uplaod__item-action').nextSibling.parentElement
    let childElems = parentElem.children

    if(element.checked){
      modalDel.classList.add('modal__delete--show')
      element.closest('.uplaod__item-action').classList.add('uplaod__item-action-active')

      for(let i = 1; i < childElems.length - 1; i++){
        childElems[i].style.color = '#999'
      }
    }
    else{
      element.closest('.uplaod__item-action').classList.remove('uplaod__item-action-active')
      for(let i = 1; i < childElems.length - 1; i++){
        childElems[i].style.color = '#444'
      }
    }
    
    modalDelConfirm.onclick = () => {
      e.target.checked = true
      modalDel.classList.remove('modal__delete--show')
      for(let i = 1; i < childElems.length - 1; i++){
        childElems[i].style.color = '#999'
      }
    }

    modalDelCancel.onclick = () => {
      e.target.checked = false
      modalDel.classList.remove('modal__delete--show')
      element.closest('.uplaod__item-action').classList.remove('uplaod__item-action-active')
      for(let i = 1; i < childElems.length - 1; i++){
        childElems[i].style.color = '#444'
      }
    }
  })
})

modalDelClose.addEventListener('click', () => {
  modalDel.classList.remove('modal__delete--show')
})

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