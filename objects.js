// //primitive and non primitive data types
// // objects
// //object literal => {}
// //new keyword => new object()

// // let user = {
// //   email: "sdn@gmail.com",
// //   is_verified: true,
// //   password: "asdfasd",
// // };
// let person = new Object();
// //assign new properties

// // console.log(typeof user, typeof person);
// user.name = "john";
// user["address"] = "kathmandu";

// //accessing properties
// //dot notation
// console.log(user.email);
// let user_name = user.name;
// console.log(user_name);

// //bracket notation
// console.log(user["password"]); //its like user.password
// // console.log(user["is verified"]);

// let key = "is_verified";
// console.log(user.key);
// console.log(user[key]);

// user[key] = true;

// //modify properties
// user.password = "password";
// console.log(user);

// let user1 = user;
// user1.name = "john doe";

// console.log(user1, user);

// //main {x:10 , y:10, user:&123, user1: &123}
// //heap {&123 : {name:'',pass:''}}

// //let obj= {}
// //if (obj){
// //console.log("run").
// //}

// //ternary operator

// let age = null;
// console.log(age ? age : "age not found");

// //nullish op/null safety

// console.log(age ?? "age not found");

// let user2 = {
//   name: "user2",
//   address: {
//     city: "ktm",
//     street: "123",
//   },
// };
// let user3 = {
//   name: "user 2",
//   greet: {},
// };
// //!dot
// if (user3.address) {
//   if (user.address.city) {
//     console.log(user.address.city);
//   } else {
//     console.log("city not found");
//   }
// }
// //optional chaining?

// console.log(user3?.address?.city ?? "not found");

// // delete properties
// delete user.email;
// console.log(user3.greet);

let user = {
  email: "sdn@gmail.com",
  is_verified: true,
  password: "asdfasd",
};

const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user);

console.log(keys); //converts keys to arrays
console.log(values); //converts values to arrays
console.log(entries); //convertskey and value to arrays
console.log(Object.fromEntries(entries)); //converts the key and value array to objects again

for (key in user) {
  console.log(keys, ":", user[key]); //returns keys from object user (we can use this in loop)
}
