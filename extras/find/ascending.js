/* FUNCTION TO SORT NUMBERS IN ASCENDING ORDER */
const ascend = (num) => {
 return num.sort((a, b) => a - b);                   // sort the array in ascending order
}
console.log(ascend([3, 1, 2, 4]));