// Output a message to the console
console.log("Here you can write a message");

// Now We Gonna Learn About Variables

// Declare a constant variable 'emailId' and assign it the value "rudrahp@gmail.com"
const emailId = "rudrahp@gmail.com"; // 'const' is used when we don't want to change the value after assigning it

// Declare a variable 'accountId' using let and assign it the value 123456
let accountId = 123456; // 'let' is used when the value may change later

// Declare a variable 'accountPass' using var and assign it the value 2121
var accountPass = 2121; // 'var' is the traditional way of declaring variables, but 'let' is generally preferred

// Declare a variable 'fName' and assign it the value "rudra"
fName = "rudra"; // This implicitly creates a global variable 'fName'. Consider using 'let' or 'const' instead.

// Display the values of the variables to the console
console.log(emailId);
console.log(accountId);
console.log(accountPass);
console.log(fName);

// Now we're going to change the values and observe the results
console.log("Now We gonna change value and see what happens, is it changed or not");
console.log();

// Attempt to change the values of variables (commented out because it causes an error)
// emailId = "rudra@gmail.com"; // We can't change the value of a constant variable after it's assigned
accountId = 33098; // We can change the value of a variable declared with 'let'
accountPass = 2323; // We can change the value of a variable declared with 'var'
fName = "Hello"; // We can change the value of the implicitly declared global variable 'fName'

// Display the updated values of the variables to the console
console.log(emailId);
console.log(accountId);
console.log(accountPass);
console.log(fName);
