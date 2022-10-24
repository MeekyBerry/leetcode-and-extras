/* FUNCTION TO FIND THE MOST COMMON WORD IN AN ARRAY */
const mostCommon = (str) => {
 let mostCommon = '';                                // create a variable to store the most common word
 let count = 0;                                      // create a variable to store the count
 for (let i = 0; i < str.length; i++) {              // loop through the array
  let currentCount = 0;                              // create a variable to store the current count
  for (let j = 0; j < str.length; j++) {             // loop through the array
   if (str[i] === str[j]) {                          // if the word is the same as the current word
    currentCount++;                                 // add to the current count
   }
  }
  if (currentCount > count) {                        // if the current count is greater than the count
   count = currentCount;                            // make the current count the count
   mostCommon = str[i];                             // make the word the most common word
  }
 }
 return mostCommon;                                  // return the most common word
}
console.log(mostCommon(['sheep', 'goat', 'cattle', 'horse', 'sheep', 'dog', 'horse', 'sheep']));



/* FUNCTION TO FIND X AMOUNT OF MOST COMMON WORDS IN A STRING */
const mostCommonWords = (str, x) => {
 let mostCommonWords = [];                           // create an array to store the most common words
 let words = str.split(' ');                         // split the string into an array of words
 for (let i = 0; i < x; i++) {                       // loop through the array
  let mostCommonWord = '';                           // create a variable to store the most common word
  let count = 0;                                     // create a variable to store the count
  for (let j = 0; j < words.length; j++) {           // loop through the array
   let currentCount = 0;                             // create a variable to store the current count
   for (let k = 0; k < words.length; k++) {          // loop through the array
    if (words[j] === words[k]) {                     // if the word is the same as the current word
     currentCount++;                                // add to the current count
    }
   }
   if (currentCount > count) {                       // if the current count is greater than the count
    count = currentCount;                           // make the current count the count
    mostCommonWord = words[j];                      // make the word the most common word
   }
  }
  mostCommonWords.push(mostCommonWord);             // add the most common word to the array
  words.splice(words.indexOf(mostCommonWord), 1);   // remove the most common word from the array
 }
 return mostCommonWords;                             // return the most common words
}
console.log(mostCommonWords('goat dog cat goat cow dog cat', 2));