const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".button");
let equation = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "C") {
      equation = "";
      result.value = "";
    } else if (button.value === "=") {
      result.value = eval(equation);
      equation = "";
    } else {
      equation += button.value;
      result.value = equation;
    }
  });
});