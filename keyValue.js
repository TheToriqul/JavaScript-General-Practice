// Loop through an object and print the key-value pairs with their types

// Input data

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
for (let key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    console.log(`${key}: ${myObject[key]} | ${typeof myObject[key]}`);
  }
}
console.log();
console.log('-'.repeat(40));
console.log(`\n`);

for (let [key, value] of Object.entries(myObject)){
  console.log("key: ", key, " | ", "value: ", typeof value);
}
