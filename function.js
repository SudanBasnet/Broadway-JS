//function

// function func_name(){
//     block
// }

//! function declaration
// function greet() {
//   console.log("hello world");
// }

// greet();
//function with inputs
// function greet(user) {
//   console.log(`hello ${user}`);
// }

// greet("sudan");
// greet("asmita");

// function add(a, b) {
//   console.log(a + b);
// }

// add(4, 5);

// function add(a = 0, b = 0) {
//   //   console.log(a + b);
//   //   return sum = a +b;
//   return a + b;
// }

// let result = add(12, 14);
// console.log(result);

// funtion expression
// let greet = function (name = "guest") {
//   console.log("hello world");
// };
// greet("john");

// const sub = function (a, b) {
//   console.log(a - b);
//   return a - b;
// };

//let result=sub(12,3);
// console.log(result);
// console.log(sub(23, 3));
// console.log(sub);

//arrow function

// const sub = (a, b) => {
//   return a - b;
// };

// console.log(sub(13, 3));

// function evenorodd(num) {
//   if (num % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// console.log(evenorodd(2));

// const checkoddeven = (num) => (num % 2 === 0 ? "even" : "odd");
// console.log(checkoddeven(10));

// //snake case// let is_student  = true
// // camel case//let isStudent = true
// const sub1 = (a, b) => {
//   let r = a - b;
//   return r;
// };

// const sub = (a, b) => a - b;
// const double = (a) => a * 2;

// console.log(sub(23, 3));

// //callback function

// const parent = (func) => {
//   console.log("parent");
//   console.log(func);
//   let res = func(12, 3);
//   console.log(res);
// };

// const child = (a, b) => {
//   console.log("child");
//   return a + b;
// };

// parent(child);

// parent((a, b) => {
//   console.log("child");
//   return a + b;
// });

// // higher order function
// // A function is higher-order if it:

// // Returns another function
// // OR takes a function as argument
// const hof = () => {
//   console.log("hof");
//   const child = (a, b) => {
//     console.log("inside hof");
//     return a + b;
//   };
//   return child;
// };

// let func = hof();
// func(12, 3);
// console.log(typeof func);

// // function factory
// const factory = (a) => {
//   return (b) => {
//     return a + b;
//   };
// };

// const add5 = factory(5);
// const add20 = factory(20);

// console.log(add5(10));
// console.log(add20(2));
