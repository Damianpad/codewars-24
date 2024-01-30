// PROBLEM 1: Given an array of numbers, use an arrow function to create a new array where each number is doubled.

let nums = [1,2,3,4,5];

const doubleNums = nums.map(number => number * 2);

console.log(doubleNums);


// PROBLEM 2: Given an array of numbers use an arrow function to create a new array where each number is squared.

const squareNums = nums.map(number => number ** 2);

console.log(squareNums(nums));