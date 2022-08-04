// ex1
console.log([2] === [2]);
/* Prediction: true
result: false */
console.log({} === {});
/* Prediction: true
result: false */

// in JS two objects are never equal

// ex2
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number);
/* Prediction: 4
Result: 4 */
console.log(object3.number);
/* Prediction: 4
Result: 4 */
console.log(object4.number);
/* Prediction: 5
Result: 5 */

// ex3
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound(sound) {
    console.log(
      `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
    );
  }
}

const farmerCow = new Mammal("Lily", "Cow", "Brown and white");
farmerCow.sound("Mooo");
