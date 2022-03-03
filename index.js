const numbers = document.querySelectorAll(".number");
const result = document.querySelector(".result");
const reset = document.querySelector(".ac");
const operators = document.querySelectorAll(".operator");

let num_click_count = 0;
let operator_clicked = false;
let input_before = 0;
let input = 0;
let current_operator = "";

// AC 클릭 이벤트
reset.addEventListener("click", (e) => {
  result.innerText = "0";
  num_click_count = 0;
  operator_clicked = false;
  input_before = 0;
  input = 0;
  current_operator = "";
});

// 숫자 클릭 이벤트
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    if (num_click_count === 0) {
      result.innerText = "";
    }
    result.innerText += numbers[i].innerText;
    num_click_count++;
  });
}

// 연산자 클릭 이벤트
for (let i = 0; i < operators.length; i++) {
  switch (operators[i].innerText) {
    case "=":
      operators[i].addEventListener("click", (e) => {
        if (operator_clicked) {
          input = Number(result.innerText);
        }

        switch (current_operator) {
          case "+":
            result.innerText = input_before + input;
            break;

          case "-":
            result.innerText = input_before - input;
            break;

          case "/":
            result.innerText = input_before / input;
            break;

          case "*":
            result.innerText = input_before * input;
            break;

          default:
            break;
        }

        operator_clicked = false;
        current_operator = "";
        num_click_count = 0;
        input = 0;
        input_before = 0;
      });
      break;

    case "÷":
      operators[i].addEventListener("click", (e) => {
        if (!operator_clicked) {
          input_before = Number(result.innerText);
        }
        operator_clicked = true;
        num_click_count = 0;
        current_operator = "/";
      });
      break;

    case "+":
      operators[i].addEventListener("click", (e) => {
        if (!operator_clicked) {
          input_before = Number(result.innerText);
        }
        operator_clicked = true;
        num_click_count = 0;
        current_operator = "+";
      });
      break;

    case "-":
      operators[i].addEventListener("click", (e) => {
        if (!operator_clicked) {
          input_before = Number(result.innerText);
        }
        operator_clicked = true;
        num_click_count = 0;
        current_operator = "-";
      });
      break;

    case "×":
      operators[i].addEventListener("click", (e) => {
        if (!operator_clicked) {
          input_before = Number(result.innerText);
        }
        operator_clicked = true;
        num_click_count = 0;
        current_operator = "*";
      });
      break;

    default:
      break;
  }
}
