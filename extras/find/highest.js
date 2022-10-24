/* FUNCTION TO FIND THE HIGHEST VALUE IN AN ARRAY */
const highest = (num) => {
 return Math.max(...num);                            // return the highest value in the array
}
console.log(highest([3, 1, 2, 4]));