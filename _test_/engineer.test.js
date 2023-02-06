//const Engineer
const Engineer = require('../lib/engineer');

//Test
test("Test Engineer's github", () => {
    const github = "Sviatoslav Zakharuk";
    const eGitHub = new Engineer("Sviatoslav", 1, "Svat@gmail.com", github);
    expect(eGitHub.github).toBe(github);
});

test("Test getGithub methode in Engineer", () => {
    const github = "Sviatoslav Zakharuk";
    const eGitHub = new Engineer("Sviatoslav", 1, "Svat@gmail.com", github);
    expect(eGitHub.getGithub()).toBe(github);
});

test("Test getRole method in Engineer", () => {
    const role = "Engineer";
    const eRole = new Engineer("Sviatoslav", 1, "Svat@gmail.com", role);
    expect(eRole.getRole()).toBe(role);
});
