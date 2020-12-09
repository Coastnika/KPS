let modalContract = document.querySelector('.modal-contract')
let modalClose = document.querySelector('.modal-contract__close')
let modalToggle = document.querySelector('.form__payer-checkbox-text')

modalClose.addEventListener('click', () => {
  modalContract.style.display = 'none'
})

modalToggle.addEventListener('click', () => {
  modalContract.style.display = 'flex'
})


modalContract.addEventListener('click', (e) => {
  if(!e.target.closest('.modal-contract__content')){
    modalContract.style.display = 'none'
  }
})


