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
