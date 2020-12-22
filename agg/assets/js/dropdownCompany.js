let dropdownToggle = document.querySelector('.dropdown-checkbox__toggle')
let dropdownContainer = document.querySelector('.dropdown-checkbox__container')
// let dropdownCheckbox = document.querySelector('.dropdown-checkbox__label-input')
// let dropdownText = document.querySelector('.dropdown-checkbox__label-text')

dropdownToggle.addEventListener('click', () => {
  dropdownContainer.classList.toggle('hide')
})

document.addEventListener('click', (e) => {
  if(!dropdownContainer.contains(e.target) && e.target != dropdownToggle){
    dropdownContainer.classList.add('hide')
  }
})