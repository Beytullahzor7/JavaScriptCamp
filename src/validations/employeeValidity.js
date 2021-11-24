import DataError from "../models/dataError.js"

export class CheckEmployeeValidityForErrors {
    constructor() {
        this.errors = []
    }

    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName city age salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation Problem. ${field} is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation Problem. ${user.age} is not a number`, user))
        }

        return hasErrors
    }

}