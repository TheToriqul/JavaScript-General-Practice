/**
 * Find the lowest number in the array below.
 * const heights2 = [167, 190, 120, 165, 137];
 */

const heights2 = [167, 190, 120, 165, 137];
let lowestNumber = heights2[0];

for (let i = 1; i < heights2.length; i++) {
  if (heights2[i] < lowestNumber) {
    lowestNumber = heights2[i];
  }
}

console.log("The lowest number in the array is:", lowestNumber);

// Easiest Way to find the lowest number

const lowestNumber2 = Math.min(...heights2);
console.log("The lowest number in the array is:", lowestNumber2);