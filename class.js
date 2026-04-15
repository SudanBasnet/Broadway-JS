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
    console.log(this);
    console.log(this.name);
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

class student {
  name;
  email;
  #password;
  faculty;
  roll;
  section;
}
