//const Intern
const Intern = require('../lib/intern');

//Test
test("Test Intern's School", () => {
    const school = "Carleton University";
    const intern = new Intern("Sviatoslav", 1, "svat@gmail.com", school);
    expect(intern.school).toBe(school);
});

test("Test getSchool methode in Intern", () => {
    const school = "Carleton University";
    const intern = new Intern("Sviatoslav", 1, "svat@gmail.com", school);
    expect(intern.getSchool()).toBe(school);
});

test("Test getRole method in Intern", () => {
    const role = "Intern";
    const eRole = new Intern("Sviatoslav", 1, "Svat@gmail.com", role);
    expect(eRole.getRole()).toBe(role);
});
