/* FUNCTION TO FIND THE AVERAGE OF AN ARRAY */
const average = (num) => {
 let sum = 0;                                        // create a variable to store the sum of the numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  sum += num[i];                                     // add the numbers to the sum
 }
 return sum / num.length;                            // return the sum divided by the length of the array
}
console.log(average([3, 1, 2, 4]));