"use strict";
const studentsDetails = (name, uuid) => {
    console.log(`${name} has an id of ${uuid}`);
};
const greet = (user) => {
    console.log(`The student ${user.name} has an id of ${user.uuid}`);
};
const greetThree = (user) => {
    console.log(`${user.name} your id number is ${user.uuid}`);
};
greet({ name: "john", uuid: "246340xh" });
studentsDetails("john", "1234534");
greetThree({ name: "kamau", uuid: "794769jl" });
