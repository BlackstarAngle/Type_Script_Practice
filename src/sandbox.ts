//let greet: Function;

//example 1 
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}


greet('Anna', 'Best wish');

//example 2 
let calc: (a: number, b: number, c: string) => void;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        console.log(numOne + numTwo);
    } else {
        console.log(numOne - numTwo);
    }
}

calc(10, 8, 'add');
calc(10, 8, 'monkey');

//example 3
let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}

