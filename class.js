//class
class User {
  //   name;
  //   email;
  #password;

  //constructor
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }
  getname() {
    return this.name;
  }
  getPassword() {
    return this.#password;
  }
}

const john = new User("john", "john@gmail.com", "12345");
const john1 = new User("john", "john@gmail.com", "12345");
console.log(john.name);

john.getname();
console.log(john, john.getPassword());

class Student extends User {
  constructor(name, email, password, faculty, roll, section) {
    // this.name = name;
    // this.email = email;
    // this.#password = password;
    super(name, email, password);
    this.faculty = faculty;
    this.section = section;
    this.roll = roll;
  }
}
const student = new Student(
  "sudan",
  "sdnbasnet5@gmail.com",
  "sudan123",
  "BSCCSIT",
  23,
  "A",
);
// console.log(student);
console.log(student.getname());
