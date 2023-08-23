// Imports the Square, Triangle, and Circle classes from the shape.js file.
const { Square, Triangle, Circle } = require("./shapes.js");

// shape.test.js will check if the shapes can be rendered correctly

// Square test
describe('Square', () => {
  test('for Square and color background', () => {
    const shape = new Square();
    var color = ('green')
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="115" r="80" height="100%" width="100%" fill="${color}">`
    );
  });
});

// Triangle test
describe('Triangle', () => {
  test('for Triangle and color background', () => {
    const shape = new Square();
    var color = ('red')
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${color}">`
    );
  });
});

// Circle test
describe("Circle", () => {
  test("for Circle and color background", () => {
    const shape = new Square();
    var color = ('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="115" r="80" height="100%" width="100%" fill="${color}">`
    );
  });
});






