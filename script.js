const display = document.querySelector(".results");
const numbers = document.querySelectorAll(".calc-buttons button");

let num1 = "";
let num2 = "";
let operation = "";
let result = 0;

const add = (a, b) => parseInt(a) + parseInt(b);
const subtract = (a, b) => parseInt(a) - parseInt(b);
const multiply = (a, b) => parseInt(a) * parseInt(b);
const divide = (a, b) => {
  if (b === "0") {
    return "Can't divide by 0";
  } else {
    return parseInt(a) / parseInt(b);
  }
};
numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (!isNaN(e.target.id)) {
      inputNumber(e.target.id);
    } else if (e.target.classList.contains("operator")) {
      inputOperation(e.target.innerHTML);
    } else if (e.target.id === "equal-to") {
      if (num2.length !== 0 && operation.length !== 0) {
        operate(operation);
      }
    }
  });
});

const inputNumber = (num) => {
  const screenNumber = display.textContent;
  if (screenNumber.length < 11) {
    if (operation === "") {
      num1 += num;
      display.textContent = parseInt(num1).toString();
      console.log("num1", num1);
    } else {
      num2 += num;
      display.textContent =
        parseInt(screenNumber).toString() +
        operation +
        parseInt(num2).toString();
      console.log("num2", num2);
    }
  }
};

const inputOperation = (op) => {
  if (display.textContent.length < 11) {
    if (num1.length !== 0) {
      if (operation.length === 0) {
        operation = op;
        display.textContent += operation;
        console.log("operator", operation);
      }
    }
  }
};

const operate = (op) => {
  switch (op) {
    case "+":
      result = add(num1, num2);
      display.textContent = result;
      numbers.forEach((num) => {
        num.addEventListener("click", (e) => {
          if (e.target.classList.contains("operator")) {
            num1 = result;
            inputNumber(result);
          }
        });
      });
      num1 = "";
      num2 = "";
      operation = "";
      break;
    case "-":
      result = subtract(num1, num2);
      display.textContent = result;
      num1 = result;
      num2 = "";
      operation = "";
      break;
    case "*":
      result = multiply(num1, num2);
      display.textContent = result;
      num1 = result;
      num2 = "";
      operation = "";
      break;
    case "/":
      result = divide(num1, num2);
      display.textContent = result;
      num1 = result;
      num2 = "";
      operation = "";
      break;
  }
};
