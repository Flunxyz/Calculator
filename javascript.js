/* 1. 
	Create a function that adds selected numbers together.
	Create a function that subtracts selected numbers from each other.
	Create a function that multiplies selected numbers together.
	Create a function that divides selected nubmers from each other.

	6. Create a variable for the display.
	Add the first number text content to it until an operation has been clicked.
	When an operator has been clicked, set the operator vaiable value to the operator type.
*/


const add  = ((number1, number2) => number1 + number2);
const subtract  = ((number1, number2) => number1 - number2);
const multiply  = ((number1, number2) => number1 * number2);
const divide  = ((number1, number2) => number1 / number2);

const displayText = document.querySelector('#displayP');
const buttonNumbers = document.querySelectorAll('.num');
const operations = document.querySelectorAll('.operation');
const buttons = document.querySelectorAll('button');

let number1 = '';
let operator;
let display = '';
let number2 = '';
let amount = 0;

const calculator = buttons.forEach((button) =>
	button.addEventListener('click', (buttonType)=> {
		if(button.id === 'equals') {
				number1 = Number(number1);
				number2 = Number(number2);
				calculateNumber();
		}
		if (button.className === 'num' && amount === 0) {
			display += button.textContent;
			number1 += button.textContent;
			displayText.textContent = number1;
			
		} else if (button.className === 'operation') {	
				++amount;
				display = '';
				displayText.textContent = display;
				let type = button.textContent;
					if (type === '+' ) {
						operator = add;
					} else if(type === 'x') {
						operator = multiply;
					} else if (type === '-') {
						operator = subtract;
					} else if (type === '/') {
						operator = divide;
					} console.log(operator)	
					
		} else if (button.className === 'num' && amount === 1) {
			number2 += button.textContent;
			displayText.textContent = number2; 
		} 
	}) 
);

function calculateNumber (number) {
	number = operator(number1, number2)
	displayText.textContent = number
}





