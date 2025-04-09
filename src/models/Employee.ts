import { IEmployee } from "../interfaces/IEmployee";

export abstract class Employee implements IEmployee {
  protected name: string;
  protected id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getId(): number {
    return this.id;
  }

  public abstract calculateSalary(): number;

  public displayDetails(): void {
    console.log(`Name: ${this.name}, ID: ${this.id}`);
  }
}
