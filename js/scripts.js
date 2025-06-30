$(document).ready(function(){
  $('.our-team__slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-arrow.svg" alt="slide-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-arrow.svg" alt="slide-arrow"></button>',
    appendArrows: $('.our-team__info'),
  });
});