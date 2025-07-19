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

//Close menu on click (mobile)
function closeMenuOnClick() {
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      menu.classList.remove('active');
    })
  })
}

//Send form
const ERROR_MESSAGE = 'ПОМИЛКА З БОКУ СЕРВЕРА!';
const SUCCESS_MESSAGE = 'ЗАЯВКУ ВІДПРАВЛЕНО!';
let colorMessage;

const form = document.querySelector('.form-data');
form.addEventListener("submit", formSend);

async function formSend(event) {
  event.preventDefault();

  const formData = new FormData(form);

  let response = await fetch('php/sendmail.php', {
    method: 'POST',
    body: formData,
    mode: "no-cors",
  });

  if (response.ok) {
    colorMessage = 'linear-gradient(to right, #00b09b, #96c93d)';
    showMessage(SUCCESS_MESSAGE, colorMessage);
    form.reset();
  } else {
    colorMessage = 'linear-gradient(to right, red, red)';
    showMessage(ERROR_MESSAGE, colorMessage);
  }
}

function showMessage(message, colorMessage) {
  Toastify({
    text: message,
    duration: 5000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: colorMessage,
    },
  }).showToast();
}

//Call functions
openBurgerMenu();
closeMenuOnClick();