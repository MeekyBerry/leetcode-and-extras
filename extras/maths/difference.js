/* FUNCTION TO FIND THE DIFFERENCE OF A NUMBER */
const difference = (num) => {
 let diff = 0;                                   // create a variable to store the difference of the numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  diff -= num[i];                                    // subtract the numbers to the difference
 }
 return diff;                                        // return the difference
}
console.log(difference([3, 1, 2, 4]));