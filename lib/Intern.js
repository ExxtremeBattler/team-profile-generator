// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern {
    constructor(name, id, email, school){
        super(name,id,email)

        if(typeof school === "string"){
            this.school = school
        }
    }

    getSchool(){
        return this.school
    }
    
}