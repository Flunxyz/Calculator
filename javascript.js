/* 1. 
	Create a function that adds selected numbers together.
	Create a function that subtracts selected numbers from each other.
	Create a function that multiplies selected numbers together.
	Create a function that divides selected nubmers from each other.

	5.
*/


const add  = ((number1, number2) => number1 + number2);
const subtract  = ((number1, number2) => number1 - number2);
const multiply  = ((number1, number2) => number1 * number2);
const divide  = ((number1, number2) => number1 / number2);

const displayP = document.querySelector('#displayP')
let buttonNumbers = document.querySelectorAll('.num');

let userNumber1 = buttonNumbers.forEach((num) => 
	num.addEventListener('click', () => {
		displayP.textContent = num.textContent;
		console.log(num.textContent);
	})
);

let userNumber2;
let operator = add;

const operate = function (calculation) {
	return calculation = operator(userNumber1, userNumber2);
};
console.log(operate())

