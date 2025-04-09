import { IEmployee } from "./IEmployee";

export interface IFullTimeEmployee extends IEmployee {
    calculateSalary(): number;
    setAnnualSalary(salary: number): void;
    getAnnualSalary(): number;
}