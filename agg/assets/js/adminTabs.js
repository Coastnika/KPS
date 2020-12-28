let cards = document.querySelectorAll('.admin__card')
let navItems = document.querySelectorAll('.admin__nav-item')

let toggleContent = document.querySelector('.admin-wrapper')

navItems.forEach(item => {
  item.addEventListener('click', () => {
    
  })
})

//Показывает табы 
cards.forEach(card => {
  card.addEventListener('click', e => {
    let toggleContent = card.querySelectorAll('.admin-wrapper')
    let target = e.target.closest('.admin__nav-item')
    let navItem = card.querySelectorAll('.admin__nav-item')
    let navContainer = card.querySelector('.admin__card-nav')

    toggleContent.forEach(content => {
      if(target.getAttribute('tab-index') == content.getAttribute('tab-index')){
        content.classList.toggle('hide')
        if(!target.classList.contains('admin__nav-item-active')){
          navItem.forEach(item => {
            item.classList.remove('admin__nav-item-active')
          })
          target.classList.add('admin__nav-item-active')
          navContainer.classList.add('admin__card-nav--border')
        }
        else if(target.classList.contains('admin__nav-item-active')){
          target.classList.remove('admin__nav-item-active')
          navContainer.classList.remove('admin__card-nav--border')
        }
      }
      if(target.getAttribute('tab-index') != content.getAttribute('tab-index')){
        content.classList.add('hide')
      }
    })  
  })
})
