import User from "./user.js"

export default class Customer extends User{ //User=superclass
    constructor(id, firstName, lastName, city, age, creditCartNumber) {

        super(id, firstName, lastName, city, age) //from base
        this.creditCartNumber = creditCartNumber


    }
}