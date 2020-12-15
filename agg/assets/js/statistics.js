let statisticsTrigger = document.querySelectorAll('.statistics__trigger')
let statisticsSubitems = document.querySelectorAll('.statistics__subitems')
let triggerArrow = document.querySelectorAll('.statistics__trigger-arrow')

statisticsTrigger.forEach((trigger, triggerIndex) => {
  trigger.addEventListener('click', () => {
    statisticsSubitems.forEach((statistic, statisticIndex) => {
      if(triggerIndex == statisticIndex){
        // trigger.classList.toggle('classsssss')
        statistic.classList.toggle('hide')
      }
    })
    triggerArrow.forEach((arrow, arrowIndex) => {
      if(arrowIndex == triggerIndex){
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
      if(arrowIndex == triggerIndex){
        arrow.classList.toggle('statistics__more-arrow--active')
      }
    })
  })
})