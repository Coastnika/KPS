let typePay = document.querySelectorAll('.pay__form-radio-input')
let buttonPay = document.querySelector('.settings__payer-button-account')

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