let regionForm = document.querySelector('.region')
let regionContainer = document.querySelector('.region__container')
let showtimeContainer = document.querySelector('.showtime__content')
let regionAccept = document.querySelector('.region-accept')
let regionCheckbox = regionForm.querySelectorAll('.checkbox-valid')
let showtimeInput = showtimeContainer.querySelectorAll('input')

//проверка и добавление красной рамки
regionAccept.addEventListener('click', e => {
  //Для регионов
  let validRegion = 0;
  regionCheckbox.forEach(checkbox => {
    if(checkbox.checked){
      validRegion = 1
      return false
    }
  })
  if(validRegion == 0){
    regionContainer.classList.add('region__container-error')
    e.preventDefault()
  }

  //Для времени показа
  let validShowtime = 0

  showtimeInput.forEach(input => {
    if(input.checked && input.trim() != ''){
      validShowtime = 1
      return false
    }
  })
  if(validShowtime == 0) {
    showtimeContainer.classList.add('showtime__content-error')
    e.preventDefault()
  }

})

//Удаление красной рамки
regionCheckbox.forEach(checkbox => {
  checkbox.addEventListener('input', () => {
    regionContainer.classList.remove('region__container-error')
  })
})

showtimeInput.forEach(input => {
  input.addEventListener('input', () => {
    showtimeContainer.classList.remove('showtime__content-error')
  })
})