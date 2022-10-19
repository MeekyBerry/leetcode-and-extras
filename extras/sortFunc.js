/* FUNCTION TO SORT EVEN NUMBERS FIRST BEFORE ODD NUMBERS IN AN ARRAY */
const evenFirst = (num) => {
let even = [];                                        // create an empty array for even numbers
let odd = [];                                         // create an empty array for odd numbers
for (let i = 0; i < num.length; i++) {               // loop through the array
 if (num[i] % 2 === 0) {                             // if even 
  even.push(num[i]);                                 // add to the even array
 } else {                                            // if odd
  odd.push(num[i]);                                  // add to the odd array
 }
}
 return even.concat(odd);                   // return the even array concatenated with the odd array
}
console.log(evenFirst([3, 1, 2, 4]));          

/* FUNCTION TO SORT ODD NUMBERS FIRST BEFORE EVEN NUMBERS IN AN ARRAY */
const oddFirst = (num) => {
 let even = [];                                        // create an empty array for even numbers
 let odd = [];                                         // create an empty array for odd numbers
 for (let i = 0; i < num.length; i++) {               // loop through the array
  if (num[i] % 2 === 0) {                             // if even
   even.push(num[i]);                                 // add to the even array
  } else {                                            // if odd
   odd.push(num[i]);                                  // add to the odd array
  }
 }
 return odd.concat(even);                   // return the odd array concatenated with the even array
}
console.log(oddFirst([3, 1, 2, 4])); 

/* FUNCTION TO SORT NUMBERS IN ASCENDING ORDER */
const ascend = (num) => {
 return num.sort((a, b) => a - b);                   // sort the array in ascending order
}
console.log(ascend([3, 1, 2, 4]));  

/* FUNCTION TO SORT NUMBERS IN DESCENDING ORDER */
const descend = (num) => {
 return num.sort((a, b) => b - a);                   // sort the array in descending order
}
console.log(descend([3, 1, 2, 4]));  

/* FUNCTION TO FIND THE HIGHEST VALUE IN AN ARRAY */
const highest = (num) => {
 return Math.max(...num);                            // return the highest value in the array
}
console.log(highest([3, 1, 2, 4]));

/* FUNCTION TO FIND THE LOWEST VALUE IN AN ARRAY */
const lowest = (num) => {
 return Math.min(...num);                            // return the lowest value in the array
}
console.log(lowest([3, 1, 2, 4]));

/* FUNCTION TO FIND THE AVERAGE OF AN ARRAY */
const average = (num) => {
 let sum = 0;                                        // create a variable to store the sum of the numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  sum += num[i];                                     // add the numbers to the sum
 }
 return sum / num.length;                            // return the sum divided by the length of the array
}
console.log(average([3, 1, 2, 4]));

/* FUNCTION TO FIND THE SUM OF AN ARRAY */
const sum = (num) => {
 let total = 0;                                      // create a variable to store the sum of the numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  total += num[i];                                   // add the numbers to the sum
 }
 return total;                                       // return the sum
}
console.log(sum([3, 1, 2, 4]));

/* FUNCTION TO FIND THE DIFFERENCE OF A NUMBER */
const difference = (num) => {
 let diff = 0;                                   // create a variable to store the difference of the numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  diff -= num[i];                                    // subtract the numbers to the difference
 }
 return diff;                                        // return the difference
}
console.log(difference([3, 1, 2, 4]));

/* FUNCTION TO FIND THE REMAINDER OF A NUMBER */
const remainder = (num) => {
 let rem = 0;                                   // create a variable to store the remainder of the numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  rem %= num[i];                                     // find the remainder of the numbers
 }
 return rem;                                         // return the remainder
}
console.log(remainder([3, 1, 2, 4]));

/* FUNCTION TO FIND THE PRODUCT OF AN ARRAY */
const product = (num) => {
 let total = 1;                                      // create a variable to store the product of the numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  total *= num[i];                                   // multiply the numbers to the product
 }
 return total;                                       // return the product
}
console.log(product([3, 1, 2, 4]));  

/* Function to negate all numbers in an array */
const negate = (num) => {
 let neg = [];                                       // create an empty array for the negative numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  neg.push(-num[i]);                                 // add the negative numbers to the array
 }
 return neg;                                         // return the array
}
console.log(negate([3, 1, 2, 4]));

/* FUNCTION TO BINARY CONVERT AN ARRAY */
const binary = (num) => {
 let bin = [];                                       // create an empty array for the binary numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  bin.push(num[i].toString(2));                      // add the binary numbers to the array
 }
 return bin;                                         // return the array
}
console.log(binary([3, 1, 2, 4]));

/* FUNCTION TO CONVERT AN ARRAY TO HEXADECIMAL */
const hex = (num) => {
 let hex = [];                                       // create an empty array for the hexadecimal numbers
 for (let i = 0; i < num.length; i++) {              // loop through the array
  hex.push(num[i].toString(16));                     // add the hexadecimal numbers to the array
 }
 return hex;                                         // return the array
}
console.log(hex([3, 1, 2, 4]));

/* FUNCTION TO SORT AN ARRAY IN ALPHABETICAL ORDER */
const alpha = (str) => {
 return str.sort();                                  // sort the array in alphabetical order
}
console.log(alpha(['c', 'a', 'b', 'd']));

/* FUNCTION TO SORT AN ARRAY IN REVERSE ALPHABETICAL ORDER */
const reverseAlpha = (str) => {
 return str.sort().reverse();                        // sort the array in reverse alphabetical order
}
console.log(reverseAlpha(['c', 'a', 'b', 'd']));

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

/* FUNCTION TO FIND EVERY OTHER WORD IN AN ARRAY */
const everyOther = (str) => {
 let everyOther = [];                                // create an empty array for every other word
 for (let i = 0; i < str.length; i++) {           // loop through the array
  everyOther.push(str[i]);                           // add every other word to the array
 }
 return everyOther;                                  // return the array
} 
console.log(everyOther(['dog', 'goat', 'cattle']));

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

/* FUNCTION TO FIND VOWELS IN A STRING */
const vowels = (str) => {
 let vowels = '';                                    // create a variable to store the vowels
 for (let i = 0; i < str.length; i++) {              // loop through the string
  if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {  // if the letter is a vowel
   vowels += str[i];                                 // add the letter to the vowels
  }
 }
 return vowels;                                      // return the vowels
}
console.log(vowels('hello'));

/* FUNCTION TO FIND CONSONANTS IN A STRING */
const consonants = (str) => {
 let consonants = '';                                // create a variable to store the consonants
 for (let i = 0; i < str.length; i++) {              // loop through the string
  if (str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u') {  // if the letter is a consonant
   consonants += str[i];                             // add the letter to the consonants
  }
 }
 return consonants;                                  // return the consonants
}
console.log(consonants('hello'));

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

/* FUNCTION TO FIND NUMBER OF WORDS IN A STRING */
const numberOfWords = (str) => {
 let words = str.split(' ');                         // split the string into an array of words
 return words.length;                                // return the number of words
}
console.log(numberOfWords('number of words in a string'));



