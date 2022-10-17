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

/*----------                               Fizz Buzz                             ----------*/
/*=============================================
// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.
// Input: n = 3
// Output: ["1", "2", "Fizz"]
 =============================================*/

const fizzBuzz = (n) => {
 let answer = [];
 for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
   answer.push("FizzBuzz");
  } else if (i % 3 === 0) {
   answer.push("Fizz");
  } else if (i % 5 === 0) {
   answer.push("Buzz");
  } else {
   answer.push(i.toString());
  }
 }
 return answer;
}