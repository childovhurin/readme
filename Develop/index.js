//libraries
const ask = require("inquirer");
const fs = require("fs");
const axios = require("axios");

//questions array
const questions = [{
    type: "input",
    name: "name",
    message: "What is your Github username?"
},
{
    type: "input",
    name: "project",
    message: "What is the name of your project?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
},
{
    type: "input",
    name: "project",
    message: "Describe your project:"
},
{
    type: "input",
    name: "install",
    message: "How do you install this project?"
},
{
    type: "input",
    name: "use",
    message: "How is this project used?"
},
{
    type: "input",
    name: "license",
    message: "What licenses are used for this project?"
},
{
    type: "input",
    name: "tests",
    message: "What tests were performed on this project?"
},
{
    type: "input",
    name: "tests",
    message: "Where would users direct thier questions?"
}].then(answers => {
    console.log("Good job!")
    console.log(answers);

    var ans = JSON.stringify(answers);
    console.log(ans);
    console.log(answers.name);
});

function writeToFile(fileName, data) {
}

fs.writeFileSync("readme.md", ans);

// .catch (error => {
//     console.log("error!");
// )
// };




function init() {

}

init();