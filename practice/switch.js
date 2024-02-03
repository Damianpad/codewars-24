// Use a switch statement when you want to compare a variable to a bunch of different values

let favoriteColor = 'Navy';

switch(favoriteColor){
    case 'Red':
        console.log("Nope way too Red");
        break;
    case 'Navy':
        console.log("PERFECT");
        break;
    case 'Green':
        console.log("Nope way too Green");
        break;
    default:
        console.log("Sorry I don't know that color");
}

// PROBLEM 1: Create a function that takes a color 'R' 'G' 'B' and returns the primary color.

const color = letter => {
    switch(letter){
        case 'R':
            console.log('Red');
            break;
        case 'G':
            console.log('Green');
            break;
        case 'B':
            console.log('Blue');
            break;
    }
}

console.log(color('R'));
console.log(color('G'));
console.log(color('B'));