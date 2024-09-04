/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

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