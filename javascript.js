const add  = ((number1, number2) => number1 + number2);
const subtract  = ((number1, number2) => number1 - number2);
const multiply  = ((number1, number2) => number1 * number2);
const divide  = ((number1, number2) => number1 / number2);

const del = document.querySelector('#delete')
const decimal = document.querySelector('#decimals')
const displayText = document.querySelector('#displayP');
const buttonNumbers = document.querySelectorAll('.num');
const operations = document.querySelectorAll('.operation');
const buttons = document.querySelectorAll('button');

let keyPressed = false
let number1 = [];
let number2 = [];
let operator = [];
let isFirstNumber = true;
let operatorActive = false
let functionRan = false;
displayText.textContent = [];

let validKeys = '1234567890/*+-=.'.split('');
validKeys.push('Enter', 'Backspace', 'Del')

buttons.forEach((button) => button.addEventListener('click', ((item) => calculatorCore(button))));
document.addEventListener('keydown', keydown)

function keydown (keyPress) {
	validKeys.filter((key) => {
		if(keyPress.key.includes(key)) {
			keyPressed = true;
			calculatorCore([],keyPress.key);
		}
	})
}

function calculatorCore (button, keyBind) {
	if (keyPressed === true) {
		keyIntoButton(button, keyBind);
	}
	if(button.id === 'delete') {
		deleteNumber()
	}
	if (operator === divide && number2 === 0) {
		display('error')
	}
	if (typeof(total) === 'number') {
		number1 = total;
	}
	if (button.id === 'clear') {
		clearCalculator()
	}
  if (button.className === 'num' && isFirstNumber === false ) {
    getSecondNumber(button);
		display(number2);
  } else if(button.className === 'num'){
    getFirstNumber(button);
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
} 

function keyIntoButton (button, keyBind) {
	keyPressed = false;
		if (keyBind === '/' ||
			keyBind === '+' ||
			keyBind === '-' ||
			keyBind === '=' ||
			keyBind === '*') {
				if (keyBind === '*') {
					keyBind = 'x';
				}
				button.className = 'operation';
		} else if (keyBind === 'Enter' ) {
				button.id ='equals';
		} else if (keyBind === 'Backspace') {
			button.id = 'delete';
		} else if (keyBind === 'Delete') {
			button.id = 'clear'
		}
		else {
				if (keyBind === '.') {
					button.id = 'decimals';
			}
			button.className = 'num';
		} return button.textContent = keyBind;
}

function getFirstNumber (number) {
	number1 += number.textContent;
	if(number1.includes('.')) {
		removeDecimals()
	} 
}

function getSecondNumber (number) {
	number2 += number.textContent;
	if(number2.includes('.')) {
		removeDecimals()
	}
}

function getOperator (button) {
	operatorActive = true;
	isFirstNumber = false;
	addDecimals()
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
	number1 = Number(number1);
	number2 = Number(number2);
	operatorActive = false
	functionRan = true
  number = operator(number1, number2);
	total = number;
	roundNumbers(number);
	number2 = [];
	return number;
}

function display (text) {
	if (text === 'error') {
		clearCalculator()
		displayText.textContent = 'error';
	} else {
		displayText.textContent = text;
	} 
}

function roundNumbers(number) {
	if(number.toString().length > 6) {
		number = Math.round(number * 10000) / 10000;
	} 
	display(number);
	return number;
}

function clearCalculator() {
	total = [];
	number1 = [];
	number2 = [];
	operator = [];
	displayText.textContent = [];
	isFirstNumber = true;
}

function removeDecimals() {
	decimal.className = [];
}

function addDecimals() {
	decimal.className = 'num';
}

function deleteNumber(number) {
	if (displayText.textContent === number1) {
		number1 = number1.slice(0, -1)
		display(number1);
	} else if (displayText.textContent === number2) {
		number2 = number2.slice(0, -1)
		display(number2);
	}
}