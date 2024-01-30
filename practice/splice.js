// splice MODIFIES arrays. Here is an example
let mySimpleArr = [1, 2, 3, 4, 5];

let newArr = mySimpleArr.splice(1, 1);
console.log(newArr); // Returns [2]
console.log(mySimpleArr); // Returns [1,3,4,5]

// PROBLEM 1: Remove the last two elements of an array
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function removeLast2(arr) {
  return arr.splice(-2);
}

console.log(removeLast2(myArr));

// PROBLEM 2: Remove all element swith values greater than 10
let myGreatArr = [122, 20, 3, 34, 5, 6, 7, 88, 9, 10];

function removeMore10(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > 10) {
      arr.splice(i, 1);
    }
  }

  return arr;
}

console.log(removeMore10(myGreatArr));

// PROBLEM 3: Given an array of strings, remove the first 3 elements

let myStr = ["Apple", "Bananas", "Strawberry", "Mango", "Grape"];

let newStr = myStr.splice(0, 3);
console.log(newStr); // Returns ['Apple', 'Bananas', 'Strawberry'];
console.log(myStr); // Returns ['Mango', 'Grape'];

// PROBLEM 4: Given an array of characters, replace the middle three elements with the characters 'X', 'Y', and 'Z'

let chars = ["D", "A", "M", "I", "A", "N", "S"];

function middle3(arr) {
  const middleIndex = Math.floor(arr.length / 2);

  return arr.splice(middleIndex - 1, 3, "X", "Y", "Z");
}

console.log(middle3(chars));

// PROBLEM 5: Given an array of names, add the names "Alice" and "Bob" at the beginning of an array

const names = ["Damian", "Ana", "Lizzy", "Sophia", "Bub", "Shelia", "Kassie"];

function changeNames(arr) {
  arr.splice(0, 2, "Alice", "Bob");
  return arr;
}

console.log(changeNames(names));
console.log(names);

// PROBLEM 6: Given an array of numbers, insert the elements 7,8,9 at index 2

const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function insertNums(arr) {
  arr.splice(2, 3, 7, 8, 9);
  return arr;
}

console.log(insertNums(arrNums));

// PROBLEM 7: Given an array of colors, remove the elements at even indicies.

let colors = [
  "red",
  "green",
  "yellow",
  "blue",
  "purple",
  "orange",
  "white",
  "black",
];

function evenColors(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr.splice(arr[i], 1);
    }
  }
  return arr;
}

console.log(evenColors(colors));

// PROBLEM 8: Given an array of fruits, remove the elements at odd indicies and replace them with the corresponding index value

let fruits = ["Apple", "Bananas", "Strawberry", "Mango", "Grape"];

function removeOdd(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (i % 2 === 1) {
      arr.splice(i, 1, i);
    }
  }
  return arr;
}

console.log(removeOdd(fruits));
console.log(fruits);
