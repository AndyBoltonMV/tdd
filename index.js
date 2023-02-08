class Breed {
  constructor(name) {
    // name === "Spaniel"
    this.name = name;
  }
}

class Dog {
  constructor(config) {
    this.name = config.name;
    this.breed = new Breed(config.breed); // config.breed === "Spaniel"
  }
  bark() {
    return "Bark!";
  }
}

module.exports = Dog;
