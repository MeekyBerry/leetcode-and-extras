/*----------                                UGLY NUMBER                              ----------*/
/*=============================================
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.
// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
 =============================================*/
// const isUgly = (n) => {                     // function that takes in a number
//  if (n <= 0) {                      // if the number is less than or equal to 0
//   return false;                            // return false
//  }
//  while (n % 2 === 0) {                    // while the number is divisible by 2
//   n = n / 2;                             // divide the number by 2
//  }
//  while (n % 3 === 0) {                  // while the number is divisible by 3
//   n = n / 3;                            // divide the number by 3
//  }
//  while (n % 5 === 0) {                 // while the number is divisible by 5
//   n = n / 5;                                       // divide the number by 5
//  }
//  return n === 1;                      // return true if the number is 1
// };

// console.log(isUgly(6));   // true
// console.log(isUgly(8));   // true
// console.log(isUgly(14));  // false
// console.log(isUgly(1));   // true

//Giving an unsorted array of n elements, find if K is present in the array or not. the function must return a string YES or NO denoting if the element is present or not

function findNumber(arr, k) {
  let result = 'NO';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
    result = 'YES';
    }
  }
  return result;
}

console.log(findNumber([1, 8, 3, 4, 5], 4)); // YES
console.log(findNumber([1, 1, 3, 9, 5], 6)); // NO


// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros.
// Print the decimal value of each fraction on a new line.
function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  console.log(positive / arr.length);
  console.log(negative / arr.length);
  console.log(zero / arr.length);
}

plusMinus([-4, 3, -9, 0, 4, 1]); // 0.500000 | // 0.333333 | // 0.166667


// Give two integers, l and r, print all the odd numbersbetween l and r (l and r inclusive)
function oddNumbers(l, r) {
  let result = [];
  for (let i = l; i <= r; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(oddNumbers(2, 5)); // [3, 5]
console.log(oddNumbers(3, 9)); // [3, 5, 7, 9]
