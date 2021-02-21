/*
Problem 1: Sum of Squares: Given an array of numbers use reduce method to find the sum of the squares of each number
*/

let myArr = [1, 2, 3, 4, 5];

function sumSquares(arr) {
  const result = arr.reduce((acc, val) => {
    return acc + val ** 2;
  }, 0);

  return result;
}
