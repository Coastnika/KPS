// validation Form

let formInputs = document.querySelectorAll('.input-valid')
let formSubmits = document.querySelectorAll('.form__payer button[type="submit"]')
let errorText = document.querySelectorAll('.input-error-text')

formSubmits.forEach(submit => {
  submit.addEventListener('click', (e) => {
    
    formInputs.forEach((input, inputIndex) => {
      //Проверяем на наличие пустой строки
      if(input.value.trim() == ''){
        input.classList.add('input-error')
        errorText.forEach((text, textIndex) => {
          if(inputIndex == textIndex){
            text.classList.add('input-error-text--active')
          }
        })
        e.preventDefault()
      }
      else{
        return false
        //Асинхронная отправка формы
      }
    })
  })
})

//Убираем класс error если пользователь начал ввод
formInputs.forEach((input, inputIndex) => {
  input.addEventListener('input', () => {
    input.classList.remove('input-error')
      errorText.forEach((text, textIndex) => {
        if(textIndex == inputIndex){
          text.classList.remove('input-error-text--active')
        }
      })
  })
})

console.log('valid')