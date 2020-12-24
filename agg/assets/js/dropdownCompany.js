let dropdownToggle = document.querySelector('.dropdown-checkbox__toggle')
let dropdownContainer = document.querySelector('.dropdown-checkbox__container')
let dropdownClose = document.querySelector('.dropdown-checkbox__close')

dropdownToggle.addEventListener('click', () => {
  dropdownContainer.classList.toggle('hide')
})
dropdownClose.addEventListener('click', () => {
  dropdownContainer.classList.add('hide')
})

document.addEventListener('click', (e) => {
  if(!dropdownContainer.contains(e.target) && e.target != dropdownToggle){
    dropdownContainer.classList.add('hide')
  }
})