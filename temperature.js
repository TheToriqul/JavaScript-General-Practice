// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
  // Convert Celsius to Fahrenheit using the formula: F = (C * 9/5) + 32
  let fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

// Test the function

let celsiusTemperature = 25;
let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F.`);