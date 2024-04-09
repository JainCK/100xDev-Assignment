"use strict";
const x = 1;
console.log(x);
const greet = (firstName) => {
    console.log("Hello" + firstName);
};
greet("jain");
const sum = (numOne, numTwo) => {
    console.log(numOne + numTwo);
};
sum(1, 2);
const isLegal = (user) => {
    if (user.age > 18) {
        console.log("is legal");
    }
    else {
        console.log("not legal");
    }
};
