
//Скрипт для добавления/удаления элементов в группе
let uploadGroup = document.querySelectorAll('.upload__group')

uploadGroup.forEach(group => {
  group.addEventListener('input', function(e) {
    let checkbox = group.querySelectorAll('.uplaod__item-action-del')
    //Проверяем клик и состояние чекбокса
    if(e.target == checkbox[0] && checkbox[0].checked){
      checkbox.forEach(checkbox => {
        if(!checkbox.checked){
          checkbox.click()
        }
      })
    }
    else if(e.target == checkbox[0] && !checkbox[0].checked){
      checkbox.forEach(checkbox => {
        if(checkbox.checked){
          checkbox.click()
        }
      })
    }
  })
  //Модальное окно

  //Поведение чекбоксов при наведении на группу
  group.addEventListener('mouseover', function(){
    let checkbox = group.querySelectorAll('.uplaod__item-action-del')
    checkbox.forEach(checkbox => {
      checkbox.classList.remove('visibility')
    })
  })

  group.addEventListener('mouseout', function(){
    let checkbox = group.querySelectorAll('.uplaod__item-action-del')
    checkbox.forEach(checkbox => {
      checkbox.classList.add('visibility')
    })
  })
})

//Скрипт для активных и не активных элементов
let uploadDelGroup = document.querySelectorAll('.uplaod__item-action-del')

uploadDelGroup.forEach(checkbox => {
  checkbox.addEventListener('input', function(e){
    let parentElem = e.target.closest('.uplaod__item-action').nextSibling.parentElement
    let childElems = parentElem.children
    
    if(checkbox.checked){
      for(let i = 1; i < childElems.length - 1; i++){
        childElems[i].classList.add('opacity')
      }
    }
    else if(!checkbox.checked){
      for(let i = 1; i < childElems.length - 1; i++){
        childElems[i].classList.remove('opacity')
      }
    }
  })
})


//Моадльное окно - удаление группы
let toggleModal = document.querySelectorAll('.upload__modal')
let modaDelete = document.querySelector('.modal__delete')

let confirmModal = document.querySelector('.modal__btn-yes')
let cancelModal = document.querySelectorAll('.delete-close')

toggleModal.forEach(toggle => {
  toggle.addEventListener('input', function(e) {
    let action = e.target

    if(action.checked){
      modaDelete.classList.remove('hide')
    }
 

    confirmModal.addEventListener('click', () => {
      modaDelete.classList.add('hide')
    })

    cancelModal.forEach(cancelModal => {
      cancelModal.addEventListener('click', () => {
        modaDelete.classList.add('hide')
        action.click()
      })
    })

    modaDelete.addEventListener('click', function(e){
      if(!e.target.closest('.modal__delete-wrap')){
        modaDelete.classList.add('hide')
        action.click()
      }
    })
  })
})


