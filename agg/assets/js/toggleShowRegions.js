let toggleRegions = document.querySelector('.region__link-title')
let regionContent = document.querySelector('.region__wrapper-dropdown')
let closeRegions = document.querySelector('.region-close')

toggleRegions.addEventListener('click', () => {
  regionContent.classList.toggle('hide')
})

document.addEventListener('click', (e) => {
  if(!regionContent.contains(e.target) && e.target != toggleRegions){
     regionContent.classList.add('hide')
  }
})

closeRegions.addEventListener('click', () => {
  regionContent.classList.add('hide')
})