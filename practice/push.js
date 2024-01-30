// The .push() method adds one or more elements to the end of an array

// PROBLEM 1: Write a function addToEnd that takes an array and an element as parameters and adds the element to the end of the array using the push method. The function should return the modified array.
let myArr = [1, 2, 3, 4, 5];

function addToEnd(arr, element) {
  arr.push(element);
  return arr;
}

console.log(addToEnd(myArr, 6));
console.log(myArr);

// PROBLEM 2: implement a function mergeArrays that takes two arrays as parameters and merges them into a new array. Use the push method to add elements from the second array to the end of the first array. The function should return the merged array without modifying the original arrays.
let firstArr = [1, 2, 3, 4, 5];
let secondArr = [6, 7, 8, 9, 10];

function mergeArrays(arr1, arr2) {
  // Create a copy of the array
  let mergedArr = arr1.slice();

  for (let i = 0; i < arr2.length; i++) {
    mergedArr.push(arr2[i]);
  }
  return mergedArr;
}

console.log(mergeArrays(firstArr, secondArr));
console.log(firstArr);
console.log(secondArr);

// PROBLEM 3: Write a function copyAndAdd that takes an array and an element as a parameters. The function should create a copy of the array using the slice method and then add the given element to the end of the copied array using the push method. The function should return the modified array.
let copyArr = [1, 2, 3, 4, 5];

function copyAndAdd(arr, element) {
  let arrCopy = arr.slice();
  arrCopy.push(element);
  return arrCopy;
}

console.log(copyAndAdd(copyArr, 8));
console.log(copyArr);

// PROBLEM 4: Create a function flattenArrays that takes an aray of arrays as a parameter. The function should use the push method to flatten the nested arrays into a single array. Return the flattened array.
let nestedArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function flattenArrays(arr) {
    return arr.flat();
}

console.log(flattenArrays(nestedArr));
