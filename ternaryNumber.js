/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
/**
// Example 1: Check if a number is positive or non-positive
let num3 = -3;
let result = num3 > 0 ? "Positive" : "Non-positive";
console.log(result);

// Example 2: Find the maximum of two numbers
let a = 10, b = 15;
let max = a > b ? a : b;
console.log("Maximum:", max);

// Example 3: Check if a number is even or odd
let num4 = 7;
console.log(num4 % 2 === 0 ? "Even" : "Odd");

// Example 4: Nested ternary (use sparingly as it can reduce readability)
let num5 = 0;
let message = num5 > 0 ? "Positive" : (num5 < 0 ? "Negative" : "Zero");
console.log(message);
*/

// Another way to check

let num1 = 30;
let num2 = 20;

if (num1 > num2) {
  let result = num1 * 2;
  console.log(result);
} else {
  let result = num1 + num2;
  console.log(result);
}

// Using ternary operator

let result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result);

// Another example.
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Outputs: "Yes"

// Ternary in a function
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}
console.log(getFee(true)); // Outputs: "$2.00"
console.log(getFee(false)); // Outputs: "$10.00"

// Ternary in a arithmetic

let x = 5, y = 10;
let sum = x > y ? x + y : x - y;
console.log(sum); // Outputs: 15

// ----------------------------------------------------------------
let a = 5, b = 3;
let result2 = a > b ? a + b : a - b;
console.log(result2); // Outputs: 8

// Nested ternary (use with caution, can become hard to read):
let num = 10;
let nestedResult = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(nestedResult); // Outputs: "Positive"