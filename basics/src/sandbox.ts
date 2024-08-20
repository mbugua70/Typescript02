console.log("testing ts config")

// declaring that the variable greetings will be of type function

let greetings: Function;

greetings = () => {
    console.log("Hello, world!");
}


// parameter types
const add = (a: number, b: number) => {
    console.log(a + b);
}

add(2,6)

// having an a parameter as optional parameter we will use the question mark

const addTwo = (a: number, b: number, c?:number | string) => {
    console.log(a + b);
}


addTwo(3,6)


// default values parameters

const addThree = (a: number, b: number, c: number | string = 30) => {
   console.log(c);
   console.log(a + b);
}

addThree(10, 15)