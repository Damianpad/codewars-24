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

/*
Problem 2: Flatten an Array:Given a nested array, use reduce to flatten it into a single-level array.

*/

let nested = [[1, 2, 3, 4, 5]];

function flattenArr(arr) {
  return arr.pop[1];
}

console.log(flattenArr(nested));

/*
Problem 3: Given an array of items, use reduce to create an object that counts the occurrences of each item in the array
*/

let items = [1, 1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 8, 9, 9, 20];

function checkOccurrence(arr) {
  const logArr = arr.reduce((acc, val) => {
    if (arr.includes(val)) {
      arr.pop(val);
    }
  });
  return logArr;
}

console.log(checkOccurrence(items));
