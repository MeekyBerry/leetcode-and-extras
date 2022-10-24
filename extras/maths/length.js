
/* FUNCTION TO FIND NUMBER OF WORDS IN A STRING */
const numberOfWords = (str) => {
 let words = str.split(' ');                         // split the string into an array of words
 return words.length;                                // return the number of words
}
console.log(numberOfWords('number of words in a string'));