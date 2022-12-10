/*----------                                UGLY NUMBER                              ----------*/
/*=============================================
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.
// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
 =============================================*/
const isUgly = (n) => {                     // function that takes in a number
 if (n <= 0) {                      // if the number is less than or equal to 0
  return false;                            // return false
 }
 while (n % 2 === 0) {                    // while the number is divisible by 2
  n = n / 2;                             // divide the number by 2
 }
 while (n % 3 === 0) {                  // while the number is divisible by 3
  n = n / 3;                            // divide the number by 3
 }
 while (n % 5 === 0) {                 // while the number is divisible by 5
  n = n / 5;                                       // divide the number by 5
 }
 return n === 1;                      // return true if the number is 1
};

console.log(isUgly(6));   // true
console.log(isUgly(8));   // true
console.log(isUgly(14));  // false
console.log(isUgly(1));   // true

//Giving an unsorted arrayof n elements, find if K is presentin the array or not
// .. the function must reb=turn a string YES or NO denoting if the element is prrsent or not

function findNumber(arr, k) {
  let result = 'NO';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
    result = 'YES';
    }
  }
  return result;
}
