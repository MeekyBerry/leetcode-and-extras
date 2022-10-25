/*=====          SECOND LARGEST DIGIT IN A STRING            ======*/
/*=============================================
 // Given an alphanumeric string s, return the second largest numerical digit that appears in s, or - 1 if it does not exist.
// An alphanumeric string is a string consisting of lowercase English letters and digits.
// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are[1, 2, 3].The second largest digit is 2.
 =============================================*/
const secondHighest = (s) => {                   // function that takes in a string
 let st = new Set();                            // create a set
 for (let i = 0; i < s.length; i++) {          // loop through the string
  if (s[i] >= '0' && s[i] <= '9') {            // if the character is a number
   st.add(s[i]);                               // add it to the set
  }
 }
 if (st.size < 2) {                            // if the set has less than 2 numbers
  return -1;                                    // return -1
 }
 let arr = Array.from(st);                      // convert the set to an array
 arr.sort((a, b) => b - a);                     // sort the array in descending order
 return arr[1];                                  // return the second element
};
console.log(secondHighest("dfa12321afd"));