/*
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.


P: a string
R: Bool if string is ALL CAPS or not
E:
"c" -> False
"C" -> True

create a function that takes in a string
Check if str =str.toUpperCase();
*/

String.prototype.isUpperCase = function(){
    return this.valueOf() === this.toUpperCase();
}


