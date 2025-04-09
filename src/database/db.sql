DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS employee_types;

CREATE TABLE employee_types (
    id SERIAL PRIMARY KEY,
    type_name VARCHAR(100)
);

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    typeID INT,
    FOREIGN KEY (typeID) REFERENCES employee_types(id)
);

