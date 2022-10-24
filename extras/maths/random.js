/* ---------- RANDOM NUMBER GENERATOR ---------- */
const randomNumber = () => {                                // function that generates a random number
 return Math.floor(Math.random() * 10) + 1;                   // return a random number between 1 and 10
}
console.log(randomNumber()); 