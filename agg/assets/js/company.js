
//show modal banner
let bannerToggle = document.querySelectorAll('.company__card-size')
let modalBanner = document.querySelector('.modal__banner')
let bannerClose = document.querySelector('.modal__banner-close')

function showBanner(){
  modalBanner.style.display = "flex"
}

function closeBanner(){
  modalBanner.style.display = "none"
}

//Закрывает модальное окно, если клик за контентом
modalBanner.addEventListener('click', (e) => {
  if(!e.target.closest('.modal__banner-content')){
    closeBanner()
  }
})

bannerClose.addEventListener('click', closeBanner)
bannerToggle.forEach(elem => {
  elem.addEventListener('click', showBanner)
})

// switch
let switchInput = document.querySelectorAll('.company__switch-input')
let dotSwitch = document.querySelectorAll('.company__switch-handle')
let switchLabel = document.querySelectorAll('.company__switch-label')

switchInput.forEach((input, inputIndex) => {
  input.addEventListener('input', () => {
    dotSwitch.forEach((dot, dotIndex) =>{
      if(inputIndex === dotIndex){
        dot.classList.toggle('company__switch-handle--active')
      }
    })

    switchLabel.forEach((label, labelIndex) =>{
      if(inputIndex === labelIndex){
        label.classList.toggle('company__switch-label--active')
      }
    })
  })
})

