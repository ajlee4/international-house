$(document).ready(function(){
    $('#search-button').on('click',(e)=> {
        e.preventDefault()
        $('#search-input').slideToggle()
        $('#search-button .close-icon').toggle()
        $('#search-button .search-icon').toggle()
    })
})