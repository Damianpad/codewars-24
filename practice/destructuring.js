// Example of Array destructuring

const favFoods = ["bacon", "pizza", "fries"];

const [ana, damian, lizzy] = favFoods;

console.log(ana);
console.log(damian);
console.log(lizzy);


// Example of an object destructuring

const person = {name: 'Damian', age: 29};

const { name, age } = person;

console.log(name);
console.log(age);


// Example of function parameter destructuring

function printUser({ name, age }){
    console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: 'Damian', age: 29};
printUser(user);


// Example of Rest parameter in Array Destructuring
const colors = ['red', 'green', 'blue', 'yellow'];
const [firstColor, SecondColor, ...restColors] = colors;

console.log(firstColor);
console.log(SecondColor);
console.log(restColors);