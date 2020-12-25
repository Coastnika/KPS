let toggleRegions = document.querySelector('.region__link-title')
let regionContent = document.querySelector('.region__wrapper-dropdown')
let closeRegions = document.querySelector('.region-close')
let saveRegions = document.querySelector('.region-save')

toggleRegions.addEventListener('click', () => {
  regionContent.classList.toggle('hide')
})

saveRegions.addEventListener('click', () => {
  regionContent.classList.add('hide')
})

closeRegions.addEventListener('click', () => {
  regionContent.classList.add('hide')
})

document.addEventListener('click', (e) => {
  if(!regionContent.contains(e.target) && e.target != toggleRegions){
     regionContent.classList.add('hide')
  }
})

