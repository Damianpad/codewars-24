/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1

P:
String 
Single Character String

R:
Integer that counts occurrences the char is found in the string
If no occurances can be found, return 0

E:
("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0

P:
split string
iterate with reduce and check character count
return 0 if none

*/

function strCount(str, letter) {
  const countOcc = str.split("").reduce((acc, cVal) => {
    if (cVal === letter) {
      acc += 1;
    }
    return acc;
  }, 0);
  return countOcc;
}

console.log(strCount("Hello", "o"));
console.log(strCount("", "o"));
