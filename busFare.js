/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// Input variables
let age = 25;
let isStudent = true;

// Constants
const regularFare = 800;

// Variables for calculation
let finalFare;
let ticketType;

// Ticket fare calculation logic
if (age < 10) {
    finalFare = 0;
    ticketType = "Child ticket";
} else if (isStudent) {
    finalFare = regularFare * 0.5;
    ticketType = "Student ticket";
} else if (age >= 60) {
    finalFare = regularFare * 0.85;
    ticketType = "Senior citizen ticket";
} else {
    finalFare = regularFare;
    ticketType = "Regular ticket";
}

// Output results
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log(ticketType);
console.log("Ticket fare:", finalFare, "tk");