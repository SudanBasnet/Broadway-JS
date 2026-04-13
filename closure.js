//!closure

//*lexical scope

// var a = 30;
function add(a, b) {
  console.log(a + b);
}

add(12, 3);
add(12, 4);

//closure
function counter() {
  let count = 0;
  const child = () => {
    console.log(count);
  };
  return child;
}

const a = counter();
a();
