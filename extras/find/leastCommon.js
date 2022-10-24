

/* FUNCTION TO FIND THE LEAST COMMON WORD IN AN ARRAY */
const leastCommon = (str) => {
 let leastCommon = '';                               // create a variable to store the least common word
 let count = str.length;                             // create a variable to store the count
 for (let i = 0; i < str.length; i++) {              // loop through the array
  let currentCount = 0;                              // create a variable to store the current count
  for (let j = 0; j < str.length; j++) {             // loop through the array
   if (str[i] === str[j]) {                          // if the word is the same as the current word
    currentCount++;                                 // add to the current count
   }
  }
  if (currentCount < count) {                        // if the current count is less than the count
   count = currentCount;                            // make the current count the count
   leastCommon = str[i];                            // make the word the least common word
  }
 }
 return leastCommon;                                 // return the least common word
}
console.log(leastCommon(['sheep', 'goat', 'cattle', 'horse', 'sheep', 'goat', 'horse', 'sheep']));


/* FUNCTION TO FIND X AMOUNT OF LEAST COMMON WORDS IN A STRING */
const leastCommonWords = (str, x) => {
 let leastCommonWords = [];                          // create an array to store the least common words
 let words = str.split(' ');                         // split the string into an array of words
 for (let i = 0; i < x; i++) {                       // loop through the array
  let leastCommonWord = str;                         // create a variable to store the least common word
  let count = str.length;                            // create a variable to store the count
  for (let j = 0; j < words.length; j++) {           // loop through the array
   let currentCount = 0;                             // create a variable to store the current count
   for (let k = 0; k < words.length; k++) {          // loop through the array
    if (words[j] === words[k]) {                     // if the word is the same as the current word
     currentCount++;                                // add to the current count
    }
   }
   if (currentCount < count) {                       // if the current count is less than the count
    count = currentCount;                           // make the current count the count
    leastCommonWord = words[j];                     // make the word the least common word
   }
  }
  leastCommonWords.push(leastCommonWord);           // add the least common word to the array
  words.splice(words.indexOf(leastCommonWord), 1);  // remove the least common word from the array
 }
 return leastCommonWords;                            // return the least common words
}
console.log(leastCommonWords('goat dog cat goat cow dog', 2));