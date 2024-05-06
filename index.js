// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");
const { default: Choice } = require("inquirer/lib/objects/choice");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "Write your name",
  },

  {
    type: "input",
    name: "title",
    message: "Please name your project.",
  },

  {
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of this project.",
  },

  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions:",
  },

  {
    type: "input",
    name: "usage",
    message: "Enter usage information: ",
  },

  {
    type: "checkbox",
    name: "license",
    message: "Choose a license for you project:",
    choices: ["MIT", "Apache 2.0", "Boost 1.0", "MPL 2.0", "BSD 3", "None"],
  },

  {
    type: "input",
    name: "contributing",
    message: "Please list any contibutors and the guildlines :",
  },

  {
    type: "input",
    name: "tests",
    message: "Provide walkthrough of required tests if applicable:",
  },

  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email-address?",
  },
];

// console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
    err
      ? console.error(`Err generationg a Readme:`, err)
      : console.log("README.md has been generated!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const markdownContent = generateMarkdown({ ...responses });
    writeToFile("./dist/READMEPRO.md", markdownContent);
  });
}

// Function call to initialize app
init();
