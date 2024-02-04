// Loops Excercises

/*

Looping a Triangle: Write a loop that makes seven calls to console.log to output the following triangle
#
##
###
####
#####
######
#######

*/

for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

/*
Fizz Buzz

Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions:

Numbers divisible by 3: print "Fizz" instead of the number
Numbers divisible by 5: print "Buzz" instead

Numbers divisibl by 3 AND 5: print "FizzBuzz"
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}


// Here is a shorter version of fizzbuzz

for (let i = 0; i<=100; i++){

}

/*
Chessboard
Write a program that creates a string that represents an 8x8 grid, using new line characters to separate lines.
At each position of the grid there is either a spcae or # Character. 
The characters should form a chessboard.
*/

for (let i =0; i<=8; i++){
    
}