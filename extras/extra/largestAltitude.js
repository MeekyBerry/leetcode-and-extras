/*----------                               FIND THE HIGHEST ALTITUDE                            ----------*/
/*=============================================
// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.
// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are[0,-5,-4,1,1,-6].The highest is 1.
 =============================================*/
const largestAltitude = (gain) => {                            // function that takes in an array
 let arr = [0];                                            // create an array with 0 as the first element
 for (let i = 0; i < gain.length; i++) {                      // loop through the array
  arr.push(arr[i] + gain[i]);    // add the current element to the previous element and push it to the array
 }
 return Math.max(...arr);                                    // return the highest number in the array
}
console.log(largestAltitude([-5, 1, 5, 0, -7]));