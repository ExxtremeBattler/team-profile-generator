//TODO: Write code to define and export the Employee class

class Employee {

    constructor(name, id, email){
        if (typeof name === "string" && typeof id === "number" && typeof email === "string" ){
            this.name = name
            this.id = id
            this.email = email
        }
    }

    getRole(){
        return this.constructor.name
    }

    getEmail(){
        return this.email
    }

    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
}


