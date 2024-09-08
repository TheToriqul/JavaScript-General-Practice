/**
 Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

// Original implementation
function calculateElectronicsBudget(laptopCount, tabletCount, mobileCount) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const totalLaptopCost = laptopPrice * laptopCount;
  const totalTabletCost = tabletPrice * tabletCount;
  const totalMobileCost = mobilePrice * mobileCount;

  const totalBudget = totalLaptopCost + totalTabletCost + totalMobileCost;

  return totalBudget;
}

// Test cases

console.log("Standard purchase:", calculateElectronicsBudget(2, 3, 1));
console.log("Bulk order:", calculateElectronicsBudget(4, 5, 2));
console.log("Empty cart:", calculateElectronicsBudget(0, 0, 0));
console.log("Mixed quantities:", calculateElectronicsBudget(1, 2, 3));
console.log("Negative laptop ignored:", calculateElectronicsBudget(-2, 3, 1));

// ----------------------------------------------------------------

// Easiest way implementation
const calculateElectronicsBudgetEasy = (laptops, tablets, mobiles) => {
  laptops = Math.max(0, laptops);
  tablets = Math.max(0, tablets);
  mobiles = Math.max(0, mobiles);
  
  return laptops * 35000 + tablets * 15000 + mobiles * 20000;
};

// Test cases
console.log("Standard purchase:", calculateElectronicsBudgetEasy(2, 3, 1));
console.log("Bulk order:", calculateElectronicsBudgetEasy(4, 5, 2));
console.log("Empty cart:", calculateElectronicsBudgetEasy(0, 0, 0));
console.log("Mixed quantities:", calculateElectronicsBudgetEasy(1, 2, 3));
console.log("Negative laptop ignored:", calculateElectronicsBudgetEasy(-2, 3, 1));
console.log("Negative tablet ignored:", calculateElectronicsBudgetEasy(0, -5, 2));
console.log("Multiple negatives ignored:", calculateElectronicsBudgetEasy(1, -2, -3));