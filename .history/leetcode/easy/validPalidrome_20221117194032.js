// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = ""
// Output: true
// Explanation: An empty string is a palindrome. (s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.)

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

const isPalindrome = (s) => {
  let str = s.toLowerCase().replace(/[^a-z0-9]/g, ""); // convert the string to lowercase and remove all non-alphanumeric characters and store it in a variable called str
  let reverse = str.split("").reverse().join(""); // split the string into an array, reverse the array, and join the array back into a string and store it in a variable called reverse
  if (str === reverse) {
    // if the string is equal to the reverse string then return true else return false
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(""));
