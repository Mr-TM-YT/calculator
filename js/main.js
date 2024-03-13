const numberButtons = document.querySelectorAll("button");
let calculationSpan = document.getElementById("calc");
let realCalculation = "";

for (let numberButton of numberButtons) {
  numberButton.addEventListener("click", () => {
    if (
      numberButton.value !== "=" &&
      numberButton.innerText !== "AC" &&
      numberButton.value !== "del"
    ) {
      if (numberButton.classList.contains("operator")) {
        realCalculation += numberButton.value;
      } else {
        realCalculation += numberButton.innerText;
      }
    }
    if (numberButton.innerText === "=") {
      realCalculation = eval(calculationSpan.innerText);
    }
    if (numberButton.innerText === "AC") {
      realCalculation = "";
    }
    if (numberButton.value === "del") {
      realCalculation = realCalculation
        .toString()
        .slice(0, realCalculation.length - 1);
      console.log(realCalculation.slice(0, realCalculation.length - 1));
    }
    if (realCalculation === Infinity) {
      realCalculation = "Math Error";
    }
    calculationSpan.innerText = realCalculation;
  });
}
