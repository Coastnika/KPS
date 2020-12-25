let cards = document.querySelectorAll('.admin__card')
let navItems = document.querySelectorAll('.admin__nav-item')
let navContainer = document.querySelector('.admin__card-nav')
let toggleContent = document.querySelector('.admin-wrapper')

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navContainer.classList.add('admin__card-nav--border')
  })
})

//Показывает табы 
cards.forEach(card => {
  card.addEventListener('click', e => {
    let toggleContent = card.querySelectorAll('.admin-wrapper')
    let target = e.target.closest('.admin__nav-item')
    let navItem = document.querySelectorAll('.admin__nav-item')

    toggleContent.forEach(content => {
      if(target.getAttribute('tab-index') == content.getAttribute('tab-index')){
        navItem.forEach(item => {
          item.classList.remove('admin__nav-item-active')
        })
        target.classList.add('admin__nav-item-active')
        content.classList.remove('hide')
      }
      else if(target.getAttribute('tab-index') != content.getAttribute('tab-index')){
        content.classList.add('hide')
      }
    })  
  })
})
