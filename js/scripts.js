//Sliders
//Our team slider
$(document).ready(function () {
  $('.our-team__slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-arrow.svg" alt="slide-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-arrow.svg" alt="slide-arrow"></button>',
    appendArrows: $('.our-team__info'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
});

//Variables
const burgerBtn = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');

//Functions
//Open burger menu
function openBurgerMenu() {
  burgerBtn.addEventListener("click", function () {
    menu.classList.toggle('active');
  })
}

function closeMenuOnClick() {
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      menu.classList.remove('active');
    })
  })
}

//Call functions
openBurgerMenu();
closeMenuOnClick();
