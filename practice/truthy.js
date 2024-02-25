let myNum = 5;

function checkAmount(num) {
  if (num > 4) {
    return true;
  } else {
    return false;
  }
}

const checkNewAmount = (num) => num > 4;

console.log(checkAmount(myNum));
console.log(checkNewAmount(myNum));
