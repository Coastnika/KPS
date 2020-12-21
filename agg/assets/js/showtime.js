//showtime
let days = document.querySelectorAll('.showtime__days-checkbox')
let hours = document.querySelectorAll('.showtime__hours-checkbox')
let dots = document.querySelectorAll('.showtime__elements-checkbox')
let dotsContainer = document.querySelector('.showtime__event')
let contentInputs = document.querySelectorAll('.showtime__content input')


days.forEach(day => {
  day.addEventListener('input', () => {
    // Получаем атрибут из чекбоксов дней
    let dataDay = day.getAttribute('data-day')

    dots.forEach(dot => {
      // Получаем атрибут из чекбоксов элементов
      let dataDots = dot.getAttribute('data-day')

      if(dataDay === dataDots && day.checked){
        dot.checked = true
      }
      else if(dataDay === dataDots && !day.checked){
        dot.checked = false
      }
    })
  })
})

hours.forEach(hour => {
  hour.addEventListener('input', () => {
    // Получаем атрибут из чекбоксов часов
    let dataHour = hour.getAttribute('data-hour')

    dots.forEach(dot => {
      // Получаем атрибут из чекбоксов элементов
      let dataDots = dot.getAttribute('data-hour')

      if(dataHour === dataDots && hour.checked){
        dot.checked = true
      }
      else if(dataHour === dataDots && !hour.checked){
        dot.checked = false
      }
    })
  })
})

dotsContainer.addEventListener('mouseover', e => {
  let targetAttributeHour = e.target.getAttribute('data-hour')
  let targetAttributeDay = e.target.getAttribute('data-day')

  dots.forEach(dot => {
    let dotAttributeHour = dot.getAttribute('data-hour')
    let dotAttributeDay = dot.getAttribute('data-day')

    if(targetAttributeHour == dotAttributeHour || targetAttributeDay == dotAttributeDay ){
      dot.classList.add('showtime__elements-checkbox--active')
    }
  })

  days.forEach(day => {
    if(targetAttributeDay == day.getAttribute('data-day') ){
      day.classList.add('showtime__elements-checkbox--active')
    }
  });

  hours.forEach(hour => {
    if(targetAttributeHour == hour.getAttribute('data-hour') ){
      hour.classList.add('showtime__elements-checkbox--active')
    }
  });
})

dotsContainer.addEventListener('mouseout', e => {
  let targetAttributeHour = e.target.getAttribute('data-hour')
  let targetAttributeDay = e.target.getAttribute('data-day')

  if(targetAttributeHour || targetAttributeDay){
    dots.forEach(dot => {
        dot.classList.remove('showtime__elements-checkbox--active')
        
    })
  }
  days.forEach(day => {
    day.classList.remove('showtime__elements-checkbox--active')
  });
  hours.forEach(hour => {
    hour.classList.remove('showtime__elements-checkbox--active')
  });
})


// all checked
let checkboxToggle = document.querySelector('.showtime__hours-label-all input')
let eventContainer = document.querySelector('.showtime__event')

checkboxToggle.addEventListener('input', () => {
  let inputs = eventContainer.querySelectorAll('input')
  
  inputs.forEach(input => {
    if(checkboxToggle.checked){
      input.checked = true
    }
    else{
      input.checked = false
    }
  })

})