// Employee Payout Management System
// Demonstrates object-oriented programming and payout calculations

class Employee {
  constructor(name, type, salary = 0, hourlyRate = 0, totalSales = 0, targetSales = 0) {
    this.name = name;
    this.type = type;
    this.salary = salary;
    this.hourlyRate = hourlyRate;
    this.totalSales = totalSales;
    this.targetSales = targetSales;
  }

  calculatePayout() {
    if (this.totalSales <= this.targetSales) {
      return this.salary;
    }

    switch (this.type) {

      case "Salary":
        console.log("Formula: Salary + 10% bonus");
        return this.salary + (this.salary * 0.1);

      case "Hourly":
        console.log("Formula: Salary + (Hourly Rate × Total Sales × 0.5)");
        return this.salary + (this.hourlyRate * this.totalSales * 0.5);

      case "Hybrid":
        console.log("Formula: Salary + (20% Salary bonus + Hourly Rate × Total Sales)");
        return this.salary + ((this.salary * 0.2) + (this.hourlyRate * this.totalSales));

      default:
        throw new Error("Invalid employee type");
    }
  }

  displayPayout() {
    const payout = this.calculatePayout();
    console.log(`${this.name} (${this.type}): R${payout}`);
  }
}


// Create employees
const employees = [

  new Employee("Mosa Sefatsa", "Salary", 5000, 0, 200, 100),
  new Employee("Keletso Dikotsi", "Salary", 3000, 0, 200, 100),

  new Employee("Naledi Anderson", "Hourly", 0, 20, 200, 100),
  new Employee("Mike Mathews", "Hourly", 0, 25, 200, 100),

  new Employee("Kate Stevenson", "Hybrid", 6000, 40, 200, 100),
  new Employee("Bob Peters", "Hybrid", 9000, 30, 200, 100)

];

// Display payouts
console.log("\nEmployee Monthly Payouts\n");

employees.forEach(employee => {
  employee.displayPayout();
});
