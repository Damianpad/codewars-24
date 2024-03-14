/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

P:
Two arrays - each containing numbers
R:
Output will be the sum of each arrays elements
E: 
[1, 2, 3] +  [4, 5, 6] => 21
P:
iterate earch array
Get sum
add two sums together

*/

function arrayPlusArray(arr1, arr2) {
  let arr1Total = 0;
  let arr2Total = 0;
  for(let i =0; i<arr1.length; i++){
    arr1Total += i;
  }
  for(let i=0; i<arr2.length; i++){
    arr2Total += i;
  }
  return arr1Total + arr2Total; 
}

// A much shorter solution. 
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}