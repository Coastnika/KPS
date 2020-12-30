// //validation contacts
let accountingInputs = document.querySelectorAll('.accounting__contacts-input')
let buttonSend = document.querySelector('.submit-disable')
let accountingForm = document.querySelector('.accounting__contacts-form')


accountingForm.addEventListener('input', () => {
  let valid = 0;

  accountingInputs.forEach(input => {
    if(input.value.trim() != ''){
      valid += 1
    }
    else{
      valid = 0
    }
    console.log(valid)
  })

  if(valid >= accountingInputs.length){
    buttonSend.classList.add('submit-disable-hide')
  }
})

buttonSend.addEventListener('click', e => {
  e.preventDefault()
})

// logic 
let accountingButton = document.querySelector('.accounting-button')
let question = document.querySelector('.accounting__question')
let questionAccept = document.querySelector('.accounting__question-accept')
let questionDecline = document.querySelector('.accounting__question-decline')
let sendAddress = document.querySelector('.accounting__send')
let accountingContacts = document.querySelector('.accounting__contacts')
let accountingSeccessful = document.querySelector('.accounting__successful')
let getOriginal = document.querySelector('.get-original')

//1
accountingButton.addEventListener('click', function(){
  toggleContent(this, question)
})
//2
questionAccept.addEventListener('click', function() {
  toggleContent(question, sendAddress)
  asyncRequire(sendAddress, accountingSeccessful)
})
//3
questionDecline.addEventListener('click', function() {
  toggleContent(question, accountingContacts)
})
//4
getOriginal.addEventListener('click', () => {
  toggleContent(accountingContacts, sendAddress)
  asyncRequire(sendAddress, accountingSeccessful)
})


function toggleContent(hide, show){
  hide.classList.add('hide')
  show.classList.remove('hide')
}


// имитация запроса на сервер
function asyncRequire(hide, show) {
  setTimeout(() => {
    hide.classList.add('hide')
    show.classList.remove('hide')
  }, 3000)
}

