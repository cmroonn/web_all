'use strict';

document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.querySelector(".overlay");
  {
    var bonusButton = document.querySelectorAll(".content__main-bonus");
    bonusButton.forEach(function (el) {
      el.addEventListener("mouseover", function () {
        el.closest(".bonus-wrapper").children[1].classList.add("show");
      });
      el.addEventListener("mouseout", function () {
        el.closest(".bonus-wrapper").children[1].classList.remove("show");
      });
      el.addEventListener("click", function (e) {
        e.preventDefault();
      });
    });
  } // Sign up popup settings 

  {
    var button = document.querySelectorAll(".content__main-btn");
    var popup = document.querySelector(".signup-popup");
    var nextButton = document.getElementById("signUpChannelConfirm");
    var channelsWindow = document.getElementById("signUpChannel");
    var formWindow = document.getElementById("signUpForm");
    var close = document.querySelector(".signup-popup .close-popup");
    var socials = document.querySelectorAll(".social");
    var input = document.querySelectorAll(".signup-popup__input");
    var label = document.querySelectorAll(".signup-popup__input label");
    var thanksPopup = document.querySelector(".success-popup");
    var specialPopup = document.querySelector(".special-popup");
    button.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        overlay.classList.add("show");
        popup.classList.add("show");
        specialPopup.classList.remove("show");
      });
    });
    nextButton.addEventListener("click", function (e) {
      channelsWindow.classList.remove("show");
      formWindow.classList.add("show");
    });
    close.addEventListener("click", function (e) {
      popup.classList.remove("show");
      overlay.classList.remove("show");
    });
    socials.forEach(function (element) {
      element.addEventListener("click", function () {
        socials.forEach(function (el) {
          el.querySelector(".social-active").classList.remove("show");
          el.querySelector(".social-inactive").classList.add("show");
        });
        element.querySelector(".social-inactive").classList.remove("show");
        element.querySelector(".social-active").classList.add("show");
        nextButton.removeAttribute("disabled");
      });
    });
    input.forEach(function (el) {
      el.addEventListener("click", function () {
        input.forEach(function (elem) {
          elem.classList.remove("active");
        });
        el.classList.add("active");
        console.log(el.children[0].focus);
      });
    });
  } // Success popup Settings

  {
    var _close = document.querySelector(".success-popup .close-popup");

    var _popup = document.querySelector(".success-popup");

    _close.addEventListener("click", function (e) {
      _popup.classList.remove("show");

      overlay.classList.remove("show");
    });
  } // Special popup Settings 

  {
    var counter = function counter(time) {
      count.innerHTML = time;

      function getCount() {
        time -= 1;
        count.innerHTML = time;

        if (time === 0) {
          _popup2.classList.remove("show");

          overlay.classList.remove("show");
        }
      }

      return getCount;
    };

    var _popup2 = document.querySelector(".special-popup");

    var count = document.getElementById("counter");

    var _close2 = document.querySelector(".special-popup .close-popup");

    ;
    var startCounter = counter(60);

    var popupOpen = function popupOpen() {
      _popup2.classList.add("show");

      overlay.classList.add("show");
      setInterval(startCounter, 1000);
    };

    setTimeout(popupOpen, 6000);

    _close2.addEventListener("click", function (e) {
      _popup2.classList.remove("show");

      overlay.classList.remove("show");
    });
  } // Dialogs settings 

  {
    var dialogs = document.querySelectorAll(".point-dialog");
    var points = document.querySelectorAll(".point");
    points.forEach(function (el) {
      el.addEventListener("mouseover", function () {
        dialogs.forEach(function (dialog) {
          dialog.classList.remove("show");

          if (dialog.getAttribute("data-key") === el.getAttribute("data-key")) {
            dialog.classList.add("show");
          }
        });
      });
      el.addEventListener("mouseout", function () {
        dialogs.forEach(function (dialog) {
          dialog.classList.remove("show");
        });
      });
    });
  }
  {
    var hoverElem = document.querySelector(".content__info-name");
    var hidden = document.querySelector(".content__info-hidden");
    hoverElem.addEventListener("mouseover", function () {
      hidden.classList.add("show");
    });
    hoverElem.addEventListener("mouseout", function () {
      hidden.classList.remove("show");
    });
  } // Form settings 

  {
    var phoneMask = IMask(document.getElementById('phone-mask'), {
      mask: '+{7}(000)000-00-00'
    });
  } // Call video popup

  {
    var buttons = document.querySelectorAll(".content__info-invite");

    var _popup3 = document.querySelector(".video-popup");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        _popup3.classList.add("show");
      });
    });

    _popup3.querySelector(".close-popup").addEventListener("click", function () {
      _popup3.classList.remove("show");
    });
  }
});