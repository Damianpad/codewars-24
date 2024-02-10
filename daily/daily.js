// Arrays

/*
Splice:

Problem 1: remove the last two elements from an array
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.splice(-2);
console.log(arr);

/*
Splice:

Problem 2: Given an array of numbers, remove all elements with values greater than 10
*/
let largeArr = [3, 50, 4, 55, 77, 88, 2, 4, 1, 100];

/*
Splice:

Problem 3: Given an array of strings, remove the first three elements.
*/

let strArr = ["Cat", "Dog", "Bird", "Monkey", "Horse"];

strArr.splice(0, 3);
console.log(strArr);

/*
Map:

Problem 1: Given an array of integers, return a new array with each value doubled.

*/

let arrInts = [1, 2, 3];

const doubled = (x) => {
  return x.map((element) => element * 2);
};

console.log(doubled(arrInts));

/*
Map:

Problem 2: Given an array of numbers, create a new array where each element is the square of the corresponding element in the original array
*/

const squared = (x) => {
  return x.map((element) => element ** 2);
};

console.log(squared(arrInts));
