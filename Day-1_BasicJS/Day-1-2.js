// In this part, we'll focus on learning about Data Types and ECMAScript standards.

"use strict"; // This directive enforces modern ECMAScript standards and helps catch common coding mistakes.

// Since we're using Node.js and not a browser, alerts won't work. So, we're logging the result instead.
console.log(3 + 3); // This line logs the result of the expression 3 + 3, which is 6.

console.log("I am Rudra Patel and welcoming you to the day1 part 2"); // This line logs a welcoming message to the console.

let name ="Hitesh"; // Declares a variable 'name' and assigns it the string value "Hitesh".
let age = 19; // Declares a variable 'age' and assigns it the number value 19.
let isLoggedIn = false; // Declares a variable 'isLoggedIn' and assigns it the boolean value false.

// Here are the Data Types:
// - number: Represents numeric values, ranging from -(2^53 - 1) to 2^53 - 1.
// - bigInt: Represents arbitrary-precision integers.
// - string: Represents textual data, enclosed within double quotes or single quotes.
// - boolean: Represents true or false values.
// - null: Represents the intentional absence of any value.
// - undefined: Represents a variable that has been declared but has not been assigned a value.
// - symbol: Represents a unique and immutable value used as the key of an object property.

// Now, let's log the data type of each variable using the 'typeof' operator.
console.log("Here are the data types:" + '\n'); // '\n' is used to start a new line.

console.log("Name is " + typeof name + " Datatype" + '\n'); // Logs the data type of 'name'.
console.log("isLoggedIn is " + typeof isLoggedIn + " Datatype" + '\n'); // Logs the data type of 'isLoggedIn'.
console.log("123 is " + typeof 123 + " Datatype" + '\n'); // Logs the data type of the number 123.
console.log("rudra is " + typeof "rudra" + " Datatype" + '\n'); // Logs the data type of the string "rudra".
console.log("false is " + typeof false + " Datatype" + '\n'); // Logs the data type of the boolean value false.
console.log("null is " + typeof null + " Datatype" + '\n'); // Logs the data type of null.
console.log("undefined is " + typeof undefined + " Datatype" + '\n'); // Logs the data type of undefined.
