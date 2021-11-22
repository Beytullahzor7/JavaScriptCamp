import User from "./user.js"

export default class Employee extends User{ //User=superclass
    constructor(id, firstName, lastName, city, age, salary) {
        
        super(id, firstName, lastName, city, age)
        this.salary = salary


    }
}