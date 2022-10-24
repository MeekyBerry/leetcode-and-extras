/* FUNCTION TO FIND THE LONGEST WORD IN AN ARRAY */
const longest = (str) => {
 let longest = '';                                   // create a variable to store the longest word
 for (let i = 0; i < str.length; i++) {              // loop through the array
  if (str[i].length > longest.length) {              // if the word is longer than the longest word
   longest = str[i];                                 // make the word the longest word
  }
 }
 return longest;                                     // return the longest word
}
console.log(longest(['dog', 'goat', 'cattle']));


/* FUNCTION TO FIND THE LONGEST WORD IN A STRING */
const longestWord = (str) => {
 let longestWord = '';                               // create a variable to store the longest word
 let words = str.split(' ');                         // split the string into an array of words
 for (let i = 0; i < words.length; i++) {            // loop through the array
  if (words[i].length > longestWord.length) {        // if the word is longer than the longest word
   longestWord = words[i];                           // make the word the longest word
  }
 }
 return longestWord;                                 // return the longest word
}
console.log(longestWord('longest word in a string'));


/* FUNCTION TO FIND X AMOUNT OF LONGEST WORDS IN A STRING */
const longestWords = (str, x) => {
 let longestWords = [];                              // create an array to store the longest words
 let words = str.split(' ');                         // split the string into an array of words
 for (let i = 0; i < x; i++) {                       // loop through the array
  let longestWord = '';                              // create a variable to store the longest word
  for (let j = 0; j < words.length; j++) {           // loop through the array
   if (words[j].length > longestWord.length) {       // if the word is longer than the longest word
    longestWord = words[j];                          // make the word the longest word
   }
  }
  longestWords.push(longestWord);                    // add the longest word to the array
  words.splice(words.indexOf(longestWord), 1);       // remove the longest word from the array
 }
 return longestWords;                                // return the longest words
}
console.log(longestWords('longest words in a string', 3));




 