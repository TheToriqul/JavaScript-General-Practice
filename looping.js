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

// Adding new item to the laptop collection