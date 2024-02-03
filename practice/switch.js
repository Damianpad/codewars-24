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