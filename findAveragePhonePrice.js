/**
 You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
*/
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

// Method 1: Using reduce
function findAveragePhonePrice(phoneArray) {
  if (phoneArray.length === 0) return 0;
  const totalPrice = phoneArray.reduce((sum, phone) => sum + phone.price, 0);
  return totalPrice / phoneArray.length;
}

// Method 2: Easiest way (using arrow function and map)
const findAveragePriceEasy = (phones) => 
  phones.length ? phones.map(phone => phone.price).reduce((sum, price) => sum + price) / phones.length : 0;

// Method 3: Using array length explicitly
function findAveragePriceUsingLength(phones) {
  if (phones.length === 0) return 0;
  let totalPrice = 0;
  for (let i = 0; i < phones.length; i++) {
      totalPrice += phones[i].price;
  }
  return totalPrice / phones.length;
}

// Test all three functions
console.log("Average price (Method 1):", findAveragePhonePrice(phones).toFixed(2));
console.log("Average price (Method 2):", findAveragePriceEasy(phones).toFixed(2));
console.log("Average price (Method 3):", findAveragePriceUsingLength(phones).toFixed(2));

// Test with empty array
const emptyArray = [];
console.log("Empty array (Method 1):", findAveragePhonePrice(emptyArray));
console.log("Empty array (Method 2):", findAveragePriceEasy(emptyArray));
console.log("Empty array (Method 3):", findAveragePriceUsingLength(emptyArray));

// Test with single phone
const singlePhone = [{ model: "PhoneG", brand: "OnePlus", price: 70000 }];
console.log("Single phone (Method 1):", findAveragePhonePrice(singlePhone));
console.log("Single phone (Method 2):", findAveragePriceEasy(singlePhone));
console.log("Single phone (Method 3):", findAveragePriceUsingLength(singlePhone));