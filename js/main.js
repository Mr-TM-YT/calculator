const numberButtons = document.querySelectorAll("button");
let calculationSpan = document.getElementById("calc");
let realCalculation = "";

/**
 * Does some calculations using eval (might be dangerous)
 * @param {number} num1
 * @param {number} num2
 * @param {string} operator
 */
function calc(num1, num2, operator) {
  return eval(`${num1} ${operator} ${num2}`);
}

function main() {
  for (let numberButton of numberButtons) {
    numberButton.addEventListener("click", () => {
      if (
        numberButton.value !== "=" &&
        numberButton.value !== "AC" &&
        numberButton.value !== "del"
      ) {
        // Because we're using the attribute value for buttons with operators (or anything that's not a number) we have to differentiate between between them with this if statement
        if (numberButton.classList.contains("operator")) {
          realCalculation += numberButton.value;
        } else {
          realCalculation += numberButton.innerText;
        }
      }
      if (numberButton.value === "=") {
        realCalculation = eval(calculationSpan.innerText);
      }
      if (numberButton.innerText === "AC") {
        realCalculation = "";
      }
      if (numberButton.value === "del") {
        realCalculation = realCalculation.slice(0, realCalculation.length - 1);
      }
      if (realCalculation === Infinity) {
        realCalculation = "Math Error";
      }
      calculationSpan.innerText = realCalculation;
    });
  }
}

main();
