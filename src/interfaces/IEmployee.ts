export interface IEmployee {
   
    setName(name: string): void;
    getName(): string;
  
    setId(id: number): void;
    getId(): number;
  
    calculateSalary(): number;
    displayDetails(): void;
}
  