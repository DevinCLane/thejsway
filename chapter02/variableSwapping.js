// write code to swap the values of variables 'number1' and 'number2';

let number1 = 5
let number2 = 3;

// insert code here:
let temporaryHoldNumber = number2; // temporaryHoldNumber = 3
number2 = number1; // number2 = 5
number1 = temporaryHoldNumber; // number 1 = 5

console.log(number1); // should show 3
console.log(number2); // should show 5