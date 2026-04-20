// 1. let and const

// Block-scoped variables (fixes problems with var)

let age = 25; // can change
const name = "John"; // cannot change

// 2. Arrow Functions (=>)

// Shorter function syntax

// old
function add(a, b) {
  return a + b;
}

// ES6
const add = (a, b) => a + b;

// 3. Template Literals (` `)

// Use backticks for dynamic strings

const name = "Ram";
console.log(`Hello ${name}`);

// . Destructuring

// Extract values from objects/arrays easily

const user = { name: "Sam", age: 22 };

const { name, age } = user;
console.log(name);

// 5. Spread & Rest Operator (...)
// Spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

// Rest
const sum = (...nums) => nums.reduce((a, b) => a + b);

// 6. Default Parameters
const greet = (name = "Guest") => {
  console.log(`Hello ${name}`);
};

// 7. Modules (import/export)
// file1.js
export const name = "John";

// file2.js
import { name } from "./file1.js";
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

// 9. Promises (Async handling)
const fetchData = () => {
  return new Promise((resolve, reject) => {
    resolve("Data received");
  });
};
// 10. for...of Loop
const nums = [1, 2, 3];

for (let num of nums) {
  console.log(num);
}
