"use strict";

document.addEventListener("DOMContentLoaded", () => {

  if(document.querySelector('.burger')) {
      const burgerButton = document.querySelector('.burger');

      burgerButton.addEventListener('click', toggleBurger);

      function toggleBurger() {
        const headerMenu = document.querySelector('.header__menu'),
          headerAuth = document.querySelector('.header__auth');

        burgerButton.classList.toggle('active');
        headerMenu.classList.toggle('active');
        headerAuth.classList.toggle('active');
        document.body.classList.toggle('lock');
      }
  }

  




});