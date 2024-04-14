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
    calculate();
  }
});

function calculate() {
  if(peopleInput.value === "" || tipInput.value === "" || billInput.value === "" ) {
    return
  } 
  const billAmount = billInput.value;
  const tipAmount = tipInput.value / 100;
  const tipTotal = billAmount * tipAmount;
  const totalPerPeople = tipTotal / peopleInput.value;
  totalResultText.innerHTML = `${tipTotal.toFixed(1)}` + "$";
  tipResultText.innerHTML = `${totalPerPeople.toFixed(1)}` + "$";
}
