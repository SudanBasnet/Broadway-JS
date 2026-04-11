// //!array methods
// let numbers = [23, 45, 67, 4, 5, 6];
// //push(1,23) = > length
// //unshift()
// //pop() => last element
// //shift() => first element
// //includes() = >boolean
// //indexOf() => index / -1

// //hof
// //takes call back function as an input

// //loop
// //array.forEach(callback)
// const callback = (value, index, array) => {
//   console.log(value, index, array);
// };
// // numbers.forEach(callback);
// // const result = numbers.forEach((v, index) => {
// //   console.log(index);
// //   numbers[index] = v * 2;
// // });
// // console.log(numbers);

// //map x=>y
// const double1 = numbers.map(function (value) {
//   return value * 2;
// });
// const double = numbers.map((value) => {
//   return value * 2;
// });

// const double2 = numbers.map((value) => value * 2);
// console.log(numbers, double);

// //?filter

// const double3 = numbers.filter((value) => value % 2 === 0);
// console.log(numbers, double3);

// //reduce
// const double4 = numbers.reduce((acc, value) => acc + value, 10);
// console.log(double4);

const students = [
  {
    name: "ram",
    marks: [54, 43, 56, 78, 67],
  },
  {
    name: "sita",
    marks: [54, 40, 56, 34, 67],
  },
  {
    name: "hari",
    marks: [14, 49, 59, 38, 49],
  },
];

//calculate_avg

const cal_avg = (marks) => {
  const total_marks = marks.reduce((acc, mark) => {
    return (acc = mark + acc);
  });
  const avg = total_marks / marks.length;
  return avg;
};

const stu_with_avg = students.map((student) => {
  const avg = cal_avg(student.marks);
  // const total_marks = student.marks.reduce((acc, mark) => {
  //   return (acc = mark + acc);
  // });
  // const avg = total_marks / student.marks.length;
  return {
    name: student.name,
    marks: student.marks,
    avg_mark: avg,
  };
});

console.log(stu_with_avg);
const passed_stu = stu_with_avg.filter((stu) => stu.avg_mark >= 50);
// const passed_stu = stu_with_avg.filter((stu) => {
//   if (stu.avg_mark >= 50) {
//     return stu;
//   }

console.log(passed_stu);
const passed = passed_stu.map((stu) => {
  return `${stu.name}-${stu.avg_mark}`;
});

console.log(passed);
