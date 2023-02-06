//const Employee
const Employee = require("../lib/employee");

//Test Employee Name
test("Test Employee Name", () => {
    const name = "Sviatoslav";
    const eName = new Employee(name);
    expect(eName.name).toBe(name);
});

test("Test Employee ID", () => {
    const id = 1;
    const eId = new Employee("Sviatoslav", id);
    expect(eId.id).toBe(id);
});

test("Test Employee Email", () => {
    const email = "Svat@gmail.com";
    const eEmail = new Employee("Sviatoslav", 2, email);
    expect(eEmail.email).toBe(email);
});

test("Test getName method in Employee", () => {
    const name = "Sviatoslav";
    const eName = new Employee(name);
    expect(eName.getName()).toBe(name);
});

test("Test getID method in Employee", () => {
    const id = 1;
    const eId = new Employee("Sviatoslav", id);
    expect(eId.getId()).toBe(id);
});

test("Test getEmail method in Employee", () => {
    const email = "svat@gmail.com";
    const eEmail = new Employee("Sviatoslav", 1, email);
    expect(eEmail.getEmail()).toBe(email);
});

test("Test getRole method in Employee", () => {
    const role = "Employee";
    const eRole = new Employee("Sviatoslav", 1, "Svat@gmail.com", role);
    expect(eRole.getRole()).toBe(role);
});
