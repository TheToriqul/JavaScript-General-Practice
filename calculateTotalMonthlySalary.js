/**
 * For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
*/

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

// Method 1: Using reduce
function calculateTotalMonthlySalaryReduce(employees) {
  const totalYearlySalary = employees.reduce((total, employee) => {
      const currentSalary = employee.starting + (employee.experience * employee.increment);
      return total + currentSalary;
  }, 0);

  return totalYearlySalary / 12;
}

// Method 2: Using for loop and array length
function calculateTotalMonthlySalaryForLoop(employees) {
  let totalYearlySalary = 0;
  
  for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];
      const currentSalary = employee.starting + (employee.experience * employee.increment);
      totalYearlySalary += currentSalary;
  }

  return totalYearlySalary / 12;
}

// Test Cases

console.log("Test Case 1: Original employee data");
// Calculate the monthly salary
const totalMonthlyReduce = calculateTotalMonthlySalaryReduce(employees);
console.log(`Total monthly salary (reduce method): ${totalMonthlyReduce.toFixed(2)}`);

const totalMonthlyForLoop = calculateTotalMonthlySalaryForLoop(employees);
console.log(`Total monthly salary (for loop method): ${totalMonthlyForLoop.toFixed(2)}`);

// Display individual employee salaries
console.log("\nIndividual Employee Salaries:");
for (let i = 0; i < employees.length; i++) {
const employee = employees[i];
const currentSalary = employee.starting + (employee.experience * employee.increment);
console.log(`${employee.name}'s current yearly salary: ${currentSalary}`);
}

console.log("\nTest Case 2: Empty array");
const emptyArray = [];
console.log(`Total monthly salary (reduce method): ${calculateTotalMonthlySalaryReduce(emptyArray).toFixed(2)}`);
console.log(`Total monthly salary (for loop method): ${calculateTotalMonthlySalaryForLoop(emptyArray).toFixed(2)}`);

console.log("\nTest Case 3: Single employee");
const singleEmployee = [{ name: "John", experience: 7, starting: 25000, increment: 3000 }];
console.log(`Total monthly salary (reduce method): ${calculateTotalMonthlySalaryReduce(singleEmployee).toFixed(2)}`);
console.log(`Total monthly salary (for loop method): ${calculateTotalMonthlySalaryForLoop(singleEmployee).toFixed(2)}`);

console.log("\nTest Case 4: Employees with no experience");
const noExperienceEmployees = [
  { name: "Alice", experience: 0, starting: 18000, increment: 2000 },
  { name: "Bob", experience: 0, starting: 20000, increment: 2500 }
];
console.log(`Total monthly salary (reduce method): ${calculateTotalMonthlySalaryReduce(noExperienceEmployees).toFixed(2)}`);
console.log(`Total monthly salary (for loop method): ${calculateTotalMonthlySalaryForLoop(noExperienceEmployees).toFixed(2)}`);