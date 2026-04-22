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

let numbers: number[] = [1, 2, 3, 4];
let strings: Array<string> = ["1"];
numbers.push(23);
strings.push("23");

//tuples

let tuple: [number, string, boolean, number] = [1, "1", true, 2];

//object

let user: { name: string; email: string; age: number; password: string } = {
  name: "sudan",
  email: "sudan@gmail.com",
  age: 28,
  password: "12345",
};

//interface
interface Iuser {
  name: string;
  email: string;
  age: number;
  password: string;
}

let user1: Iuser = {
  name: "sudan",
  email: "sudan@gmail.com",
  age: 28,
  password: "12345",
};
