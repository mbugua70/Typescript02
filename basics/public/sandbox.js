"use strict";
console.log("testing ts config");
// declaring that the variable greetings will be of type function
let greetings;
greetings = () => {
    console.log("Hello, world!");
};
// parameter types
const add = (a, b) => {
    console.log(a + b);
};
add(2, 6);
// having an a parameter as optional parameter we will use the question mark
const addTwo = (a, b, c) => {
    console.log(a + b);
};
addTwo(3, 6);
// default values parameters
const addThree = (a, b, c = 30) => {
    console.log(c);
    console.log(a + b);
};
addThree(10, 15);
