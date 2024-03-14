/*
Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'

P: Two strings: firstName lastName
R: One String the full name 
E: 

combineNames('James', 'Stevens')
returns:

'James Stevens'

P: concat two strings and return result
*/

const combineNames = (firstName, lastName) => firstName.concat(" ", lastName);

console.log(combineNames("Damian", "Padilla"));
