// Example of Array destructuring

const favFoods = ["bacon", "pizza", "fries"];

const [ana, damian, lizzy] = favFoods;

console.log(ana);
console.log(damian);
console.log(lizzy);

// Example of an object destructuring

const person = { name: "Damian", age: 29 };

const { name, age } = person;

console.log(name);
console.log(age);

// Example of function parameter destructuring

function printUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: "Damian", age: 29 };
printUser(user);

// Example of Rest parameter in Array Destructuring
const colors = ["red", "green", "blue", "yellow"];
const [firstColor, SecondColor, ...restColors] = colors;

console.log(firstColor);
console.log(SecondColor);
console.log(restColors);

/*
Problem 1: Given a function that returns an array with two values represending coordinates (x,y), write a function to calculate the distance between two points and return the results

P: 
two points, nums

R:
An array with two values

E: 

*/

// Now, try to use destructuring to make your solution more concise and expressive. Remember, the goal is to improve the readability and simplicity of the code.

function calculateDistance(point1, point2) {
  // Your code here
  const [x1, y1] = point1;
  const [x2, y2] = point2;

  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  return distance;
}

const pointA = [1, 2];
const pointB = [4, 6];

const distance = calculateDistance(pointA, pointB);
console.log(distance);


