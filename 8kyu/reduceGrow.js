/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

P: 
Array

R:
Multiplying each values together.

E:
[1,2,3,4] => 1 * 2 * 3 * 4 = 24

P:
Reduce array and multiple each value to get result.


*/

function grow(x) {
  const result = x.reduce((acc, val) => {
    return acc * val;
  }, 1);

  return result;
}
