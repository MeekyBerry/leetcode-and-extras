/* Function to negate all numbers in an array */
const negate = (num) => {
 let neg = [];                                       // create an empty array for the negative numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  neg.push(-num[i]);                                 // add the negative numbers to the array
 }
 return neg;                                         // return the array
}
console.log(negate([3, 1, 2, 4]));