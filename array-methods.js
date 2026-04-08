//!array methods
let numbers = [23, 45, 67, 4, 5, 6];
//push(1,23) = > length
//unshift()
//pop() => last element
//shift() => first element
//includes() = >boolean
//indexOf() => index / -1

//hof
//takes call back function as an input

//loop
//array.forEach(callback)
const callback = (value, index, array) => {
  console.log(value, index, array);
};
// numbers.forEach(callback);
// const result = numbers.forEach((v, index) => {
//   console.log(index);
//   numbers[index] = v * 2;
// });
// console.log(numbers);

//map x=>y
const double1 = numbers.map(function (value) {
  return value * 2;
});
const double = numbers.map((value) => {
  return value * 2;
});

const double2 = numbers.map((value) => value * 2);
console.log(numbers, double);

//?filter

const double3 = numbers.filter((value) => value % 2 === 0);
console.log(numbers, double3);

//reduce
const double4 = numbers.reduce((acc, value) => acc + value, 10);
console.log(double4);
