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

function getOption(){
    inquirer.prompt([
        {
            type: "input",

            message: "Would you like to add an engineer, an intern, or finish building the team? \n" +
            "Type 'engineer' to add an engineer, 'intern' to add an intern, or 'finish' to finish building the team.",

            name: "selectedOption"
        }
    ]).then((response) => {
        
        if (response.selectedOption === "engineer") {
            addEngineer()
        } 
        else if (response.selectedOption === "intern") {
            addIntern()
        }
        else if (response.selectedOption === "finish"){
            console.log("Very well! The team is complete.")
            buildPage()
        }
        else{
            console.log("Sorry, we didn't catch that. Please try again");
            getOption()
        }
    })
}

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


function addIntern() {

  inquirer
    .prompt([
      {
        type: "input",
        message: internQuestions[0],
        name: "internName",
      },
      {
        type: "input",
        message: internQuestions[1],
        name: "internId",
      },
      {
        type: "input",
        message: internQuestions[2],
        name: "internEmail",
      },
      {
        type: "input",
        message: internQuestions[3],
        name: "internSchool", 
      },
    ])
    .then((response) => {
  
      let intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
  
      teamMembers.push(intern)
  
    } 
  )}

  function buildPage() {

    var page = render(teamMembers)

    fs.writeFile(outputPath, page)

    
  }



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

    teamMembers.push(teamManager)

    getOption()

  })

}

init()

