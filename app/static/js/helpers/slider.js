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

      $('.level-education-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
      slidesToScroll: 1,
      
      },
      $('.level-education-slider').addClass('created')
      );


      $('.teacher-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
      slidesToScroll: 1,
      
      },
      $('.teacher-slider').addClass('created')
      );

      $('.clients-list-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
      slidesToScroll: 1,
      
      },
      $('.clients-list-slider').addClass('created')
      );
  });