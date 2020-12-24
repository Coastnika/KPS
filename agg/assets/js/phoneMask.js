var elements = document.getElementsByClassName('addcompany__form-phone');
    for (var i = 0; i < elements.length; i++) {
      new IMask(elements[i], {
        mask: '+{7}(000)000-00-00',
      });
    }