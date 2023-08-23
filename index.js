// Inquirer import
const inquirer = require("inquirer");
//File system import
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
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("3 characters max");
        promptUser();
      } else {
        writeToFile("logo.svg", answers);
      }
    });
}

// Calls the promptUser function
promptUser();
