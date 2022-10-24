/* FUNCTION TO BINARY CONVERT AN ARRAY */
const binary = (num) => {
 let bin = [];                                       // create an empty array for the binary numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  bin.push(num[i].toString(2));                      // add the binary numbers to the array
 }
 return bin;                                         // return the array
}
console.log(binary([3, 1, 2, 4]));