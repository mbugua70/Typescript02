"use strict";
const headingEl = document.getElementById("heading-title");
console.log(headingEl.innerText);
const form = document.querySelector(".news-form");
console.log(form);
const type = document.querySelector("#sub_1_1");
const details = document.querySelector("#sub_1_2");
const amount = document.querySelector("#sub_1_3");
const toFrom = document.querySelector("#sub_1_4");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("working");
    console.log(type, details, amount, toFrom);
    console.log(type.value, details.value, amount.value, toFrom.value);
});
