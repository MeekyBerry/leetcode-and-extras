/*----------                           DECREASE ELEMENTS TO MAKE ARRAY ZIGZAG               ----------*/
/*=============================================
// Given an array num of integers, a move consists of choosing any element and decreasing it by 1.
// An array A is a zigzag array if either:
// Every even-indexed element is greater than adjacent elements, ie. A[0] > A[1] < A[2] > A[3] < A[4] > ...
// OR, every odd - indexed element is greater than adjacent elements, ie. A[0] < A[1] > A[2] < A[3] > A[4] < ...
// Return the minimum number of moves to transform the given array num into a zigzag array.
// Input: num = [1, 2, 3]
// Output: 2
// Explanation: We can decrease 2 to 0 or 3 to 1.
 =============================================*/
const movesToMakeZigzag = (num) => {                        // function that takes in an array
 let count1 = 0;                                           // create a variable to count the moves
 let count2 = 0;                                           // create a variable to count the moves
 for (let i = 0; i < num.length; i += 2) {                   // loop through the array
  if (num[i] >= num[i - 1]) {                               // if the number is greater than the previous number
   count1 += num[i] - num[i - 1] + 1;                       // add the difference to the count
  }
  if (num[i] >= num[i + 1]) {                               // if the number is greater than the next number
   count1 += num[i] - num[i + 1] + 1;                       // add the difference to the count
  }
 }
 for (let i = 1; i < num.length; i += 2) {                   // loop through the array
  if (num[i] >= num[i - 1]) {                               // if the number is greater than the previous number
   count2 += num[i] - num[i - 1] + 1;                       // add the difference to the count
  }
  if (num[i] >= num[i + 1]) {                               // if the number is greater than the next number
   count2 += num[i] - num[i + 1] + 1;                       // add the difference to the count
  }
 }
 return Math.min(count1, count2);                            // return the minimum count
}
console.log(movesToMakeZigzag([1, 2, 3]));