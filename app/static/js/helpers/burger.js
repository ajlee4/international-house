'use strict';


$(document).ready(function(){
    $('#header-mobile-menu').on('click', function (e) {
        e.preventDefault();
        $("a[data-wrap='sublist-wrap']").removeClass('open').siblings().slideUp()
        $('#mobile-body-tel-list').fadeOut()
          
        $(this).toggleClass('burger-close');
        $('.header__mobile-bottom').fadeToggle();
        $('body').toggleClass('header-menu-opened');
       
      });
})