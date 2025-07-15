"use strict";
const employee1 = {
    fullName: ["John", "Doe"],
    age: 30,
    department: "Engineering",
    skills: ["JavaScript", "Phyton", "C++"],
    isActive: true,
};
const employee2 = {
    fullName: ["Jane", "Smith"],
    age: 25,
    department: "Marketing",
    skills: ["SEO", "Social Media", "Content Creation"],
    isActive: false,
};
// 1. Write the Function
function logEmployee(employee) {
    const [firstName, lastName] = employee.fullName;
    console.log("------ Employee Info ------");
    console.log(`Name        : ${firstName} ${lastName}`);
    console.log(`Age         : ${employee.age}`);
    console.log(`Department  : ${employee.department}`);
    console.log(`Skills      : ${employee.skills.join(", ")}`);
    console.log(`Status      : ${employee.isActive ? "Yes" : "No"}`);
    console.log("--------------------------\n");
}
// 2. Call the Function
logEmployee(employee1);
logEmployee(employee2);
