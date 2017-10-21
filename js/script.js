"use strict";

window.initMap = function() {
  var myLatLng = {lat: 59.938800, lng: 30.3229900};

        // Карта
  var map = new google.maps.Map(document.querySelector(".contacts__map") , {
    center: {lat: 59.939400, lng: 30.3229900},
    scrollwheel: true,
    zoom: 16
  });

        // Маркер
  var image = "img/map-pin.svg";
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    icon: image,
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: "MishkaShop"
  });
}

// mobile menu
var mainNav = document.querySelector(".main-nav");
var toggleBtn = mainNav.querySelector(".main-nav__toggle")
mainNav.classList.remove("main-nav--nojs");
function toggleMenu() {
  mainNav.querySelector(".main-nav__dropdown").classList.toggle("main-nav__dropdown-show");
  toggleBtn.classList.toggle("main-nav__toggle--open");
}
toggleBtn.onclick = toggleMenu;

//Попап
if(document.querySelector(".main-block__modal-btn")) {
  var link = document.querySelectorAll(".main-block__modal-btn");
  var popupContent = document.querySelector(".modal-dialog");
  var popupOverlay = document.querySelector(".modal-overlay");
  [].forEach.call(link, function(item) { //для IE
    item.addEventListener("click", function(event) {
      event.preventDefault();
      popupContent.classList.add("modal-dialog--open");
      popupOverlay.classList.add("modal-overlay--open");
    });
  });

  popupOverlay.addEventListener("click", function(event) {
    event.preventDefault();
    popupContent.classList.remove("modal-dialog--open");
    popupOverlay.classList.remove("modal-overlay--open");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      popupContent.classList.remove("modal-dialog--open");
      popupOverlay.classList.remove("modal-overlay--open");
    }
  });
};

// slider with add/remove style
if(document.querySelector(".slider")) {
  var slider = document.querySelector(".slider");
  var slides = slider.querySelectorAll("blockquote");
  var currentSlide = 0;
  slides[1].style.display = "none";
  function slideToggle(toggle) {
    slides[currentSlide].style.display = "none";
    currentSlide += toggle;
    if(slides.length === currentSlide) currentSlide = 0;
    if(currentSlide < 0) currentSlide = slides.length - 1;
    slides[currentSlide].style.display = "block";
  };
  slider.querySelector(".slider__toggle--next").addEventListener("click", function(event) {
    slideToggle(1);
  });
  slider.querySelector(".slider__toggle--prev").addEventListener("click", function(event) {
    slideToggle(-1);
  });
};
