/*
Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!

// PREP

// P: number
// R: The number of positive odd numbers below the given number
// E: [1, 3, 5] given the number 7 the function will return 3 because it's the num of positive odd nums below 7
// P: create a counter variable and set to 0. Check all nums lower than n and Check if num is lower than given num.If true add 1 to counter. Return total counter.

*/

function oddCount(n){
    let counter = 0;
    for(let i = 1; i<n; i++){
      if(i % 2 !== 0 && i < n){
        console.log(i)
        counter += 1;
      }
    }
    return counter;
    
  }
