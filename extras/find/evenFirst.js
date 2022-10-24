/* FUNCTION TO SORT EVEN NUMBERS FIRST BEFORE ODD NUMBERS IN AN ARRAY */
const evenFirst = (num) => {
 let even = [];                                        // create an empty array for even numbers
 let odd = [];                                         // create an empty array for odd numbers
 for (let i = 0; i < num.length; i++) {               // loop through the array
  if (num[i] % 2 === 0) {                             // if even 
   even.push(num[i]);                                 // add to the even array
  } else {                                            // if odd
   odd.push(num[i]);                                  // add to the odd array
  }
 }
 return even.concat(odd);                   // return the even array concatenated with the odd array
}
console.log(evenFirst([3, 1, 2, 4]));