

/*----------        SORT ARRAY BY PARITY             ----------*/
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

console.log(sortArrayByParity([3, 1, 2, 4]));   // [2, 4, 3, 1]
console.log(sortArrayByParity([0, 1]));         // [0, 1]
console.log(sortArrayByParity([1, 3, 5]));      // [1, 3, 5]
console.log(sortArrayByParity([0, 2, 4]));      // [0, 2, 4]
console.log(sortArrayByParity([1, 2, 3, 4]));   // [2, 4, 1, 3]
