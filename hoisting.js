//hoisting

//declaration
//memory creation
// javascript will already define some memory when variable is defined
//{x:undefined}
//execution
//{x:30}

console.log("hoisting");
console.log(x);
var x = 30;
console.log(x);

// hoist();
// console.log(y);

// function hoist() {
//   var y = 23;
//   console.log("hoist");
// }

// hoist();

// var hoist = () => {
//   console.log("hoist");
// };
// console.log(z);
// let z = 23;
// console.log(z);

//temporal dead zone

// console.log(z);
// const z = 23;
// console.log(z);
