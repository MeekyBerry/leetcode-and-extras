// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([)]"
// Output: false

// Example
// Input: s = "{[]}"`
// Output: true

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
  const stack = []; // create a stack to store the opening brackets
  const map = { "(": ")", "[": "]", "{": "}" }; // create a map of opening brackets to closing brackets

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      // if the current character is an opening bracket, push it to the stack
      stack.push(s[i]);
    } else {
      const last = stack.pop(); // the last element of the stack (the last opening bracket) to compare it to the current character (the closing bracket)
      if (s[i] !== map[last]) {
        // if the current character is a closing bracket, pop from the stack and compare the popped element to the corresponding closing bracket
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    // if the stack still contains elements, then it is an invalid expression
    return false;
  }

  return true;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
