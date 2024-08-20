"use strict";
let addMe;
// returning void function signature
addMe = (numOne, numTwo) => {
    console.log(numOne + numTwo);
};
// returning the type number
let userOne;
userOne = (x, y, action) => {
    if (action === "add") {
        return x + y;
    }
    else {
        return x - y;
    }
};
