// Count the number of properties.

// Input objects

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
const count = Object.keys(student).length;
console.log("Number of properties: ", count);

// By using for loop
let counts = 0;
for (prop in student){
  if (student.hasOwnProperty(prop)){
    counts ++;
  }
}
console.log("Number of properties: ", counts)

// Object Entries
const propertyCount = Object.entries(student).length;
console.log("Number of properties: ", propertyCount);