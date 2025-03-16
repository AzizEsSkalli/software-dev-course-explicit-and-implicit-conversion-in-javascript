/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// Task 1: Debug the code :

let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
  console.log("This is valid!");
}

let age = Number("25");   //We need to convert ("25") to a number, 
let totalAge = age + 5;   //because the concatenation of string("25") + number(5) treat number 5 like a string.
console.log("Total Age: " + totalAge);


// Task 2: Examples of Type Conversion : 

//  Example of implicit type conversion :
let a = 25;
let b = null;
console.log(a * b); // the output : 0 (null is converted automatically to 0).

// Example of explicit type conversion :

let femaleCandidate = 17;
let maleCandidate = Number("10"); // converting the string ("10") to number (10).
let totalCandidate = femaleCandidate + maleCandidate;
console.log(totalCandidate);
