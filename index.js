class Breed {
  constructor(name) {
    // name === "Spaniel"
    this.name = name;
  }
}

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = new Breed(breed); // config.breed === "Spaniel"
  }
  bark() {
    return "Bark!";
  }
}

module.exports = Dog;
