/*----------                               FIND THE HIGHEST ALTITUDE                            ----------*/
/*=============================================
// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.
// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are[0,-5,-4,1,1,-6].The highest is 1.
 =============================================*/
const largestAltitude = (gain) => {                            // function that takes in an array
 let arr = [0];                                            // create an array with 0 as the first element
 for (let i = 0; i < gain.length; i++) {                      // loop through the array
  arr.push(arr[i] + gain[i]);    // add the current element to the previous element and push it to the array
 }
 return Math.max(...arr);                                    // return the highest number in the array
}
console.log(largestAltitude([-5, 1, 5, 0, -7]));

/*----------                       COUNT NEGATIVE NUMBERS IN A SORTED MATRIX               ----------*/
/*=============================================
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
 =============================================*/
const countNegatives = (grid) => {                            // function that takes in a matrix
 let count = 0;                                            // create a variable to count the negative numbers
 for (let i = 0; i < grid.length; i++) {                      // loop through the matrix
  for (let j = 0; j < grid[i].length; j++) {                  // loop through the sub-arrays
   if (grid[i][j] < 0) {                                     // if the number is negative
    count++;                                                  // add 1 to the count
   }
  }
 }
 return count;                                              // return the count
}
console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]));

/*---------- LARGEST NUMBER AT LEAST TWICE OF OTHERS ----------*/
/*=============================================
// You are given an integer array num where the largest integer is unique.
// Determine whether the largest element in the array is at least twice as much as every other number in the array.If it is, return the index of the largest element, or return -1 otherwise.
// Input: num = [3, 6, 1, 0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.The index of value 6 is 1, so we return 1.
 =============================================*/
const dominantIndex = (num) => {                            // function that takes in an array
 let max = Math.max(...num);                                // find the largest number in the array
 let index = num.indexOf(max);                              // find the index of the largest number
 for (let i = 0; i < num.length; i++) {                      // loop through the array
  if (num[i] * 2 > max && i !== index) {                  // if the number is greater than the largest number and not the largest number
   return -1;                                                  // return -1
  }
 }
 return index;                                              // return the index of the largest number
}
console.log(dominantIndex([3, 6, 1, 0]));

/*----------                           CREATE TARGET ARRAY IN THE GIVEN ORDER               ----------*/
/*=============================================
// Given two arrays of integers num and index.Your task is to create target array under the following rules:
// Initially target array is empty.
// From left to right read num[i] and index[i], insert at index index[i] the value num[i] in target array.
// Repeat the previous step until there are no elements to read in num and index.
// Return the target array.
// It is guaranteed that the insertion operations will be valid.
// Input: num = [0, 1, 2, 3, 4], index = [0, 1, 2, 2, 1]
// Output: [0, 4, 1, 3, 2]
// Explanation:
// num       index     target
// 0            0        [0]
// 1            1        [0, 1]
// 2            2        [0, 1, 2]
// 3            2        [0, 1, 3, 2]
// 4            1        [0, 4, 1, 3, 2]
 =============================================*/
const createTargetArray = (num, index) => {                  // function that takes in two arrays
 let arr = [];                                              // create an empty array
 for (let i = 0; i < num.length; i++) {                      // loop through the arrays
  arr.splice(index[i], 0, num[i]);                           // insert the number at the index
 }
 return arr;                                                // return the array
}
console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));

/*----------                           NUMBER OF GOOD PAIRS                               ----------*/
/*=============================================
// Given an array of integers num.
// A pair(i, j) is called good if num[i] == num[j] and i < j.
// Return the number of good pairs.
// Input: num = [1, 2, 3, 1, 1, 3]
// Output: 4
// Explanation: There are 4 good pairs(0, 3), (0, 4), (3, 4), (2, 5) 0-indexed.
 =============================================*/
const numIdenticalPairs = (num) => {                        // function that takes in an array
 let count = 0;                                            // create a variable to count the pairs
 for (let i = 0; i < num.length; i++) {                      // loop through the array
  for (let j = i + 1; j < num.length; j++) {                 // loop through the array again
   if (num[i] === num[j]) {                                 // if the numbers are equal
    count++;                                                  // add 1 to the count
   }
  }
 }
 return count;                                              // return the count
}
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

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



