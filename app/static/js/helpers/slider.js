$(document).ready(function() {
    $('.main-slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
    slidesToScroll: 1,
    
    },
    $('.main-slider').addClass('created')
    );

    $('.reviews-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
      slidesToScroll: 1,
      
      },
      $('.reviews-slider').addClass('created')
      );

    
  });