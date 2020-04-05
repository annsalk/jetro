$(function(){
    $('.slider__main').slick({
    zIndex: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider__carousel',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',    
    });

    $('.slider__carousel').slick({
      slidesToShow: 6,
      slidesToScroll: 6,
      asNavFor: '.slider__main',
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      variableWidth: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1001,
          settings: {
            slidesToShow: 5,
            
          }
        },

        {
          breakpoint: 901,
          settings: {
            slidesToShow: 4,
            
          }
        },
      
      ]
   

    });

    $('.header__menu-btn').on('click', function(){
      $('.header__menu > ul').slideToggle();
  });

 



});

