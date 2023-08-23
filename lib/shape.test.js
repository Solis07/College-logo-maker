// Imports the Square, Triangle, and Circle classes from the shape.js file.
const { Square, Triangle, Circle } = require("./shapes.js");

// shape.test.js will check if the shapes can be rendered correctly

// Square test
describe('Square', () => {
  test('for square and color background', () => {
    const shape = new Square();
    var color = ('green')
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="115" r="80" height="100%" width="100%" fill="${this.color}">`);
  });
});




