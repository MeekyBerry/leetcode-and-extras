const usersDatabase = {
 "Mikky": {
  firstName: "Elue",
  lastName: "Michael",
  email: "mikkylanky03@gmail.com",
  accountActivated: true,
  password: 596794599
 },

 "Joel": {
  firstName: "Kelly",
  lastName: "Easiboy",
  email: "joelkelly@gmail.com",
  accountActivated: false,
  password: 596794588
 },

 "Berry": {
  firstName: "lanky",
  lastName: "prestige",
  email: "lankyprestige@gmail.com",
  accountActivated: true,
  password: 596794566
 },

 "Yahoo": {
  firstName: "G-boy",
  lastName: "E-money",
  email: "emoney@yahoo.com",
  accountActivated: false,
  password: 596794577
 }
}

function displayUserDetails() {
 // username section
 let userName = prompt("Enter your username")         // prompt user to enter username

 while (validateUsername(userName) == false) {         // validate username
  userName = prompt("Enter a valid username")      // prompt user to enter a valid username
 }

 if (userName == null) {                              // if user clicks cancel
  return                                           // exit function
 }
 // password section
 let password = prompt("Enter your password")          // prompt user to enter password

 while (validatePassword(password) == false) {         // validate password
  password = prompt("Enter a valid password")       // prompt user to enter a valid password
 }
 if (password == null) {                               // if user clicks cancel
  return                                            // exit function
 }

 let confirmPassword = prompt("confirm your password")       // prompt user to confirm password

 while (confirmPassword !== password) {                     // validate password
  confirmPassword = prompt("password incorrect, confirm your password")    // prompt user to confirm password
 }

 if (confirmPassword == null) {                        // if user clicks cancel
  return                                           // exit function
 }

 const user = usersDatabase[userName]                 // get user details from database

 console.log(user)                                      // display user details

 if (user == undefined) {                              // if user is not in database
  alert("user not found, please register first")    // alert user
 }
 alert(`                                               
        user found with these details:
        First name: ${user.firstName}
        Last name: ${user.lastName}
        Email: ${user.email}                               
        Account activated: ${user.accountActivated}               
    `)                                                       // alert user with user details
}

displayUserDetails()                                        // call function

// alert("Goodbye")


function validateUsername(username) {               // function to validate username
 if (username == null) {                          // if user clicks cancel
  return true                                 // return true
 }
 if (username.length > 10) {                     // if username is greater than 10 characters
  return false                                // return false
 } else {                                         // else
  return true                                 // return true
 }
}

function validatePassword(password) {                // function to validate password
 if (password == null) {                             // if user clicks cancel
  return true                                   // return true
 }
 if (password.length < 6) {                        // if password is less than 6 characters
  return false                                  // return false
 } else {                                          // else
  return true                                  // return true
 }
}
