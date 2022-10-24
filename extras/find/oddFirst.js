/* FUNCTION TO SORT ODD NUMBERS FIRST BEFORE EVEN NUMBERS IN AN ARRAY */
const oddFirst = (num) => {
 let even = [];                                        // create an empty array for even numbers
 let odd = [];                                         // create an empty array for odd numbers
 for (let i = 0; i < num.length; i++) {               // loop through the array
  if (num[i] % 2 === 0) {                             // if even
   even.push(num[i]);                                 // add to the even array
  } else {                                            // if odd
   odd.push(num[i]);                                  // add to the odd array
  }
 }
 return odd.concat(even);                   // return the odd array concatenated with the even array
}
console.log(oddFirst([3, 1, 2, 4])); 