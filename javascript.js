/* 
Allow the person to click as many number as they want and turn that from a string to an actual number when  one of the 
	operators has been clicked. Store that value inside of a variable called number 1 and show that number on the display.
When one of the operators has been clicked, let the person decide, if they want to add another operator or a new number.
	If they add another operator then overwrite the old operator with the new one and keep doing that until they start
	adding a new number, when they do, save that operator inside of a variable. If they start typing a new number, 
	do the same thing as with the variable number 1 but store that inside of a new variable called number 2.
To get the second number, you either have to wait until the person clicks "equals" or another operator. In both cases,
the number should be calculated using the stored operator and numbers. The answer from the calculation should become the 
new first number and everything except the creation of the first number should be ran again. 

*/
const add  = ((number1, number2) => number1 + number2);
const subtract  = ((number1, number2) => number1 - number2);
const multiply  = ((number1, number2) => number1 * number2);
const divide  = ((number1, number2) => number1 / number2);

const displayText = document.querySelector('#displayP');
const buttonNumbers = document.querySelectorAll('.num');
const operations = document.querySelectorAll('.operation');
const buttons = document.querySelectorAll('button');

let number1 = [];
let number2 = [];
let operator = [];
let firstNumber = true;
let operatorActive = false

const calculator = buttons.forEach((button) => {
  button.addEventListener('click', (() => {
    if (button.className === 'num' && firstNumber === false ) {
      getSecondNumber(button);
    } else if(button.className === 'num'){
      getFirstNubmer(button);
    }
    if (button.className === 'operation' ) {
      getOperator(button);
    } 
    if(button.id === 'equals') {
      calculateNewNumber();
      console.log(calculateNewNumber())
    }
  }))
})

function getFirstNubmer (number) {
  number1 += number.textContent;  
  return number1 = Number(number1);
}
function getSecondNumber (number) {
  number2 += number.textContent;
  return number2 = Number(number2);
}
function getOperator (button) {
  firstNumber = false;
      displayText.textContent = number1;
      if (button.textContent === '+') {
        operator = add;
      } else if (button.textContent === '-') {
        operator = subtract;
      } else if (button.textContent === 'x') {
        operator = multiply;
      } else if (button.textContent === '/') {
        operator = divide;
      } console.log(firstNumber)
      return operator
}
function calculateNewNumber(number) {
  console.log(number1, number2)
  return number = operator(number1, number2);
}










/*

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





*/