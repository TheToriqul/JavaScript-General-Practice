/**
 * BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
 */

// Input values
let weight = 70;
let height = 1.75;

let bmi = weight / (height * height);

bmi = Math.round(bmi * 10) / 10;

console.log("Your BMI is: " + bmi);

if (bmi < 18.5) {
    console.log("You are underweight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You are normal.");
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log("You are overweight.");
} else {
    console.log("You are obese.");
}

// Additional Challenge: Include a function to validate the input values (weight and height) before calculating the BMI.

function validateInput(weight, height) {
    if (typeof weight !== "number" || typeof height !== "number") {
        return "Invalid input. Weight and height must be numbers.";
    }

    if (weight <= 0 || height <= 0) {
        return "Invalid input. Weight and height must be positive numbers.";
    }

    return true;
}

// End