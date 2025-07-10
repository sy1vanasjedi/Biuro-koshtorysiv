//Sliders
//Our team slider
$(document).ready(function(){
  $('.our-team__slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-arrow.svg" alt="slide-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-arrow.svg" alt="slide-arrow"></button>',
    appendArrows: $('.our-team__info'),
  });
});

//Functions
//Open burger menu
function openBurgerMenu() {
  const burgerBtn = document.querySelector('.burger-menu');
  const menu = document.querySelector('.menu');

  burgerBtn.addEventListener("click", function () {
    menu.classList.toggle('active');
  })
}

//Call functions
openBurgerMenu();
