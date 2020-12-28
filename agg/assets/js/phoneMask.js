var elements = document.getElementsByClassName('addcompany__form-phone');
    for (var i = 0; i < elements.length; i++) {
      new IMask(elements[i], {
        mask: '+{7} (000) 000-00-00',
      });
    }

let phoneInputs = document.querySelectorAll('.addcompany__form-phone')

phoneInputs.forEach(phone => {
  phone.addEventListener('keypress' , function(e){
    console.log(this.value.length)
    if(this.value.length == 0 && e.key == 8){
      e.preventDefault()
      this.value += '+7 '
    }
  })
})