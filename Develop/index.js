// Sets up required dependencies/modules/files
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Function to write the user-provided answers to a new README file
function writeToFile(fileName, answers) {
  // Calls the markdown writing function from generateMarkdown.js
  const content = generateMarkdown(answers);
  // Writes the readme file
  fs.writeFileSync(fileName, content);
}

// Asks the user questions about their project and stores the answers
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your project's name?",
      name: "title",
    },
    {
      type: "input",
      message: "Please write a short description of your project:",
      name: "description",
    },
    {
      type: "list",
      message: "Which license did you use for your project? (use arrow key)",
      name: "license",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      default: "npm i",
      name: "installation",
    },
    {
      type: "input",
      message: "What command should be used to run tests?",
      default: "npm test",
      name: "tests",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      default:
        "While in the same folder as the index.js file, type node index.js into the command prompt.",
      name: "usage",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the project?",
      name: "contributing",
    },
  ])
  .then((answers) => {
    // Runs the README file writing function, names and places it, and gives it the user-generated answers
    writeToFile("../README.md", answers);
  });
