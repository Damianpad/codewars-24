// The spread operator allows an iterable to be expanded into individual elements or properties

// Expanding Array Elements
const array1 = [1,2,3];

const array2 = [...array1, 4, 5, 6];

console.log(array2);
console.log(array1);
console.log(...array1);