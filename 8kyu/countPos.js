/*

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]

P:
Array of ints

R:
Array -> 

first element is the count of positives nums 
Second element is sum of negative numbers
0 is neither positive or negative
input is null => empty arr

E:
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]

P:
iterate arr
if i > 0 num of positives
if i === 0 ignore?
if i < 0 sum to negatives
push counts to proper arr index

*/
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
  let newArr = [];
  let positive = 0;
  let negative = 0;

  if (input === null) {
    return newArr;
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positive += 1;
    } else if (input[i] < 0) {
      negative += input[i];
    } else {
      continue;
    }
  }

  newArr.push(positive);
  newArr.push(negative);

  if (newArr[0] === 0 || newArr[1] === 0) {
    return [];
  } else if (newArr.length > 2) {
    return [];
  } else {
    return newArr;
  }
}

console.log(countPositivesSumNegatives(myArr));
