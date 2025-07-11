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

//Contact us form
document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector('body');
  const form = document.getElementById('form');
  form.addEventListener("submit", formSend);

  //Send form
  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_sending');
      body.classList.add('_sending');
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_sending');
        body.classList.remove('_sending');
      } else {
        alert('Виявлено неполадки зі сторони сервера. Тривають відновлювальні роботи. Повторіть спробу пізніше');
      }
    } else {
      alert("Заповніть обов'язкові поля!");
    }
  }

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

//Form validate
function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll('._req');

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input);

    if(input.value === '') {
      formAddError(input);
      error++;
    }
  }
  return error;
}

//Functions helpers for form
function formAddError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
}

function formRemoveError(input) {
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}

//Call functions
openBurgerMenu();
closeMenuOnClick();
