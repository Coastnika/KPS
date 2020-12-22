let cards = document.querySelectorAll('.admin__card')
// let toggleTab = document.querySelectorAll('.admin__nav-item')
let toggleContent = document.querySelector('.admin-wrapper')


cards.forEach(card => {
  card.addEventListener('click', e => {
    let toggleContent = card.querySelectorAll('.admin-wrapper')
    let target = e.target.closest('.admin__nav-item')

    toggleContent.forEach(content => {
      if(target.getAttribute('tab-index') == content.getAttribute('tab-index')){
        content.classList.remove('hide')
      }
      else if(target.getAttribute('tab-index') != content.getAttribute('tab-index')){
        content.classList.add('hide')
      }
    })
  })
})
