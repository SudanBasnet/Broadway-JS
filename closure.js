//!closure

//*lexical scope

// var a = 30;
// function add(a, b) {
//   console.log(a + b);
// }

// add(12, 3);
// add(12, 4);

// //closure
// function counter() {
//   let count = 0;
//   const child = () => {
//     console.log(count);
//   };
//   return child;
// }

// const a = counter();
// a();
// a();

function Counter() {
  let count = 0;
  function inc(x) {
    count++;
    console.log(count);
    return count;
  }
  function decrement() {
    count--;
    console.log(count);
    return count;
  }
  const obj = { increment: inc, decrement: decrement };
  return obj;
}

const counter = Counter();
const counter1 = Counter();
counter.increment();

counter.decrement();
counter.decrement();
counter.increment();
counter1.increment();
