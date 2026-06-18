const display = document.querySelector(".results");
const screenNumber = display.innerHTML;
const buttons = document.querySelectorAll(".calc-buttons button");

let num1 = "";
let num2 = "";
let operation = "";

const add = (a, b) => parseInt(a) + parseInt(b);
const subtract = (a, b) => parseInt(a) - parseInt(b);
const multiply = (a, b) => parseInt(a) * parseInt(b);
const divide = (a, b) => {
  if (b === "0") {
    return "Can't divide by 0";
  } else {
    parseInt(a) / parseInt(b);
  }
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!isNaN(e.target.id)) {
      inputNumber(e.target.id);
    }
    if (num1.length !== 0 && operation === "") {
        if (e.target.classList.contains("operator")) {
            operation += e.target.innerHTML;
    }
    }
    if( num1.length !== 0 && num2.length !== 0 && operation.length !== 0) {
        if(e.target.id === "equal-to") {
            operate(operation);
        }
    }
  });
});

const inputNumber = (num) => {
  if (display.innerHTML < 12) {
    if (operation === "") {
      num1 += num;
      display.textContent = num1;
    } else {
        num2 += num;
    }
    display.innerHTML = num1
  }
};


const operate = (op) => {
  switch (op) {
    case "+":
      console.log(add(num1, num2));
      break;
    case "-":
      console.log(subtract(num1, num2));
      break;
    case "*":
      console.log(multiply(num1, num2));
      break;
    case "/":
      console.log(divide(num1, num2));
      break;
  }
};
