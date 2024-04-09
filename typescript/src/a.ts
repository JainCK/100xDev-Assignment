const x: number = 1;
console.log(x);

const greet = (firstName: string) => {
  console.log("Hello" + firstName);
};

greet("jain");

const sum = (numOne: number, numTwo: number) => {
  console.log(numOne + numTwo);
};

sum(1, 2);

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

const isLegal = (user: User) => {
  if (user.age > 18) {
    console.log("is legal");
  } else {
    console.log("not legal");
  }
};
