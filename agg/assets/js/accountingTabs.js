let accountingSwitch = document.querySelectorAll('.accounting__switch')
let accountingTable = document.querySelectorAll('.accounting__table')
let accountingSwitchContainer = document.querySelector('.accounting__switches')
let selected

accountingSwitch.forEach(item => {
  item.addEventListener('click', () => {
    

    accountingTable.forEach(table => {
      if(item.getAttribute('tab-index') == table.getAttribute('tab-index')){
        table.classList.remove('hide')
      }
      else{
        table.classList.add('hide')
      }
    })
  })
})

//Подсвечиваем элементы
accountingSwitchContainer.addEventListener('click', e => {
  let target = e.target

  accountingSwitch.forEach(item => {
    item.classList.remove('accounting__switch--activeit')
  })

  if(!target.classList.contains('accounting__switch')) return;
  
  hilights(target)
})

function hilights(select){
  if(selected){
    selected.classList.remove('accounting__switch--active')
  }
  selected = select
  selected.classList.add('accounting__switch--active')
}