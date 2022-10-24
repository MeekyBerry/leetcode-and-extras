/* FUNCTION TO FIND THE REMAINDER OF A NUMBER */
const remainder = (num) => {
 let rem = 0;                                   // create a variable to store the remainder of the numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  rem %= num[i];                                     // find the remainder of the numbers
 }
 return rem;                                         // return the remainder
}
console.log(remainder([3, 1, 2, 4]));