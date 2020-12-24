let dropDownToggle = document.querySelectorAll('.dropdown-active')
let dropDownElement = document.querySelectorAll('.dropdown-element')
let contract = document.querySelector('.form__payer-contract')
let closeForm1 = document.querySelector('.addcompany__title-close')
// let closeForm2 = document.querySelector('.button-close')
let tabArrows = document.querySelectorAll('.settings__dropdown-arrow');
let saveForm = document.querySelectorAll('.save-form')


let payer = document.querySelectorAll('.form__payer-radio input')

//кнопка для сохранения изменений и скрытия таба
if(saveForm){
  saveForm.forEach(save => {
    save.addEventListener('click', ()=> {
      dropDownElement.forEach(element => {
        if(save.getAttribute('tab-index') == element.getAttribute('tab-index')){
          element.classList.toggle('hide')
          
        }
      })
      tabArrows.forEach(arrow => {
        if(save.getAttribute('tab-index') == arrow.getAttribute('tab-index')){
          arrow.classList.toggle('settings__dropdown-arrow--active')
        }
      })
    })
  })
}

dropDownToggle.forEach(toggle => {
  toggle.addEventListener('click', () =>{
    //Открывает нужный таб
    dropDownElement.forEach(element => {
      if(toggle.getAttribute('tab-index') == element.getAttribute('tab-index')){
        element.classList.toggle('hide')
        
        if(contract.getAttribute('tab-index') == element.getAttribute('tab-index')){
          contract.classList.toggle('hide')
        }
      }
    })
    //Поворачивает стрелки
    tabArrows.forEach(arrow => {
      if(toggle.getAttribute('tab-index') == arrow.getAttribute('tab-index')){
        arrow.classList.toggle('settings__dropdown-arrow--active')
      }
    })
    //скрывает input.radio
    if(toggle.getAttribute('tab-index') == 1){
      payer.forEach(element => {
        labelRadio = element.closest('.form__payer-radio')
        if(!element.checked){
          labelRadio.classList.toggle('hide')
        }
      })
    }
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

// closeForm2.addEventListener('click', () => {
//   dropDownElement.forEach(element => {
//     if(element.getAttribute('tab-index') == closeForm2.getAttribute('tab-index')){
//       element.classList.toggle('hide')
//       contract.classList.toggle('hide')
//     }
//   })
//   tabArrows.forEach(arrow => {
//     if(closeForm1.getAttribute('tab-index') == arrow.getAttribute('tab-index')){
//       arrow.classList.toggle('settings__dropdown-arrow--active')
//     }
//   })
// })

