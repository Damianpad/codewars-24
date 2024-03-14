/*
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

PREP
P: Array
R: Sum of array minus the highest and lowest VALUED element
E: { 6, 2, 1, 8, 10 } => 16
P: 
*/

let myArr = [6, 2, 1, 8, 10];
let badTest = [-6, 20, -1, 10, -12];

function sumArray(array) {
  // Check for input validation
  if (!array || !Array.isArray(array) || array.length <= 2) {
    return 0;
  }

  let maxNum = array.indexOf(Math.max(...array));
  let minNum = array.indexOf(Math.min(...array));

  array.splice(maxNum, 1);
  array.splice(minNum, 1);

  let sum = array.reduce((acc, num) => acc + num, 0);
  return sum;
}

console.log(sumArray(myArr));
console.log(sumArray(badTest));

// Highest rated solution
function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}
