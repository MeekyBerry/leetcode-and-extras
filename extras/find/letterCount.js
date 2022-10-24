/* FUNCTION TO FIND WORDS WITH A SPECIFIC NUMBER OF LETTERS IN AN ARRAY */
const letterCount = (str, num) => {
 let letterCount = [];                     // create an empty array for the words with the number of letters
 for (let i = 0; i < str.length; i++) {              // loop through the array
  if (str[i].length === num) {                       // if the word has the number of letters
   letterCount.push(str[i]);                         // add the word to the array
  }
 }
 return letterCount;                                 // return the array
}
console.log(letterCount(['dog', 'goat', 'cattle'], 4));