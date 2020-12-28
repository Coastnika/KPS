let dispatchCard = document.querySelectorAll('.dispatch__card')

dispatchCard.forEach(card => {
  card.addEventListener('input', function(e){
    
    let dispatchInput = card.querySelector('.dispatch__input')
    let dispatchSave = card.querySelector('.dispatch__save')

    if(dispatchInput.value.trim() != ''){
      dispatchSave.classList.remove('hide')
    }
    else{
      dispatchSave.classList.add('hide')
    }

    dispatchSave.addEventListener('click', function() {
      dispatchSave.classList.add('hide')
      dispatchInput.setAttribute('disabled', 'disabled')
    })
    
  })
})