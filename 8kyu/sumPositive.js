/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

P:
Array of Nums

R: 
Sum of all positive nums

E:
[1,-4,7,12] => 1 + 7 + 12 = 20;

P:
iterate array - for loop
Check if index is positive
add positives 
return num
if nothing to sum return 0;
*/

function positiveSum(arr) {
  let result = 0;
  for(let i =0; i <= arr.length; i++){
    if(arr[i] > 0){
      result += arr[i];
    }
  }
  return result;
}