var navMain = document.querySelector(".header__menu");
var navToggle = document.querySelector(".touch-button");

  navMain.classList.remove("header__menu--nojs");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("header__menu--closed")) {
      navMain.classList.remove("header__menu--closed");
      navMain.classList.add("header__menu--opened");
    }
    else {
      navMain.classList.add("header__menu--closed");
      navMain.classList.remove("header__menu--opened");
    }
  });

var link = document.querySelector(".button--order");
var formOrder = document.querySelector(".modal");
var cartClose = document.querySelector(".modal__close");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    formOrder.classList.add("modal--show");
  });

  cartClose.addEventListener("click", function(event) {
    event.preventDefault();
    formOrder.classList.remove("modal--show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (formOrder.classList.contains("modal--show")) {
        formOrder.classList.remove("modal--show");
      }
    }
  });
