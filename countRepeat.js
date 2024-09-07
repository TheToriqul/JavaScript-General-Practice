/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */

const numbers = [5, 6, 11, 12, 98, 5];
const find = 5;

function countRepeats(numbers, find) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === find) {
      count++;
    }
  }
  return count;
}

console.log(countRepeats(numbers, find));

// Another Function to find

function countRepeats(numbers, find) {
  return numbers.filter(num => num === find).length;
}

console.log(countRepeats(numbers, find));
