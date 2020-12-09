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




// region

let country = document.querySelectorAll('.region__select-country-input')
let districts = document.querySelectorAll('.region__select-district-input')

let districtsContainer = document.querySelectorAll('.region__select-district')
let citiesContainer = document.querySelectorAll('.region__select-city')

let arrows = document.querySelectorAll('.region__select-arrow')
let arrows2 = document.querySelectorAll('.region__select-arrow_2')


country.forEach((elem,countryIndex) => {
  elem.addEventListener('input', () => {

    if(!elem.checked){
      districtsContainer.forEach((district,districtIndex) => {
        if(countryIndex === districtIndex){
          district.style.display = "none"

        }
      })
      arrows.forEach((arrow,indexArrow)=> {
        if(indexArrow === countryIndex){
          arrow.classList.remove('region__select-arrow--active')
        }
      })
    }

    else if(elem.checked){
      districtsContainer.forEach((district,districtIndex) => {
        if(countryIndex === districtIndex){
          district.style.display = "block"
        }
      })
      arrows.forEach((arrow,indexArrow)=> {
        if(indexArrow === countryIndex){
          arrow.classList.add('region__select-arrow--active')
        }
      })
    }
  })
})

districts.forEach((district, districtIndex) => {
  district.addEventListener('input', () => {

    if(!district.checked){
      citiesContainer.forEach((city, cityIndex) => {
        if(districtIndex === cityIndex){
          city.style.display = "none"
          console.log(`country index: ${cityIndex}`)
          console.log(`district index: ${districtIndex}`)
        }
      })
      arrows2.forEach((arrow,indexArrow)=> {
        if(indexArrow === districtIndex){
          arrow.classList.remove('region__select-arrow_2--active')
        }
      })
    }

    else if(district.checked){
      citiesContainer.forEach((city, cityIndex) => {
        console.log(cityIndex)
        if(districtIndex === cityIndex){
          city.style.display = "block"
        }
      })
      arrows2.forEach((arrow,indexArrow)=> {
        if(indexArrow === districtIndex){
          arrow.classList.add('region__select-arrow_2--active')
        }
      })
    }
  })
})


