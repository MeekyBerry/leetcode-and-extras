/*=====                              SECOND LARGEST DIGIT IN A STRING                          ======*/
/*=============================================
 // Given an alphanumeric string s, return the second largest numerical digit that appears in s, or - 1 if it does not exist.
// An alphanumeric string is a string consisting of lowercase English letters and digits.
// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are[1, 2, 3].The second largest digit is 2.
 =============================================*/
const secondHighest = (s) => {
 let st = new Set();
 for (let i = 0; i < s.length; i++) {
  if (s[i] >= '0' && s[i] <= '9') {
   st.add(s[i]);
  }
 }
 if (st.size < 2) {
  return -1;
 }
 let arr = Array.from(st);
 arr.sort((a, b) => b - a);
 return arr[1];
};
console.log(secondHighest("dfa12321afd"));

/*----------                                UGLY NUMBER                              ----------*/     
/*=============================================
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.
// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
 =============================================*/
const isUgly = (n) => {
 if (n <= 0) {
  return false;
 }
 while (n % 2 === 0) {
  n = n / 2;
 }
 while (n % 3 === 0) {
  n = n / 3;
 }
 while (n % 5 === 0) {
  n = n / 5;
 }
 return n === 1;
};
console.log(isUgly(6));
