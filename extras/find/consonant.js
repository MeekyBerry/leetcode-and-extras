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