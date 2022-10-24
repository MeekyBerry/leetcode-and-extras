/* FUNCTION TO FIND DUPLICATE WORDS IN AN ARRAY */
const duplicates = (str) => {
 let duplicates = [];                                // create an empty array for the duplicate words
 for (let i = 0; i < str.length; i++) {              // loop through the array
  if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {  // if the word is a duplicate
   duplicates.push(str[i]);                          // add the word to the array
  }
 }
 return duplicates;                                  // return the array
}
console.log(duplicates(['dog', 'goat', 'cattle', 'dog']));