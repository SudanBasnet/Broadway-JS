// arithmetic operators. +, - ,*,**, /,%

console.log(12 + 3); //15
let a = 12 + 3;
let b = 23;
let c = 34;
console.log(b - c);
console.log(2 ** 4); //power

let e = b - c;
b = b + c;
// assignment operators.  = , += , -=, .......
let d = 34;
b += c; //b = b+c
b -= 10; //b = b-10

// comparison operators ==, ===, < ,>, <=,>= , !=, !==

// console.log(12 > 10);
// console.log(12 > 12);

let f = 12;
let g = "12";
console.log(f == g);
console.log(f === g);
// logical operators AND (&&), OR (||), NOT (!)

let x = true;
let y = false;
// console.log(x && y); //true
// console.log(x || y); //true
// console.log(!x); //true

//typeof operators

console.log(typeof b);
console.log(typeof "asd"); //unknown word
console.log(typeof x);
console.log(typeof b === "number"); //

let z = null;

console.log(typeof z);

//unary operator

let num = 1;
console.log(num); //1
//pre
console.log(++num); //2 (first add then print)
//post
console.log(num++); //2 (first print then add)
console.log(num); //3

// ternary operator ? statement_a : statement_b

// if (num === 3) {
//     console.log("num is 3");
// }else {
//     console.log("num is not 3");
// }

// num === 3 ? console.log("number is 3") : console.log("number is 3");

let age = 17;
// let canVote = null;

let canVote = age >= 18 ? "can vote" : "can not vote";
console.log(canVote);
