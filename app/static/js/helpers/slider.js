$(document).ready(function() {
    $('.main-slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:4000,
    
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

    
      $('.teachers-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
      slidesToScroll: 1,
      
      },
      $('.teachers-slider').addClass('created')
      );
  });