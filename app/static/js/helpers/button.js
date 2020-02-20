$(document).ready(function(){

    if (document.body.clientWidth > 1024) {
        $('#search-button').on('click',(e)=> {
            console.log($(this))
            e.preventDefault()
            $('#search-input').slideToggle()
            $('#search-button .close-icon').toggle()
            $('#search-button .search-icon').toggle()
        })
    }




    $("a[data-wrap='sublist-wrap']").on('click',(e)=> {
        const target = $( event.target );
        e.preventDefault()
        
        target.toggleClass('open')
        target.siblings().slideToggle()
    })

    $('#mobile-tel').on('click',(e)=> {
        e.preventDefault()
        $('.header__mobile-bottom').fadeOut();
        $('#header-mobile-menu').removeClass('burger-close');
        $('#mobile-body-tel-list').fadeIn(300)   
        $('body').removeClass('header-menu-opened');
        
    })

    $('#close-mobile-tel').on('click',(e)=> {
        e.preventDefault()
        $('#mobile-body-tel-list').fadeOut(300)  
        
    })


    $('.show-text-toggle').on('click', function(e){

        $(this).toggleClass('active')
        const $this = $(this).siblings('.show-text');
        const $text = $(this);
        $this.slideToggle('fast', function () {
            if ($(this).is(':visible')) {
                $text.text('Скрыть');
            } else {
                $text.text('Читать далее');
            }
        });
        
    })
})