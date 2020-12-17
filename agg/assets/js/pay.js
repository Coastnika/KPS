let typePay = document.querySelectorAll('.pay__form-radio-input')
let buttonPay = document.querySelector('.settings__payer-button-account')
let price = document.querySelector('.pay__form-price input')
let founds = document.querySelector('.pay__form-checkbox-input')
let upBalance = document.querySelectorAll('.button-send-form')

typePay.forEach(input => {
  input.addEventListener('input', function() {
    if(this.getAttribute('dataName') == 'account'){
      buttonPay.classList.add('hide')
    }
    else{
      buttonPay.classList.remove('hide')
    }
  })
})

founds.addEventListener('input', function(){
  if(this.checked){
    price.classList.remove('hide')
  }
  else{
    price.classList.add('hide')
  }
})

//validation price
upBalance.forEach(balance => {
  balance.addEventListener('click', (e) => {
    if(price.value.trim() == ''){
      e.preventDefault()
      price.classList.add('input-error')
    }
    else{
      return false
    }
  })
})


price.addEventListener('input', () => {
  price.classList.remove('input-error')
})