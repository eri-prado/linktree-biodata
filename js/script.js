'use strict';

// DESABILITY JS

document.documentElement.classList.add('js');

// YEAR FOOTER
const currentYear = new Date();
const yearFooter = document.querySelector('.year');
yearFooter.innerText = currentYear.getFullYear();

// ANIMATE

var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
  setInterval(show, 25);
}

function show() {
  var body = document.getElementById('body');
  opacity = Number(window.getComputedStyle(body).getPropertyValue('opacity'));
  if (opacity < 1) {
    opacity = opacity + 0.1;
    body.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}
