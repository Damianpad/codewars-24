let age = 29;

console.log(typeof age);

console.log(typeof age.toString());
console.log(typeof age);

/*
Problem 1: Create a 'Person' object with properties 'name' and 'age'. Override the '.toString()' method to retun a string in the format: "Name: [name], Age:[Age]".
*/

let Person = {
    name: 'Damian',
    age: 29,
    city: 'Lewisville'
}

console.log(Person);
console.log(Person.name);
console.log(Person.age);

// Problem 2: Create a book object with properties 'title', 'author', 'year'

const Book = {
    title: 'Harry Potter and the Philosopher\'s stone',
    author: 'J. K. Rowling',
    year: 1997
}

// Problem 3: Create a Car object with properties: make, model and year

const Car = {
    make: 'Jeep',
    model: 'Trailhawk',
    year: 2018
}

// Problem 4: Create a student object with properties name, grade, and subjects(an array of subjects the student is taking)

const Student = {
    name: 'Damian Padilla',
    grade: 'Freshman',
    classes: ['Calculus', 'Linear Algebra', 'Programming Languages', 'Computer Systems']
}

// Problem 5: Create a movie object with properties title, genre, releaseYear

const Movie = {
    title: 'Rocky',
    genre: ['Sports', 'Action'],
    releaseYear: 1976
}
