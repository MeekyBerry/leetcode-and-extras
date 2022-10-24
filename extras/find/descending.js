/* FUNCTION TO SORT NUMBERS IN DESCENDING ORDER */
const descend = (num) => {
 return num.sort((a, b) => b - a);                   // sort the array in descending order
}
console.log(descend([3, 1, 2, 4]));