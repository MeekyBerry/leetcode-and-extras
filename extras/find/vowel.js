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