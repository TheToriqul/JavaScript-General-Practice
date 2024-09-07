/**
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */

function findLongestWord(str) {
  // Split the string into an array of words
  let words = str.split(" ");

  // Initialize the longest word and its length
  let longestWord = "";
  let maxLength = 0;

  // Iterate over each word
  for (let word of words) {
    if (word.length > maxLength) {
      longestWord = word;
      maxLength = word.length;
    }
  }
  return longestWord;
}

// Test the function

console.log(
  findLongestWord("I am learning Programming to become a programmer")
);

console.log(findLongestWord("Hello Worlds"));

console.log(findLongestWord("This is a test sentence"));
