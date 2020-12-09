let inputCompany = document.querySelectorAll('.company-input')

inputCompany.forEach(input => {
  input.addEventListener('keydown', e =>{
    if(e.code == 'Enter'){
      e.preventDefault()
    }
  })
})

window.addEventListener('click', () => {
  inputCompany.forEach((input,index) => {
    if(input.textContent.length <= 1){
      input.textContent = `Кампания ${index + 1}`
    }
  })
});
