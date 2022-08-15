// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const util = require('util');
// const { rejects } = require('assert');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Provide a short description explaining the what, why, and how of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "installation",
    },
    {
        type: "input",
        message: "What is this project used for? (provide instructions and examples for use).",
        name: "usage",
    },
    {
        type: "input",
        message: "What does the user need to know to contribute to this project?",
        name: "contribution",
    },
    {
        type: "input",
        message: "How do you test this project? (provide the terminal commands to test this app).",
        name: "test",
    },
    {
        type: "list",
        message: "Please select the required license for your project. Please refer to: https://choosealicense.com/",
        name: "license",
        choices: ['Apache', 'GNU', 'MIT', 'Mozilla', 'No License'],
    },
    {
        type: "input",
        message: "What is your Github username??",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) => {
        if (err) {
            rejects(err);
            console.log('Error creating the file: ' + err);
        } else {
            console.log(`Success - README file created: ${fileName}.md.`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile(response.title, response);
        })
        .catch((error) => {
            console.log(error);
        })
}

// Function call to initialize app
init();
