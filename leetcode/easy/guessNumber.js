
// Guess Number Higher or Lower II

// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I'll tell you whether the number I picked is higher or lower.
// However, when you guess a particular number x, and you guess wrong, you pay $x. You win the game when you guess the number I picked.
// Given a particular n ≥ 1, find out how much money you need to have to guarantee a win.

// Example:
// Input: n = 10
// Output: 16
// Explanation: The winning strategy is as follows:
// The range is [1,10]. Guess 7.
// If this is my number, your total is $0. Otherwise, you pay $7.
// If my number is higher, the range is [8,10]. Guess 9.
// If this is my number, your total is $7. Otherwise, you pay $9.
// If my number is higher, it must be 10. Guess 10. Your total is $7 + $9 = $16.
// If my number is lower, it must be 8. Guess 8. Your total is $7 + $9 = $16.
// If my number is lower, the range is [1,6]. Guess 3.
// If the number is 3, your total is $7. Otherwise, you pay $3.
// If my number is higher, the range is [4,6]. Guess 5.
// If the number is 5, your total is $7 + $3 = $10. Otherwise, you pay $5.
// If my number is higher, it must be 6. Guess 6. Your total is $7 + $3 + $5 = $15.
// If my number is lower, it must be 4. Guess 4. Your total is $7 + $3 + $5 = $15.
// The worst case in all these scenarios is that you pay $16. Hence, you only need $16 to guarantee a win.

// Constraints:
// 1 <= n <= 200

/**
  * @param {number} n
  * @return {number}
  */

const getMoneyAmount = (n) => {
  const dp = Array(n + 1).fill(0).map(() => Array(n + 1).fill(0));
  for (let i = n - 1; i > 0; i--) {
    for (let j = i + 1; j <= n; j++) {
      let min = Number.MAX_SAFE_INTEGER;
      for (let k = i; k < j; k++) {
        min = Math.min(min, k + Math.max(dp[i][k - 1], dp[k + 1][j]));
      }
      dp[i][j] = min;
    }
  }
  return dp[1][n];
}

console.log(getMoneyAmount(10));

