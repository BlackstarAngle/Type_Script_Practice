"use strict";
//let greet: Function;
//example 1 
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet('Anna', 'Best wish');
//example 2 
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        console.log(numOne + numTwo);
    }
    else {
        console.log(numOne - numTwo);
    }
};
calc(10, 8, 'add');
calc(10, 8, 'monkey');
//example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
