class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return ` ${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const result = name.split(" ");
    this.firstName = result[0];
    this.lastName = result[1];
  }
}

const person = new Person("adan", "pradana");
console.log(person.fullName);
