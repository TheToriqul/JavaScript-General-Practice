// Write a function to count the number of vowels in a string.

function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();

        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Output:

console.log(countVowels("Hello World"));
console.log(countVowels("javascript is a very good programming language"));
console.log(countVowels("programming hero is the best edTech in Bangladesh."));

// Another Function

function countVowels2(str) {
    let vowels = 'aeiou';
    let count = (str.toLowerCase()).match(/[aeiou]/g).length;

    return count;
}

// Output:

console.log(countVowels2("Hello World"));
console.log(countVowels2("javascript is a very good programming language"));
console.log(countVowels2("programming hero is the best edTech in Bangladesh."));

