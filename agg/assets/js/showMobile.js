let mobileBlock = document.querySelector('.settings__upload-file-mobile')
let mobileCheckbox = document.querySelector('.banner__upload-label input')

mobileCheckbox.addEventListener('input', function(){
  if(this.checked){
    mobileBlock.classList.remove('hide')
  }
  else{
    mobileBlock.classList.add('hide')
  }
})