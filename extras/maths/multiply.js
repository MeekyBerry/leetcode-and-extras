/* FUNCTION TO FIND THE PRODUCT OF AN ARRAY */
const product = (num) => {
 let total = 1;                                      // create a variable to store the product of the numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  total *= num[i];                                   // multiply the numbers to the product
 }
 return total;                                       // return the product
}
console.log(product([3, 1, 2, 4])); 