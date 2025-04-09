import { FullTimeEmployee } from "./FullTimeEmployee";
import { PartTimeEmployee } from "./PartTimeEmployee";
import { Employee } from "./Employee";

// Polymorphic array
const employees: Employee[] = [
  new FullTimeEmployee("Alice", 1, 72000),
  new PartTimeEmployee("Bob", 2, 20, 100)
];

for (const emp of employees) {
  emp.displayDetails();
  console.log(`Calculated Salary: $${emp.calculateSalary()}`);
  console.log("---------------------");
}