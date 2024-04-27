// Array interview questions

// 1: Reverse an array: write a function that takes an array as input and returns a new array with the elements reversed

const arr = [1, 2, 3, 4, 5];

const reverseArr = (myArr) => arr.reverse();

console.log(reverseArr(arr));


// 2: Find the maximum and minimum element

const setArr = [11, 20, 1, 100];

const findMaxAndMin = (arr) => {
    return `Max: ${Math.max(...arr)} Min: ${Math.min(...arr)}`
}

console.log(findMaxAndMin(setArr));