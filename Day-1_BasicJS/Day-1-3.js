console.log("In this section we're going to learn about Datatype Conversion");

let age = "19"; // Declares a variable 'age' and initializes it with a string value "19"

// Let's check the datatype of 'age' using typeof operator
console.log(typeof age + '\n'); // Logs the datatype of 'age', which is string

// We can also check datatype like this
console.log(typeof (age) + '\n');

console.log("Now we're going to learn how to change datatype" + '\n');

let age2; // Declares a variable 'age2' without initializing it

// Now, we'll convert the datatype of 'age' to a number and store it in 'age2'
age2 = Number(age); // Using Number() function to convert string to number

// Let's check the datatype of 'age2'
console.log(typeof age2);

// Now we'll try some complex conversions by changing 'age' value to "19abc"
console.log("Here we're going to change age value to '19abc'" + '\n');

age = "19abc"; // Changes the value of 'age' to "19abc"

console.log("Now you can see we changed age value and value is " + age + '\n');

// Now, let's check the datatype of 'age2' after assigning "19abc" to 'age'
console.log("Now we're going to check the datatype of age2" + '\n');

console.log(typeof age2); // Although typeof shows 'number', the value is actually NaN (Not a Number)

console.log("Here's the output of age2: " + age2 + '\n');

console.log("When we used typeof function, it showed us it's a number, but when we tried to output the value, it shows NaN (Not a Number)" + '\n');

// Now, let's assign null to 'age'
console.log("Now we're going to see what happens if we assign null to the age variable" + '\n');

console.log("Here we're going to change age value to 'null'" + '\n');

age = "null"; // Changes the value of 'age' to "null"

console.log("Now you can see we changed age value and value is " + age + '\n');

// Let's check the datatype of 'age2' after assigning "null" to 'age'
console.log("Now we're going to check the datatype of age2" + '\n');

console.log(typeof age2); // Although typeof shows 'number', the value is actually 0

console.log("Here's the output of age2: " + age2 + '\n');
// When used in a boolean context, 0 represents false and any other number represents true
