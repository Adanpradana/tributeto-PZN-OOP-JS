class Shape {
  paint() {
    console.log(`paint circle`);
  }
}

class Circle extends Shape {
  paint() {
    super.paint();
    console.log(`shape paint`);
  }
}

const circle = new Circle();
circle.paint();
