/*
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
Notes
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.

P: 
Array of strings

R:
True or False for every item in a list.
After flick switch back the pattern

E:
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]


*/
let myArr = ['codewars', 'flick', 'code', 'wars'];

function flickSwitch(arr){
    let returns = true;
    return arr.map((item) => item === "flick" ? returns = !returns : returns)
}

console.log(flickSwitch(myArr));