const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const operator = ["+", "-", "*", "/"];
let currentInput = "";

function appendValue(number) {
  currentInput += number;
  display.innerText = currentInput;
}

function clearValue() {
  currentInput = "";
  display.innerText = currentInput;
}

function calculate() {
  const isValid = validate();
  if (!isValid) {
    currentInput = eval(currentInput).toString();
    display.innerText = currentInput;
  }
}

function validate() {
  for (let i = 0; i < operator.length; i++) {
    if (currentInput.startsWith(operator[i])) currentInput = "";
    display.innerText = "ERROR";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    switch (value) {
      case "C":
        clearValue(value);
        break;
      case "=":
        calculate(value);
        break;
      default:
        appendValue(value);
        break;
    }
  });
});
