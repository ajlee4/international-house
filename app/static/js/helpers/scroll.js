
    if (document.body.clientWidth > 1024) {
        $(window).scroll(function() {
            var height = $(window).scrollTop();
            if(height > 50){
            $('header').addClass('header-fixed');
            $('.header__top').slideUp(200)
           
            } else{
            $('header').removeClass('header-fixed');
            $('.header__top').slideDown(200)
            }
            });
    }