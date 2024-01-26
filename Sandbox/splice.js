// Remove the last two elements of an array
let myArr = [1,2,3,4,5,6,7,8,9];

function removeLast2(arr){
    return arr.splice(-2);
}

console.log(removeLast2(myArr));

// Remove all element swith values greater than 10
let myGreatArr = [122,20,3,34,5,6,7,88,9,10];

function removeMore10(arr){
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] > 10){
            arr.splice(i, 1)
        }
    }

    return arr;
}

console.log(removeMore10(myGreatArr));


// splice MODIFIES arrays. Here is an example
let mySimpleArr = [1,2,3,4,5]

let newArr = mySimpleArr.splice(1,1)
console.log(newArr); // Returns [2]
console.log(mySimpleArr); // Returns [1,3,4,5]