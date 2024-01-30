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


