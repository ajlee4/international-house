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



    $("a[data-close='close-popup']").on('click',(e)=> {
        e.preventDefault()
        Popups.hide()
    })

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
        
    })

    $('#close-mobile-tel').on('click',(e)=> {
        e.preventDefault()
        $('#mobile-body-tel-list').fadeOut(300)  
        
    })
})