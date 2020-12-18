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
let regions = document.querySelectorAll('.region__select-city-input')

let countryContainer = document.querySelectorAll('.region__select-country')
let districtsContainer = document.querySelectorAll('.region__select-district')
let citiesContainer = document.querySelectorAll('.region__select-city')
let container = document.querySelectorAll('.cities')

let arrows = document.querySelectorAll('.region__select-arrow')
let arrows2 = document.querySelectorAll('.region__select-arrow_2')


regions.forEach((region, regionIndex) => {
  region.addEventListener('input', () => {
    if(!region.checked){
      container.forEach((container, containerIndex) => {
        if(regionIndex == containerIndex){
          container.style.display = "none"
        }
      })
    }
    else if(region.checked){
      container.forEach((container, containerIndex) => {
        if(regionIndex == containerIndex){
          container.style.display = "block"
        }
      })
    }
  })
})

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

// region checbox checked

let checkboxCountry = document.querySelectorAll('.checkbox-country')
let checkboxDistrict = document.querySelectorAll('.checkbox-district')
let checkboxRegion = document.querySelectorAll('.checkbox-region')
let checkboxCity = document.querySelectorAll('.checkbox-city')
let regionWrapper = document.querySelectorAll('.wrapper-region')
// countryContainer districtsContainer citiesContainer container

// НУЖНО ЧТО БЫ ВСЕ ДОЧЕРНИЕ ЧЕКАЛИСЬ И АНЧЕКАЛИСЬ =)
countryContainer.forEach(country => {
  country.addEventListener('input', e => {
    let checkboxCountry = country.querySelectorAll('.checkbox-country')
    let checkboxDistrict = country.querySelectorAll('.checkbox-district')

    if(e.target == country.querySelector('.checkbox-country')){
      checkboxCountry.forEach(item => {
        if(item.checked){
          checkboxDistrict.forEach(element => {
            element.checked = true
          })
        }
        else{
          checkboxDistrict.forEach(element => {
            element.checked = false
          })
        }
      })
    }
  })
})

districtsContainer.forEach(country => {
  country.addEventListener('input', e => {
    
    let checkboxDistrict = country.querySelectorAll('.checkbox-district')
    let checkboxRegion = country.querySelectorAll('.checkbox-region')

    if(e.target == country.querySelector('.checkbox-district')){
      checkboxDistrict.forEach(item => {
        if(item.checked){
          checkboxRegion.forEach(element => {
            element.checked = true
          })
        }
        else{
          checkboxRegion.forEach(element => {
            element.checked = false
          })
        }
      })
    }
  })
})

regionWrapper.forEach(region => {
  region.addEventListener('input', e => {
    
    let checkboxRegion = region.querySelectorAll('.checkbox-region')
    let checkboxCity = region.querySelectorAll('.checkbox-city')

    if(e.target == region.querySelector('.checkbox-region')){
      checkboxRegion.forEach(item => {
        if(item.checked){
          console.log('1')
          checkboxCity.forEach(element => {
            element.checked = true
          })
        }
        else{
          console.log('0')
          checkboxCity.forEach(element => {
            element.checked = false
          })
        }
      })
    }
  })
})



