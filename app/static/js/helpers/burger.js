'use strict';


$(document).ready(function(){
    $('#header-mobile-menu').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('burger-close');
        // $('.header__mobile-menu').fadeToggle();
        // $('body').toggleClass('header-menu-opened');
       
      });
})