// Inquirer import
const inquirer = require("inquirer");
// File system import
const fs = require("fs");
// Allow us to import classes from the shapes.js file in the directory
const { Square, Triangle, Circle } = require("./lib/shapes.js");

// Utilizes inquirer to ask the user a set of questions about the shape, shape color, text and text color through the command line.
function promptUser() {
  inquirer
    .prompt([
      {
        // Shape
        type: "list",
        name: "shape",
        message: "Choose a shape:",
        choices: ["Square", "Triangle", "Circle"],
      },

      {
        // Shape color
        type: "input",
        name: "shapeColor",
        message: "Choose a color (Keyword OR Hexadecimal):",
      },

      {
        // Text
        type: "input",
        name: "text",
        message: "Display a text (3 characters OR less):",
      },

      {
        // Text color
        type: "input",
        name: "textColor",
        message: "Choose a text color (Keyword OR Hexadecimal):",
      }
    ])
    .then((choice) => {
      if (choice.text.length > 3) {
        console.log("3 characters max");
        promptUser();
      } else {
        writeToFile("logo.svg", choice);
      }
    });
}

// Calls the promptUser function
promptUser();

// Will write the SVG file after the user answers the questions
function writeToFile(fileName, choice) {
// Empty string  
  let svgLogo = "";
// Sets container width and height for the logo
  svgLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
// Inserts the user input into the svg file
  svgLogo += `${choice.shape}`;


  // This will allow the user to take their input from the array and apply the properties of what shape and color they want.
  let svgShape;
  if (choice.shape === "Square") {
    svgShape = new Square();
  } else if (choice.shape === "Triangle") {
    svgShape = new Triangle();
  } else {
    (choice.shape === "Circle")
    svgShape = new Circle();
  }
   
  svgShape.setColor(choice.shapeColor);
  console.log(svgShape.render());

// Set a default text size of 50 and displays the text and text color on the logo
  svgLogo += svgShape.render();
  svgLogo += `<text x="125" y="125" font-size="50" text-anchor="center" fill="${choice.textColor}">${choice.text}</text>`;
 
  svgLogo += '</svg>'

  fs.writeFile(fileName, svgLogo, (err) => {
    err ? console.log(err) : console.log("File created");
  });
}