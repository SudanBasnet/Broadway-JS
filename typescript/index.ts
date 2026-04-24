//typescript
//data types
//string
//number
//boolean
//null
//undefined

//any
//unknown

//variable declaration
//let, const, var
// let str: string = "hello";
// console.log(str);
// //str=23;

// let num: number;
// num = 12;
// //num = "hello";
// num = 45;
// num = 45.34;
// let isLoggedIn: boolean = true;
// isLoggedIn = false;
// let a: null = null;

// let b: undefined = undefined;

// //!any
// let c: any;
// c = 5;
// c = "any type";
// console.log(c.toUpperCase());

// //!unknown
// let d: unknown;
// d = 34;
// d = "unknown type";

// if (typeof d === "string") {
//   console.log(c.toUpperCase());
// }

//array

// let numbers: number[] = [1, 2, 3, 4];
// let strings: Array<string> = ["1"];
// numbers.push(23);
// strings.push("23");

//tuples

// let tuple: [number, string, boolean, number] = [1, "1", true, 2];

//object

// let user: { name: string; email: string; age: number; password: string } = {
//   name: "sudan",
//   email: "sudan@gmail.com",
//   age: 28,
//   password: "12345",
// };

//interface
// interface Iuser {
//   name: string;
//   email: string;
//   age?: number; //? makes it optional
//   password: string;
// }

// let user1: Iuser = {
//   name: "sudan",
//   email: "sudan@gmail.com",
//   age: 28,
//   password: "12345",
// };

// let user2: Iuser = {
//   name: "sudan",
//   email: "sudan@gmail.com",

//   password: "12345",
// };

//enum
enum Role {
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER ADMIN",
  USER = "USER",
}
console.log(Role.ADMIN); //default is 0 and others will have 1, 2 etc.. but if we assign the value as 10 the rest will be 11 12 and so on

interface Iuser {
  name: string;
  email: string;
  age?: number; //? makes it optional
  password: string;
  role: Role;
}

let user1: Iuser = {
  name: "sudan",
  email: "sudan@gmail.com",
  age: 28,
  password: "12345",
  role: Role.ADMIN,
};

console.log(user1.role);
interface Iuser2 {
  name: string;
  email: string;
  age?: number; //? makes it optional
  password: string;
}

let users: Iuser2[] = [
  {
    name: "",
    email: "",
    password: "",
  },
  {
    name: "",
    email: "",
    password: "",
  },
];

users.map((user) => {
  console.log(user.email);
});

interface Ilogin {
  email: string;
  password: string;
}

interface Ireg extends Ilogin {
  username: string;
  fullname: string;
}

let user_acc: Ireg = {
  fullname: "",
  username: "",
  email: "",
  password: "",
};

//function

// const add = (a: number, b: number): number => {
//   return a + b;
// };

//void

let greet = (name: string): void => {
  console.log(name);
};

//never
const never = (): never => {
  throw "new error";
};

const add1 = (...numbers: number[]) => {
  //return a+b;
};

//!union [|],

let id: number | string = 12;
id = "2";
//id = true;

//type [type alias]
type A = {
  password: string;
  email: string;
};
type addF = (x: number, y: number) => number;
const add: addF = (a, b) => {
  return a + b;
};
//intersection[&]
type B = {
  name: string;
};

type C = A & B;
type D = A | B;
let c: C = {
  name: "",
  email: "",
  password: "",
};

let d: D = {
  email: "",
  password: "",
};

//diff between type and interfce

interface E {
  e: string;
}

interface E {
  f: string;
}

let e: E = {
  e: "",
  f: "",
};

// type literal

let res_status: "success" | "fail" | "error";
type STATUS = "success" | "fail" | "error";

let Status: STATUS;
res_status = "success";
res_status = "error";


//class
class Person {
  name: string;
  protected email: string;
  private password: string;
  age: number;
}
constructor(name:string, email: string, password: string, age:number){
  this.name = name;
  this.age = age;
  this.email = email;
  this.password = pass;

}