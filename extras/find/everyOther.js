/* FUNCTION TO FIND EVERY OTHER WORD IN AN ARRAY */
const everyOther = (str) => {
 let everyOther = [];                                // create an empty array for every other word
 for (let i = 0; i < str.length; i++) {           // loop through the array
  everyOther.push(str[i]);                           // add every other word to the array
 }
 return everyOther;                                  // return the array
}
console.log(everyOther(['dog', 'goat', 'cattle']));