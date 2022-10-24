/* FUNCTION TO FIND THE SHORTEST WORD IN AN ARRAY */
const shortest = (str) => {
 let shortest = str[0];                              // create a variable to store the shortest word
 for (let i = 1; i < str.length; i++) {              // loop through the array
  if (str[i].length < shortest.length) {             // if the word is shorter than the shortest word
   shortest = str[i];                                // make the word the shortest word
  }
 }
 return shortest;                                    // return the shortest word
}
console.log(shortest(['dog', 'goat', 'cattle']));



/* FUNCTION TO FIND THE SHORTEST WORD IN A STRING */
const shortestWord = (str) => {
 let shortestWord = str;                             // create a variable to store the shortest word
 let words = str.split(' ');                         // split the string into an array of words
 for (let i = 0; i < words.length; i++) {            // loop through the array
  if (words[i].length < shortestWord.length) {       // if the word is shorter than the shortest word
   shortestWord = words[i];                          // make the word the shortest word
  }
 }
 return shortestWord;                                // return the shortest word
}
console.log(shortestWord('shortest word in a string'));



/* FUNCTION TO FIND X AMOUNT OF SHORTEST WORDS IN A STRING */
const shortestWords = (str, x) => {
 let shortestWords = [];                             // create an array to store the shortest words
 let words = str.split(' ');                         // split the string into an array of words
 for (let i = 0; i < x; i++) {                       // loop through the array
  let shortestWord = str;                            // create a variable to store the shortest word
  for (let j = 0; j < words.length; j++) {           // loop through the array
   if (words[j].length < shortestWord.length) {      // if the word is shorter than the shortest word
    shortestWord = words[j];                         // make the word the shortest word
   }
  }
  shortestWords.push(shortestWord);                  // add the shortest word to the array
  words.splice(words.indexOf(shortestWord), 1);      // remove the shortest word from the array
 }
 return shortestWords;                               // return the shortest words
}
console.log(shortestWords('shortest words in a string', 3));