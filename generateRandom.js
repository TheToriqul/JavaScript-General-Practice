// Generate a random number between 10 to 20.

const randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

console.log(randomNumber);

// Generate a random number between 0 and 20.

const randomNumbers = Math.floor(Math.random() * 11) + 10;
console.log(randomNumbers);

// Generate a random number between 0 and 100.

const randomNumber2 = Math.floor(Math.random() * 101);

console.log(randomNumber2);

// Generate a random number between 0 and 100, but ensure that it is divisible by 5.

let randomNumber3;

do {
  randomNumber3 = Math.floor(Math.random() * 101);
} while (randomNumber3 % 5 !== 0);

console.log(randomNumber3);

// Generate a random number between 0 and 100, but ensure that it is divisible by both 3 and 5.

let randomNumber4;

do {
  randomNumber4 = Math.floor(Math.random() * 101);
} while (randomNumber4 % 3 !== 0 || randomNumber4 % 5 !== 0);

console.log(randomNumber4);

// Function
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNum = getRandomNumber(10, 20);
console.log(randomNum);

// Function with additional requirements

function getRandomNumberWithAdditionalRequirements(min, max, divisibleBy) {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (randomNumber % divisibleBy !== 0);

  return randomNumber;
}

const randomNum2 = getRandomNumberWithAdditionalRequirements(0, 100, 5);

console.log(randomNum2);
