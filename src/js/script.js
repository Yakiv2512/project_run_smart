$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 1200,
        adaptiveHeight: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/right.png"></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                arrows: false
              }
            },
        ] 
    });
  });