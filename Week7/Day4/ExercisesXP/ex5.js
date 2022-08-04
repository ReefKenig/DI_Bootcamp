class Dog {
  constructor(name) {
    this.name = name;
  }
}

// 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}
/* This option inherits the name property from the Dog class
and adds a new property- size, to its own constructor */
