// clas OOP Old Javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  //constructor function method
  this.sayHello = function (name) {
    console.log(`hello ${name} , my name is ${this.firstName}`);
  };
}

const adan = new Person();
adan.firstName = "adan";
adan.sayHello("joko");

//params
const mega = new Person("mega", "seftiyani`");
mega.sayHello("septi");
