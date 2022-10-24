

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