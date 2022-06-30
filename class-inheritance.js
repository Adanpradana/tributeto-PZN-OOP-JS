class Employee {
  sayhello(name) {
    console.log(`hello ${name} im employee and my name is ${this.name}`);
  }
}
class Manager extends Employee {
  sayhello(name) {
    console.log(`hello ${name} im Manager and my name is ${this.name}`);
  }
}

const adan = new Employee();
adan.name = "adan";
adan.sayhello("joko");

const rangga = new Manager();
rangga.name = "rangga";
rangga.sayhello("joko");
