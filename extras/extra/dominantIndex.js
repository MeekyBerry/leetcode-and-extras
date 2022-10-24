

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