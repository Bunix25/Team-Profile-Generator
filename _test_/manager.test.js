//const Manager
const Manager = require("../lib/manager");

//Test
test("Test Manager's officeNumber", () => {
    const officeNumber = 9053245755;
    const eOfficeNumber = new Manager("Sviatoslav", 1, "svat@gmail.com", officeNumber);
    expect(eOfficeNumber.officeNumber).toBe(officeNumber);
});

test("Test getOfficeNumber method in Manager", () => {
    const officeNumber = 9053245755;
    const eOfficeNumber = new Manager("Sviatoslav", 1, "svat@gmail.com", officeNumber);
    expect(eOfficeNumber.getOfficeNumber()).toBe(officeNumber);
});

test("Test getRole method in Manager", () => {
    const role = "Manager";
    const eRole = new Manager("Sviatoslav", 1, "Svat@gmail.com", role);
    expect(eRole.getRole()).toBe(role);
});
