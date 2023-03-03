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

const engineerQuestions = ["What's the name of this engineer?", "The engineer's id?", "The engineer's email?", "The engineer's github?"]

const internQuestions = ["What's the name of this intern?", "The intern's id?", "The intern's email?", "What school does this intern attend?"]

var teamMembers = []

function addEngineer() {

inquirer
  .prompt([
    {
      type: "input",
      message: engineerQuestions[0],
      name: "engineerName",
    },
    {
      type: "input",
      message: engineerQuestions[1],
      name: "engineerId",
    },
    {
      type: "input",
      message: engineerQuestions[2],
      name: "engineerEmail",
    },
    {
      type: "input",
      message: engineerQuestions[3],
      name: "engineerGithub", 
    },
  ])
  .then((response) => {

    let engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)

    teamMembers.push(engineer)

  } 
)}



function init() {

console.log("Welcome to the Team Profile Generator!");


inquirer
  .prompt([
    {
      type: "input",
      message: managerQuestions[0],
      name: "managerName",
    },
    {
      type: "input",
      message: managerQuestions[1],
      name: "managerId",
    },
    {
      type: "input",
      message: managerQuestions[2],
      name: "managerEmail",
    },
    {
      type: "input",
      message: managerQuestions[3],
      name: "managerOfficeNo", 
    },
  ])
  .then((response) => {
    const teamManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNo)


  })

}

