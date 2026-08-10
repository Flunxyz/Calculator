/* 1. 


*/

const add  = ((number1, number2) => number1 + number2);
const subtract  = ((number1, number2) => number1 - number2);
const multiply  = ((number1, number2) => number1 * number2);
const divide  = ((number1, number2) => number1 / number2);

const displayText = document.querySelector('#displayP');
const buttonNumbers = document.querySelectorAll('.num');
const operations = document.querySelectorAll('.operation');
const buttons = document.querySelectorAll('button');

let newNumber1 = [];
let functionRan = false;
let number1 = [];
let operator = [];
let display = [];
let number2 = [];
let amount = 0;


const calculator = buttons.forEach((button) =>
	button.addEventListener('click', (buttonType)=> {
		console.log(`number1: ${number1} number 2: ${number2} operator: ${operator}`)
		if(button.id === 'clear') {
			newNumber1 = [];
			functionRan = false;
			number1 = [];
			operator = [];
			display = [];
			number2 = [];
			amount = 0
			displayText.textContent = [];
		}
		if(button.id === 'equals' ||
			 button.id !== 'equals' && amount === 1 && button.className === 'operation') {
				number1 = Number(number1);
				number2 = Number(number2);
				calculateNumber();
		} 
	
		if (button.className === 'num' && amount === 0) {
			display += button.textContent;
			number1 += button.textContent;
			displayText.textContent = number1;
			
		} if (button.className === 'operation') {	
				amount = 1;
				let type = button.textContent;
					if (type === '+' ) {
						operator = add;
					} else if(type === 'x') {
						operator = multiply;
					} else if (type === '-') {
						operator = subtract;
					} else if (type === '/') {
						operator = divide;
					} 
		} else if (button.className === 'num' && amount === 1 
			|| button.className === 'operation' && amount === 1 ) {
				if (functionRan === true) {
					number2 += button.textContent;
					displayText.textContent = number2;
						number1 = newNumber1;
						number1 = Number(number1);
						number2 = Number(number2);
						
				} else {
					number2 += button.textContent;
					displayText.textContent = number2;
				}
		} 
	}) 
);
function calculateNumber (number) {
	functionRan = true;
	number = operator(number1, number2);
	if(number.toString().length > 4) {
		number = number.toFixed(4)
	}
	displayText.textContent = number;
	newNumber1 = number;
	number1 = [];
	number2 = [];
}





