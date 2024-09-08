/**
 * Find the friend with the smallest name.
 * const lowest = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

// Array of names
const smallestNames = ["rahim", "robin", "rafi", "ron", "rashed"];

// Method 1: Using a loop
let smallestName = smallestNames[0];

for (let i = 1; i < smallestNames.length; i++) {
  if (smallestNames[i].length < smallestName.length) {
    smallestName = smallestNames[i];
  }
}

// Test the smallest name
console.log("Smallest name (loop method):", smallestName);

// Method 2: Using reduce
const smallestName2 = smallestNames.reduce((shortest, current) =>
  current.length < shortest.length ? current : shortest
);

console.log("Smallest name (reduce method):", smallestName2);

// Method 3: Using sort
const smallestName3 = [...smallestNames].sort((a, b) => a.length - b.length)[0];

console.log("Smallest name (sort method):", smallestName3);

// Method 4: Using Math.min()
const smallestName4 =
  smallestNames[
    smallestNames
      .map((name) => name.length)
      .indexOf(Math.min(...smallestNames.map((name) => name.length)))
  ];

console.log("Smallest name (Math.min method):", smallestName4);
