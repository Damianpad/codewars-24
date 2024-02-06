/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

PREP
P: Array of integers
R: New Array where ints are doubled
R: [1,2,3] => [2,4,6]
P:
Map given arr
Double each element
return new arr

*/

const maps= (x) => {
    return x.map(element => element * 2);
}
