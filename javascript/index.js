/*
  - Overall good progress
  - Few minor issues
  - Name the functions meaningfully 
  - Use constants those variables are not chagning 
*/

const billInput = document.getElementById("bill-id");
const tipInput = document.getElementById("tip-id");
const peopleInput = document.getElementById("people-id");
const allInputs = document.querySelectorAll("input[type='number']");
const tipResultText = document.getElementById("tip-amount-result-id");
const totalResultText = document.getElementById("total-amount-result-id");
const resetbtn = document.getElementById("reset-btn-id");

resetbtn.addEventListener("click", () => {
  allInputs.forEach((input) => (input.value = ""));
  totalResultText.innerHTML = `${0}`;
  tipResultText.innerHTML = `${0}`;
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    cal();
  }
});

// this name doesn't follow clean code practices, what it stands for??
// e.g. call it `calculateTip()`
function cal() {
  // this all should const
  let billAmount = billInput.value;
  let tipAmount = tipInput.value / 100;
  let tipTotal = billAmount * tipAmount;
  let totalPerPeople = tipTotal / peopleInput.value;
  totalResultText.innerHTML = `${tipTotal.toFixed(1)}`;
  tipResultText.innerHTML = `${totalPerPeople.toFixed(1)}`;
}
