let linkContainer = document.querySelector('.statistics__links')
let statisticLink = document.querySelectorAll('.statistics-period')
let periodContainer = document.querySelector('.statistics__datepicker')
let selected

//Подсвечиваем элементы
linkContainer.addEventListener('click', e => {
  let target = e.target
  if(target.tagName != 'A') return;

  if(target.classList.contains('trigger-datapicker')){
    periodContainer.classList.remove('hide')
  }
  else if(!target.classList.contains('trigger-datapicker')){
    periodContainer.classList.add('hide')
  }
  
  hilight(target)
})

function hilight(select){
  if(selected){
    selected.classList.remove('statistics__link--blue')
  }
  selected = select
  selected.classList.add('statistics__link--blue')
}

//Показываем период
let triggerDatapicker = document.querySelector('')

linkContainer.addEventListener('click', e => {
  
})