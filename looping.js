const laptop = {
  name: "Asus",
  model: "VivoBook 15",
  price: 1499.99,
  RAM: "8GB",
  storage: "1TB SSD",
  graphics: "Intel UHD Graphics 630", 
}

// Looping through all the items in the collection

for (let item in laptop) {
  console.log(`${item}: ${laptop[item]}`);
}
console.log()
// Adding new item to the laptop collection

laptop.screenSize = "15.6 inches";
console.log("New laptop properties:");

for (let item in laptop) {
  console.log(`${item}: ${laptop[item]}`);
}

// Deleting an item from the laptop collection

delete laptop.price;
console.log("Updated laptop properties after deleting price:");

for (let item in laptop) {
  console.log(`${item}: ${laptop[item]}`);
}

// Updating an item in the laptop collection

laptop.model = "VivoBook 15 Pro";
console.log("Updated laptop properties after updating model:");

for (let item in laptop) {
  console.log(`${item}: ${laptop[item]}`);
}

// Checking the length of the laptop collection

console.log("Length of laptop collection:", Object.keys(laptop).length);

// Checking if a property exists in the laptop collection

console.log("Is 'RAM' a property in the laptop collection?", laptop.hasOwnProperty("RAM"));