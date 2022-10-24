/* FUNCTION TO FIND FIRST DUPLICATE WORD IN AN ARRAY */
const firstDuplicate = (str) => {
 let firstDuplicate = '';                            // create a variable to store the first duplicate word
 for (let i = 0; i < str.length; i++) {              // loop through the array
  if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {  // if the word is a duplicate
   firstDuplicate = str[i];                          // make the word the first duplicate word
   break;                                            // stop the loop
  }
 }
 return firstDuplicate;                              // return the first duplicate word
}
console.log(firstDuplicate(['goat', 'cattle', 'horse', 'sheep', 'horse', 'dog']));