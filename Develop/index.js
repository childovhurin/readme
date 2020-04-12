const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is your Github username?",
    name: "username"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is the project title?",
    name: "title"
  },
  {
    type: "input",
    message: "Give a brief description of this project.",
    name: "description"
  },
  {
    type: "input",
    message: "How do you install this project?",
    name: "installation"
  },
  {
    type: "input",
    message: "What licenses does this project have?",
    name: "license"
  },
 
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {

    if (err) {
      return console.log(err);
    }else {

    console.log("Success!")}

  })
}

function start() {
  inquirer
    .prompt(questions) 
    .then(answers => { 
      api.getUser(answers.username)
        .then(data => {
          console.log(api)
 //Write file 
          writeToFile("README.md", generateMarkdown(...answers, ...data));
        });
    })
    .catch(error => {
      console.log("error")
    });
};

start();