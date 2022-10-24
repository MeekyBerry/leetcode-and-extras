/* FUNCTION TO FIND THE SUM OF AN ARRAY */
const sum = (num) => {
 let total = 0;                                      // create a variable to store the sum of the numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  total += num[i];                                   // add the numbers to the sum
 }
 return total;                                       // return the sum
}
console.log(sum([3, 1, 2, 4]));