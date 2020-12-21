let selectTitle = document.querySelectorAll('.custom__select-title')
let selectContent = document.querySelectorAll('.custom__select-content')
let selectText = document.querySelectorAll('.custom__select-text')
let selectCustom = document.querySelectorAll('.custom__select')

selectContent.forEach((content, contentIndex) => {
  content.addEventListener('click', function(e) {
    if(e.target != this){
      selectTitle.forEach((title, titleIndex) => {
        if(titleIndex == contentIndex){
          title.textContent = e.target.textContent
        }
      })
      selectTitle.forEach((select) => {
        select.classList.remove('custom__select-title--active')
      })
      content.classList.toggle('hide')
    }
  })
})

selectTitle.forEach((title, titleIndex) => {
  title.addEventListener('click', function(){
    selectContent.forEach((content, contentIndex) => {
      if(titleIndex == contentIndex){
        content.classList.toggle('hide')
      }
      else{
        content.classList.add('hide')
      }
    })
    selectTitle.forEach((select, selectIndex) => {
      if(titleIndex == selectIndex){
        select.classList.toggle('custom__select-title--active')
      }
      else{
        select.classList.remove('custom__select-title--active')
      }
    })
  })
})
