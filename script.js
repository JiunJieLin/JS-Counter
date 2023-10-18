"use strict";
const setupCounter = function (buttons, numElement, initialValue) {
  const decrease = buttons.decrease;
  const reset = buttons.reset;
  const increase = buttons.increase;

  let count = initialValue;
  decrease.addEventListener("click", function () {
    count--;
    numElement.innerHTML = count;
  });

  increase.addEventListener("click", function () {
    count++;
    numElement.innerHTML = count;
  });
  reset.addEventListener("click", function () {
    count = 0;
    numElement.innerHTML = count;
  });
};
const buttons1 = {
  decrease: document.getElementById("btn-decrease"),
  increase: document.getElementById("btn-increase"),
  reset: document.getElementById("btn-reset"),
};
const numElement1 = document.querySelector(".num");
setupCounter(buttons1, numElement1, 100);

const buttons2 = {
  decrease: document.getElementById("btn2-decrease"),
  increase: document.getElementById("btn2-increase"),
  reset: document.getElementById("btn2-reset"),
};
const numElement2 = document.querySelector(".num2");
setupCounter(buttons2, numElement2, 200);
