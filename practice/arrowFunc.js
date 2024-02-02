// Arrow functions the basics

//let func = (args1, args2 ) => expression

/*
Convert these basic functions into an arrow function
*/

/*
Convert 1

function add( a, b ){
    return a + b;
}
*/

const add = (a , b) => a + b;

/*
Convert 2: Subtraction

function subtract(a, b){
    return a - b;
}
*/

const subtract = (a,b) => a - b;

/*
Convert 3: Multiplication

function multiply(a, b){
    return a * b;
}
*/

const multiply = (a, b) => a * b;

/*
Convert 4: Division
function divide(a,b){
    return a / b;
}
*/

const divide = (a,b) => a / b;

/*
Convert 5: Square

function square(x) {
    return x * x;
}
*/

const square = x => x * x;

/*
Convert 6: Cubed

function cube(x){
    return x * x * x;
}
*/

const cubed = x => x * x * x;

/*
Convert 7: Check if even functions

function isEven(num){
    return num % 2 === 0;
}
*/

let isEven = num => num % 2 === 0;



// PROBLEM 1: Given an array of numbers, use an arrow function to create a new array where each number is doubled.

let nums = [1,2,3,4,5];

const doubleNums = nums.map(number => number * 2);

console.log(doubleNums);


// PROBLEM 2: Given an array of numbers use an arrow function to create a new array where each number is squared.

const squareNums = nums.map(number => number ** 2);

console.log(squareNums(nums));