import { Employee } from "./Employee";
import { IPartTimeEmployee } from "../interfaces/IPartTimeEmployee";

export class PartTimeEmployee extends Employee implements IPartTimeEmployee {
  private hourlyRate: number;
  private hoursWorked: number;

  constructor(name: string, id: number, hourlyRate: number, hoursWorked: number) {
    super(name, id);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  public setHourlyRate(rate: number): void {
    this.hourlyRate = rate;
  }

  public getHourlyRate(): number {
    return this.hourlyRate;
  }

  public setHoursWorked(hours: number): void {
    this.hoursWorked = hours;
  }

  public getHoursWorked(): number {
    return this.hoursWorked;
  }

  public calculateSalary(): number {
    return this.hourlyRate * this.hoursWorked;
  }

  public displayDetails(): void {
    super.displayDetails();
    console.log(`Hourly Rate: $${this.hourlyRate}, Hours Worked: ${this.hoursWorked}`);
  }
}
