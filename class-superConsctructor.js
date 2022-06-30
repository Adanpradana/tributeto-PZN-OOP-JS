class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }
  sayhello(name) {
    console.log(`hello ${name} im employee and my name is ${this.firstName}`);
  }
}
class Manager extends Employee {
  constructor(firsName, lastName) {
    super(firsName); //memanggil parent dari child constructor
    this.lastName = lastName;
  }

  sayhello(name) {
    console.log(`hello ${name} im Manager and my name is ${this.firstName} ${this.lastName}`);
  }
}

const adan = new Employee("adan");
adan.sayhello("joko");

const rangga = new Manager("rangga", "wibowo");
rangga.sayhello("joko");
