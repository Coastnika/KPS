let settingsForm = document.querySelector('.addcompany')
let addOrganization = document.querySelector('.form__payer-btn')
let lastControls = document.querySelector('.settings__payer-controlls-last')
let firstControls = document.querySelector('.settings__payer-controlls-first')
// let buttonClose = document.querySelector('.button-close')
let buttonClose2 = document.querySelector('.addcompany__title-close')
let contractCheckbox = document.querySelector('.form__payer-contract')


function hideForm(){
  settingsForm.classList.add('hide')
  lastControls.classList.add('hide')
  addOrganization.classList.remove('hide')
  firstControls.classList.remove('hide')
  contractCheckbox.classList.remove('form__payer-contract--form')
  contractCheckbox.classList.add('hide')
}

function showForm(){
  settingsForm.classList.remove('hide')
  lastControls.classList.remove('hide')
  addOrganization.classList.add('hide')
  firstControls.classList.add('hide')
  contractCheckbox.classList.add('form__payer-contract--form')
  contractCheckbox.classList.remove('hide')
}


addOrganization.addEventListener('click', showForm)
// buttonClose.addEventListener('click', hideForm)
buttonClose2.addEventListener('click', hideForm)


