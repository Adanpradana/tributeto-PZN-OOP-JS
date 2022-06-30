function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.log(`hello ${name}, my name is ${firstName}`);
  };
}

const adan = new Employee("adan");
adan.sayHello("joko");

function Boss(firstName, LastName) {
  Employee.call(this, firstName); //sintax untuk inheritance
  this.LastName = LastName;
}

const rudi = new Boss("adan", "pradana");
console.log(rudi);
