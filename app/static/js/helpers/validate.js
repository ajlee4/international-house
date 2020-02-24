$('#header-subform').validate({
  rules: {
    name: "required",
    phone:"required",
    email: {
     
      email: true
    }
  },
  messages: {
    phone:'Это поле не должно быть пустым',
    name: "Это поле не должно быть пустым",
    email: {
      email: "Введите корректный email адрес name@domain.com"
    }
  },
  submitHandler: function(form) {
    $(form).ajaxSubmit(); 
  }
})

$('#signup-form').validate({
  rules: {
   
    phone:"required",
    passport_id:'required',
    ielts:'required',
    date:'required',
    email: {
     
      email: true
    }
  },
  messages: {
    phone:'Это поле не должно быть пустым',
    passport_id:'Это поле не должно быть пустым',
    ielts:'Это поле не должно быть пустым',
    date:'Это поле не должно быть пустым',
    email: {
      email: "Введите корректный email адрес name@domain.com"
    }
  },

})