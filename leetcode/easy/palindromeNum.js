// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is palindrome while 123 is not.

// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false

// Constraints:
// -231 <= x <= 231 - 1


 const isPalindrome = (x) => {     // function that takes in a number
  let num = x.toString();             // convert the number to a string and store it in a variable called num
  let reverse = num.split("").reverse().join("");   // split the string into an array, reverse the array, and join the array back into a string
 if (num === reverse) { 
   return true;
  } else {
   return false;
  }
};
 
console.log(isPalindrome(121));

