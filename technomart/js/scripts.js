var purchase = document.querySelectorAll(".buy");
var cart = document.querySelector(".modal-cart");
var cartClose = cart.querySelector(".modal-content-close");

  for(i = 0; i < purchase.length; i++) {
  purchase[i].addEventListener("click", function(event) {
  event.preventDefault();
  cart.classList.add("modal-content-show");
  });
  }

  cartClose.addEventListener("click", function(event) {
    event.preventDefault();
    cart.classList.remove("modal-content-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (cart.classList.contains("modal-content-show")) {
        cart.classList.remove("modal-content-show");
      }
    }
  });


var link = document.querySelector(".write-them");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=user-name]");
var mail = popup.querySelector("[name=mail]");
var storage = localStorage.getItem("login");

  link.addEventListener("click", function (event){
    event.preventDefault();
    popup.classList.add("modal-content-show");
    login.focus();

    if(storage) {
      login.value = storage;
      mail.focus();
    } else {
      login.focus();
      }
    });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function(event) {
    if (!login.value || !mail.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("login", login.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      }
    }
  });

var mapOpen = document.querySelector(".open-maps");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
  });

  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (mapPopup.classList.contains("modal-content-show")) {
        mapPopup.classList.remove("modal-content-show");
      }
    }
  });

