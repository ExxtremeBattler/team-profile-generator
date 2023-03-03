const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const managerQuestions = ["What is the manager of this project's name?", "What is that manager's id?", "The manager's email?",
"Their office no. ?"]



function init() {

console.log("Welcome to the Team Profile Generator!");


// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: questions[0],
//       name: "title",
//     },
//     {
//       type: "input",
//       message: questions[1],
//       name: "description",
//     },
//     {
//       type: "input",
//       message: questions[2],
//       name: "installation",
//     },
//     {
//       type: "input",
//       message: questions[3],
//       name: "usage", 
//     },
//     {
//       type: "input",
//       message: questions[4],
//       name: "contributors", 
//     },
//     {
//       type: "input",
//       message: questions[5],
//       name: "tests", 
//     },
//     {
//       type: "input",
//       message: questions[6],
//       name: "license", 
//     },
//     {
//       type: "input",
//       message: questions[7],
//       name: "username", 
//     },
//     {
//       type: "input",
//       message: questions[8],
//       name: "email", 
//     },
//   ])
//   .then((response) => )

}

