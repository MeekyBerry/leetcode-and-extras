/* FUNCTION TO FIND THE LOWEST VALUE IN AN ARRAY */
const lowest = (num) => {
 return Math.min(...num);                            // return the lowest value in the array
}
console.log(lowest([3, 1, 2, 4]));