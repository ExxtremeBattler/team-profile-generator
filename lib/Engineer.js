// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer{
    constructor(name, id, email, github){
        super(name, id, email)

        if(typeof github === "string"){
            this.github = github
        }
    }

    getGithub(){
        return this.github
    }
}

module.exports = Engineer