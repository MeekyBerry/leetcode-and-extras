/*=====                              SECOND LARGEST DIGIT IN A STRING                          ======*/
/*=============================================
 // Given an alphanumeric string s, return the second largest numerical digit that appears in s, or - 1 if it does not exist.
// An alphanumeric string is a string consisting of lowercase English letters and digits.
// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are[1, 2, 3].The second largest digit is 2.
 =============================================*/
const secondHighest = (s) => {                   // function that takes in a string
 let st = new Set();                            // create a set
 for (let i = 0; i < s.length; i++) {          // loop through the string
  if (s[i] >= '0' && s[i] <= '9') {            // if the character is a number
   st.add(s[i]);                               // add it to the set
  }
 }
 if (st.size < 2) {                            // if the set has less than 2 numbers
  return -1;                                    // return -1
 }
 let arr = Array.from(st);                      // convert the set to an array
 arr.sort((a, b) => b - a);                     // sort the array in descending order
 return arr[1];                                  // return the second element
};
console.log(secondHighest("dfa12321afd"));

/*----------                                UGLY NUMBER                              ----------*/     
/*=============================================
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.
// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
 =============================================*/
const isUgly = (n) => {                           // function that takes in a number
 if (n <= 0) {                                    // if the number is less than or equal to 0
  return false;                                   // return false
 }
 while (n % 2 === 0) {                            // while the number is divisible by 2
  n = n / 2;                                       // divide the number by 2
 }
 while (n % 3 === 0) {                             // while the number is divisible by 3
  n = n / 3;                                       // divide the number by 3
 }
 while (n % 5 === 0) {                             // while the number is divisible by 5
  n = n / 5;                                       // divide the number by 5
 } 
 return n === 1;                                   // return true if the number is 1
};
console.log(isUgly(6));

/*----------                               FIZZ BUZZ                            ----------*/
/*=============================================
// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.
// Input: n = 3
// Output: ["1", "2", "Fizz"]
 =============================================*/
const fizzBuzz = (n) => {                            // function that takes in a number
 let answer = [];                                    // create an empty array
 for (let i = 1; i <= n; i++) {                      // loop through the numbers from 1 to n
  if (i % 3 === 0 && i % 5 === 0) {                  // if the number is divisible by 3 and 5
   answer.push("FizzBuzz");                          // add "FizzBuzz" to the array
  } else if (i % 3 === 0) {                          // if the number is divisible by 3
   answer.push("Fizz");                              // add "Fizz" to the array
  } else if (i % 5 === 0) {                          // if the number is divisible by 5
   answer.push("Buzz");                              // add "Buzz" to the array
  } else {                                           // if the number is not divisible by 3 or 5
   answer.push(i.toString());                        // add the number to the array
  }
 }
 return answer;                                       // return the array
}
console.log(fizzBuzz(3));

/*----------                               SORT ARRAY BY PARITY                            ----------*/
/*=============================================
// Given an integer array n, move all the even integers at the beginning of the array followed by all the odd integers.
// Return an array that satisfies this condition.
// Input: n = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: There are two odd numbers at the beginning of n[3,1,2,4].After reordering, n can be[2,4,3,1] or[4,2,3,1].
 =============================================*/
const sortArrayByParity = (n) => {                                // function that takes in an array
 let arr = [];                                                      // create an empty array
 for (let i = 0; i < n.length; i++) {                            // loop through the array
  if (n[i] % 2 === 0) {                                          // if even
   arr.unshift(n[i]);                                           // add to the beginning of the array
  } else {                                                        // if odd
   arr.push(n[i]);                                             // add to the end of the array
  }
 }
 return arr;                                                    // return the array
}
console.log(sortArrayByParity([3, 1, 2, 4]));  

/* -------------------------- LARGEST NUMBER AFTER DIGIT SWAPS BY PARITY -------------------------- */
/*=============================================
// You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).
// Return the largest possible value of num after any number of swaps.
// Input: num = 1234
// Output: 3412
// Explanation: Swap the digit 3 with the digit 1, this results in the number 3214.
=============================================*/
const largestInteger = (num) => {                                // function that takes in a number
 let arr = num.toString().split("");            // convert the number to a string and split it into an array
 let even = [];                                                  // create an empty array for even numbers
 let odd = [];                                                   // create an empty array for odd numbers
 for (let i = 0; i < arr.length; i++) {                         // loop through the array
  if (arr[i] % 2 === 0) {                                       // if the number is even
   even.push(arr[i]);                                          // add it to the even array
  } else {                                                      // if the number is odd
   odd.push(arr[i]);                                          // add it to the odd array
  }
 }
 even.sort((a, b) => b - a);                                    // sort the even array in descending order
 odd.sort((a, b) => b - a);                                     // sort the odd array in descending order
 let j = 0;                              // create a variable to keep track of the index of the even array
 let k = 0;                               // create a variable to keep track of the index of the odd array
 for (let i = 0; i < arr.length; i++) {                         // loop through the array
  if (arr[i] % 2 === 0) {                                       // if the number is even
   arr[i] = even[j];                          // replace it with the number at the index of the even array
   j++;                                                        // increment the index of the even array
  } else {                                                      // if the number is odd
   arr[i] = odd[k];                           // replace it with the number at the index of the odd array
   k++;                                                        // increment the index of the odd array
  }
 }
 return arr.join("");                                          // return the array as a string
}
console.log(largestInteger(65875));
