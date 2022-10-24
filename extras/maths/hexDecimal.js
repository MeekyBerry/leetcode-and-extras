/* FUNCTION TO CONVERT AN ARRAY TO HEXADECIMAL */
const hex = (num) => {
 let hex = [];                                       // create an empty array for the hexadecimal numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  hex.push(num[i].toString(16));                     // add the hexadecimal numbers to the array
 }
 return hex;                                         // return the array
}
console.log(hex([3, 1, 2, 4]));