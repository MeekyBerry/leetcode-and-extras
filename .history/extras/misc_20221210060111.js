const getStarted = () => {
  window.location.href = "/users"; // Redirect the user to the users component when the get started button is clicked
};

//Giving an unsorted array of n elements, find if K is present in the array or not. the function must return a string YES or NO denoting if the element is present or not

function findNumber(arr, k) {
  let result = "NO";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      result = "YES";
    }
  }
  return result;
}

console.log(findNumber([1, 2, 3, 4, 5], 4)); // YES
console.log(findNumber([1, 2, 3, 4, 5], 6)); // NO

// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros.
// Print the decimal value of each fraction on a new line.
function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  console.log(positive / arr.length);
  console.log(negative / arr.length);
  console.log(zero / arr.length);
}

plusMinus([-4, 3, -9, 0, 4, 1]); // 0.500000 | // 0.333333 | // 0.166667

// Give two integers, l and r, print all the odd numbers between l and r (l and r inclusive)
function oddNumbers(l, r) {
  let result = [];
  for (let i = l; i <= r; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(oddNumbers(2, 5)); // [3, 5]
console.log(oddNumbers(3, 9)); // [3, 5, 7, 9]
