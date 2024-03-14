/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

P: Array of true/false
R: Number of trues
E:
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

  Answer is 17;

  check for null and undefined -> 0


*/

let sheepNum = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(sheep) {
  let count = 0;

  for (let i = 0; i <= sheep.length; i++) {
    if (sheep[i] === true) {
      count += 1;
    }
  }

  return count;
}

console.log(countSheeps(sheepNum));

// Shorter probelm

const countSheeps2 = arrayOfSheeps => arrayOfSheeps.filter(Boolean).length;

console.log(countSheeps2(sheepNum));