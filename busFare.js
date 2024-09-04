/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// Input variables
let age = 35;
let isStudent = false;

// Constants
const regularFare = 800;

// Variables for calculation
let finalFare;
let ticketType;

// Ticket fare calculation logic
/**
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
*/

// Another way to get the ticket fare.

let ticketFare = regularFare;

if (age <= 10) {
    ticketFare = 0;
    console.log("Child ticket fare:", ticketFare, "tk");
} else if (isStudent) {
    ticketFare *= 0.5;
    console.log("Student ticket fare:", ticketFare, "tk");
} else if (age >= 60) {
    ticketFare *= 0.85;
    console.log("Senior citizen ticket fare:", ticketFare, "tk");
}
else {
   console.log("Regular ticket fare:", ticketFare, "tk");
}