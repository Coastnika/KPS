
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