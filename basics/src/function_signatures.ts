let addMe: (a: number, b: number) => void;

// returning void function signature

addMe = (numOne: number, numTwo: number) => {
  console.log(numOne + numTwo);
};

// returning the type number
let userOne: (a: number, b: number, c: string) => number;

userOne = (x: number, y: number, action: string) => {
  if (action === "add") {
    return x + y;
  } else {
    return x - y;
  }
};
