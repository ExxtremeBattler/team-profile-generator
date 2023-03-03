// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }

}

// const manager1 = new Manager("Gabriel", 3, "email", 3)
// const employee1 = new Employee("Bob", 1, "bob@gmail.com")

// console.log(employee1.getRole());
// console.log(manager1.getRole());