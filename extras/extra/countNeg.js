

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