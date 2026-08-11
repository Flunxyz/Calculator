
const add  = ((number1, number2) => number1 + number2);
const subtract  = ((number1, number2) => number1 - number2);
const multiply  = ((number1, number2) => number1 * number2);
const divide  = ((number1, number2) => number1 / number2);

const displayText = document.querySelector('#displayP');
const buttonNumbers = document.querySelectorAll('.num');
const operations = document.querySelectorAll('.operation');
const buttons = document.querySelectorAll('button');

let total = [];
let number1 = [];
let number2 = [];
let operator = [];
let firstNumber = true;
let operatorActive = false
let functionRan = false;
displayText.textContent = [];

const calculator = buttons.forEach((button) => {
  button.addEventListener('click', (() => {
		if (operatorActive === true) {
		}
		if (typeof(total) === 'number') {
			number1 = total;
		}
		if (button.id === 'clear') {
			clearCalculator()
		}
    if (button.className === 'num' && firstNumber === false ) {
      getSecondNumber(button);
			display(number2);
    } else if(button.className === 'num'){
      getFirstNubmer(button);
			display(number1);
    }
    if (button.className === 'operation' && operatorActive === true) {
			calculateNewNumber();
		}if (button.className === 'operation' ) {
      getOperator(button);
    }
    if(button.id === 'equals') {
      calculateNewNumber();
    } 
  }))
})

function getFirstNubmer (number) {
	number1 += number.textContent;  
	number1 = Number(number1);
}
function getSecondNumber (number) {
	number2 += number.textContent;
	number2 = Number(number2);
}
function getOperator (button) {
	operatorActive = true;
	firstNumber = false;
  if (button.textContent === '+') {
    operator = add;
  } else if (button.textContent === '-') {
    operator = subtract;
  } else if (button.textContent === 'x') {
    operator = multiply;
  } else if (button.textContent === '/') {
    operator = divide;
  } 
}
function calculateNewNumber(number) {
	operatorActive = false
	functionRan = true
  number = operator(number1, number2);
	display(number);
	total = number;
	number2 = [];
	return number;
}
function display (text) {
	displayText.textContent = text;
}
function clearCalculator() {
	total = [];
	number1 = [];
	number2 = [];
	operator = [];
	displayText.textContent = [];
	firstNumber = true;
}
