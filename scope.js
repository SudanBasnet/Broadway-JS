//!globalscope

let global_let = "global let";
const global_const = "global const";
var global_var = "global var";

// console.log(global_let, global_const, global_var);

//!block scope

if (true) {
  //   let and const is block scope
  let block_let = "block let";
  const block_const = "block const";
  var block_var = "block var";
  console.log("-----Block-------");
  console.log(global_let, global_const, global_var);
}

//let and const is only visible inside the scope while var can be accessed outside block even in the function scope as well

//fnction scope
function scope() {
  console.log("-----function-------");
  let function_let = "block let";
  const function_const = "block const";
  var function_var = "block var";
}

scope();
//variable defined inside function scope can not be accessed outside the function

//lexical scope
// function parent() {
//   let x = 20;
//   console.log(x);
//   function child() {
//     let x = 50;
//     console.log(x);
//   }
//   child();
// }

// parent();

//scope chaining
let x = 12;

function parent() {
  //   let x = 20;
  console.log(x);
  function child() {
    let x = 50;
    console.log(x);
  }
  child();
}

parent();
//children can access parent scope but parent can't access children scope
//accessing goes from botton to top
