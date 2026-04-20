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
