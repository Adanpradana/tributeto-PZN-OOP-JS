class People {
  constructor(name) {
    this.name = name;
  }
  sayHello(name) {
    console.log(`Hello ${name} my name is ${this.name}`);
  }
}

const person = new People("adan");
person.sayHello("joko");

class Car {
  constructor(carName, type) {
    this.carName = carName;
    this.carType = type;
  }

  fixcar(name) {
    console.log(`hello ${name}, my car has type ${this.carType}`);
  }
}

const toyota = new Car("avanza", "diesel");
console.log(toyota);

toyota.fixcar("joko");
