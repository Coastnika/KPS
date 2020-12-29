let statisticsTrigger = document.querySelectorAll('.statistics__trigger')
let statisticsSubitems = document.querySelectorAll('.statistics__subitems')
let triggerArrow = document.querySelectorAll('.statistics__trigger-arrow')

statisticsTrigger.forEach((trigger, triggerIndex) => {
  trigger.addEventListener('click', () => {
    statisticsSubitems.forEach((statistic, statisticIndex) => {
      if (triggerIndex == statisticIndex) {
        // trigger.classList.toggle('classsssss')
        statistic.classList.toggle('hide')
      }
    })
    triggerArrow.forEach((arrow, arrowIndex) => {
      if (arrowIndex == triggerIndex) {
        arrow.classList.toggle('statistics__trigger-arrow--active')
      }
    })
  })
})

let statisticsMore = document.querySelectorAll('.statistics__more')
let moreArrow = document.querySelectorAll('.statistics__more-arrow')

statisticsMore.forEach((trigger, triggerIndex) => {
  trigger.addEventListener('click', () => {
    moreArrow.forEach((arrow, arrowIndex) => {
      if (arrowIndex == triggerIndex) {
        arrow.classList.toggle('statistics__more-arrow--active')
      }
    })
  })
})


// switch

let switchIn = document.querySelectorAll('.admin__card-switch-input')
let handleSwitch = document.querySelectorAll('.admin__card-switch-handle')
let switchLab = document.querySelectorAll('.admin__card-switch-label')

switchIn.forEach((input, inputIndex) => {
  input.addEventListener('input', () => {
    handleSwitch.forEach((dot, dotIndex) => {
      if (inputIndex === dotIndex) {
        dot.classList.toggle('admin__card-switch-handle--active')
      }
    })

    switchLab.forEach((label, labelIndex) => {
      if (inputIndex === labelIndex) {
        label.classList.toggle('admin__card-switch-label--active')
      }
    })
  })
})

//Костыль для скролла в статистике
let headlineContainer = document.querySelectorAll('.transition__item-headline')

headlineContainer.forEach(headline => {
  headline.addEventListener('click', e => {
    if(e.target.closest('.headline-trigger')){
      console.log('123')
    }
  })
})