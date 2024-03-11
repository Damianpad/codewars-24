// For Loops
const array = [1 , 2, 3, 4, 5];

for (let i = 0; i < array.length; i++){
    console.log(array[i]);
};

// For...of Loops
const arr = [1, 2, 3, 4, 5];

for(const element of arr){
    console.log(element);
};

// forEach Loops
array.forEach(function(element) {
    console.log(element);
});

// Map Method
const mapMethod = array.map((element) => {
    return element + 1;
})
console.log(mapMethod);