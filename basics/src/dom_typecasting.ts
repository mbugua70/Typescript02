const headingEl = document.getElementById("heading-title")!;

console.log(headingEl.innerText);

const form = document.querySelector(".news-form") as HTMLFormElement;
console.log(form);

const type = document.querySelector("#sub_1_1") as HTMLSelectElement;
const details = document.querySelector("#sub_1_2") as HTMLInputElement;
const amount = document.querySelector("#sub_1_3") as HTMLInputElement;
const toFrom = document.querySelector("#sub_1_4") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log("working");
  console.log(type, details, amount, toFrom);
  console.log(type.value, details.value, amount.value, toFrom.value);
});
