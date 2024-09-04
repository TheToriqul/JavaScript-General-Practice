/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// Input score
let score = 85; // Change this value to test different scores

// Determine the grade
let grade;

if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 80 && score <= 89) {
    grade = 'B';
} else if (score >= 70 && score <= 79) {
    grade = 'C';
} else if (score >= 60 && score <= 69) {
    grade = 'D';
} else if (score >= 0 && score <= 59) {
    grade = 'F';
} else {
    grade = 'Invalid score';
}

// Output the result
console.log(`For a score of ${score}, the grade is: ${grade}`);