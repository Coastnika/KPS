let dropDownToggle = document.querySelectorAll('.dropdown-active')
let dropDownElement = document.querySelectorAll('.dropdown-element')
let contract = document.querySelector('.form__payer-contract')
let closeForm1 = document.querySelector('.addcompany__title-close')
let closeForm2 = document.querySelector('.button-close')
let tabArrows = document.querySelectorAll('.settings__dropdown-arrow');

dropDownToggle.forEach(toggle => {
  toggle.addEventListener('click', () =>{
    dropDownElement.forEach(element => {
      if(toggle.getAttribute('tab-index') == element.getAttribute('tab-index')){
        element.classList.toggle('hide')
        
        if(contract.getAttribute('tab-index') == element.getAttribute('tab-index')){
          contract.classList.toggle('hide')
        }
      }
    })
    tabArrows.forEach(arrow => {
      if(toggle.getAttribute('tab-index') == arrow.getAttribute('tab-index')){
        arrow.classList.toggle('settings__dropdown-arrow--active')
      }
    })
  })
})

closeForm1.addEventListener('click', () => {
  dropDownElement.forEach(element => {
    if(element.getAttribute('tab-index') == closeForm1.getAttribute('tab-index')){
      element.classList.toggle('hide')
      contract.classList.toggle('hide')
    }
    
  })
  tabArrows.forEach(arrow => {
    if(closeForm1.getAttribute('tab-index') == arrow.getAttribute('tab-index')){
      arrow.classList.toggle('settings__dropdown-arrow--active')
    }
  })
})

closeForm2.addEventListener('click', () => {
  dropDownElement.forEach(element => {
    if(element.getAttribute('tab-index') == closeForm2.getAttribute('tab-index')){
      element.classList.toggle('hide')
      contract.classList.toggle('hide')
    }
  })
  tabArrows.forEach(arrow => {
    if(closeForm1.getAttribute('tab-index') == arrow.getAttribute('tab-index')){
      arrow.classList.toggle('settings__dropdown-arrow--active')
    }
  })
})