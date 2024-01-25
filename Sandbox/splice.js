// Remove the last two elements of an array
let myArr = [1,2,3,4,5,6,7,8,9];

function removeLast2(arr){
    return arr.splice(-2);
}

console.log(removeLast2(myArr));