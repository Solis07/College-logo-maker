class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

// Square class that extends the shape class and renders its properties
class Square extends Shape {
  render() {
    return `<rect x="50" y="50" height="200" width="200" fill="${this.color}"/>`
  }
}

// Triangle class that extends the shape class and renders its properties
class Triangle extends Shape {
  render() {
    return `<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
  }
}

// Circle class that extends the shape class and renders its properties
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="115" r="80" height="100%" width="100%" fill="${this.color}"/>`;
  }
}

// Exports the Square, Triangle, and Circle class
module.exports = {Square,Triangle,Circle}



