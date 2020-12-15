// switch
let switchInput = document.querySelectorAll('.company__switch-input')
let dotSwitch = document.querySelectorAll('.company__switch-handle')
let switchLabel = document.querySelectorAll('.company__switch-label')

switchInput.forEach((input, inputIndex) => {
  input.addEventListener('input', () => {
    dotSwitch.forEach((dot, dotIndex) =>{
      if(inputIndex === dotIndex){
        dot.classList.toggle('company__switch-handle--active')
      }
    })

    switchLabel.forEach((label, labelIndex) =>{
      if(inputIndex === labelIndex){
        label.classList.toggle('company__switch-label--active')
      }
    })
  })
})

