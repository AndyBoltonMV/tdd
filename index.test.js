const Dog = require("./index");

describe("Dog class integrity checks", () => {
  test("Can create new dog instance", () => {
    let dog1 = new Dog({ name: "Toby", breed: "Spaniel" });
    expect(typeof dog1).toBe("object");
    expect(dog1).toHaveProperty("name", "Toby");
  });

  test("Does Dog instance Bark", function () {
    let dog2 = new Dog({ name: "Lady", breed: "Spaniel" });
    expect(dog2.bark()).toBe("Bark!");
  });
});
