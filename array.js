//array
let numbers = [1, 2, 3, 4];
let arr = new Array(1, 2, 3, 4);

//console.log(arr);

//*reading element
let first = numbers[0];
console.log(first);
console.log(numbers[3]);

//adding new elements
//?push

numbers.push(10, 34, 65);
console.log(numbers);

//?start index
//?unshift

numbers.unshift(23, 28);
console.log(numbers);

//removing elements
//arr.pop()

const el = numbers.pop();
console.log(el);
console.log(numbers);

//?from start
console.log(numbers.shift());
console.log(numbers.length);
numbers.push(56);
console.log(numbers);
console.log(numbers[numbers.length - 1]);
//console.log(numbers.at(-2))

//indexof
console.log(numbers.indexOf(1));
//includes
console.log(numbers.includes(34));

//adding array(concat)

console.log(numbers.concat([67, 56]));
console.log(numbers.join("_"));
//arr.splice(start_index, delete_count , ...items)
numbers.splice(2, 3, 12, 13, 14);
numbers.splice(2, 0, 12, 123, 23, 23);
console.log(numbers);

//for in
//for of

// for (key of user) {
//   console.log(key);
// }

//not possible in objects as object is not iterable
//returns the index
for (value of numbers) {
  console.log(value);
}
