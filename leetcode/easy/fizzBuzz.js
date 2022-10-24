
/*----------                               FIZZ BUZZ                            ----------*/
/*=============================================
// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.
// Input: n = 3
// Output: ["1", "2", "Fizz"]
 =============================================*/
const fizzBuzz = (n) => {                            // function that takes in a number
 let answer = [];                                    // create an empty array
 for (let i = 1; i <= n; i++) {                      // loop through the numbers from 1 to n
  if (i % 3 === 0 && i % 5 === 0) {                  // if the number is divisible by 3 and 5
   answer.push("FizzBuzz");                          // add "FizzBuzz" to the array
  } else if (i % 3 === 0) {                          // if the number is divisible by 3
   answer.push("Fizz");                              // add "Fizz" to the array
  } else if (i % 5 === 0) {                          // if the number is divisible by 5
   answer.push("Buzz");                              // add "Buzz" to the array
  } else {                                           // if the number is not divisible by 3 or 5
   answer.push(i.toString());                        // add the number to the array
  }
 }
 return answer;                                       // return the array
}
console.log(fizzBuzz(3));