import { Employee } from "./Employee";
import { IFullTimeEmployee } from "../interfaces/IFullTimeEmployee";

export class FullTimeEmployee extends Employee implements IFullTimeEmployee {
 
  private annualSalary: number;

  constructor(name: string, id: number, annualSalary: number) {
    super(name, id);
    this.annualSalary = annualSalary;
  }

  public setAnnualSalary(salary: number): void {
    this.annualSalary = salary;
  }

  public getAnnualSalary(): number {
    return this.annualSalary;
  }

  public calculateSalary(): number {
    return this.annualSalary / 12;
  }

  public displayDetails(): void {
    super.displayDetails();
    console.log(`Annual Salary: $${this.annualSalary}`);
  }
}
