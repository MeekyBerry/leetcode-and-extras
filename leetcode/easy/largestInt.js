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
 for (let i = 0; i < arr.length; i++) {                         // loop through the array again 
  if (arr[i] % 2 === 0) {                                       // if the number is even
   arr[i] = even[j];                          // replace it with the number at the index of the even array 
   j++;                                                        // increment the index of the even array by 1 
  } else {                                                      // if the number is odd
   arr[i] = odd[k];                           // replace it with the number at the index of the odd array 
   k++;                                                        // increment the index of the odd array by 1
  }
 }
 return arr.join("");                                          // return the array as a string 
}

console.log(largestInteger(1234));   // 3412
console.log(largestInteger(4321));   // 4321
console.log(largestInteger(2134));   // 4312

