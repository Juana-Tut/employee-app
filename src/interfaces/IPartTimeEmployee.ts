import { IEmployee } from "./IEmployee";

export interface IPartTimeEmployee extends IEmployee {
    setHourlyRate(rate: number): void;
    getHourlyRate(): number;

    setHoursWorked(hours: number): void;
    getHoursWorked(): number;
}