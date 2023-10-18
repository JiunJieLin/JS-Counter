"use strict";
const decrease = document.getElementById("btn-decrease");
const reset = document.getElementById("btn-reset");
const increase = document.getElementById("btn-increase");

const num = document.querySelector(".num");

let count = 100;
decrease.addEventListener("click", function () {
  count--;
  num.innerHTML = count;
});
increase.addEventListener("click", function () {
  count++;
  num.innerHTML = count;
});
reset.addEventListener("click", function () {
  count = 0;
  num.innerHTML = count;
});

const decrease2 = document.getElementById("btn2-decrease");
const reset2 = document.getElementById("btn2-reset");
const increase2 = document.getElementById("btn2-increase");

const num2 = document.querySelector(".num2");
let counter = 100;
decrease2.addEventListener("click", function () {
  counter--;
  num2.innerHTML = counter;
});
increase2.addEventListener("click", function () {
  counter++;
  num2.innerHTML = counter;
});
reset2.addEventListener("click", function () {
  counter = 0;
  num2.innerHTML = counter;
});
