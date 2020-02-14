$(document).ready(function(){
    $('#search-button').on('click',(e)=> {
        e.preventDefault()
        $('#search-input').slideToggle()
        $('#search-button .close-icon').toggle()
        $('#search-button .search-icon').toggle()
    })


    $("a[data-close='close-popup']").on('click',(e)=> {
        e.preventDefault()
        Popups.hide()
    })

    $('#mobile-tel').on('click',(e)=> {
        e.preventDefault()
        $('#mobile-body-tel-list').fadeIn(300)   
        
    })

    $('#close-mobile-tel').on('click',(e)=> {
        e.preventDefault()
        $('#mobile-body-tel-list').fadeOut(300)  
        
    })
})