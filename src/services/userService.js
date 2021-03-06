import { users } from "../data/users.js"
import DataError from "../models/dataError.js"
import { CheckCustomerValidityForErrors, checkCustomerValidityForErrors } from "../validations/customerValidity.js"
import { CheckEmployeeValidityForErrors } from "../validations/employeeValidity.js"

export default class UserService {
    constructor() {
        this.employees = []
        this.customers = []
        this.errors = []
        this.customerValidity = new CheckCustomerValidityForErrors()
        this.employeeValidity = new CheckEmployeeValidityForErrors()
      
    }

    load() {
        for (const user of users) { //user takma isimdir users içinde dolanır
            switch (user.type) {
                case "customer":
                    if (!this.customerValidity.checkCustomerValidityForErrors(user)) {  //!checkCustomerValidityForErrors(user)
                        this.customers.push(user)
                    }
                    //this.customers.push(user)
                    break;

                case "employee":
                    if (!this.employeeValidity.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong User Type", user))
                    break;
            }
        }

    }

    // checkCustomerValidityForErrors(user) {
    //     let requiredFields = "id firstName lastName age city".split(" ")
    //     let hasErrors = false
    //     for (const field of requiredFields) {
    //         if (!user[field]) {
    //             hasErrors = true
    //             this.errors.push(new DataError(`Validation Problem. ${field} is required`, user))
    //         }
    //     }


    //     if (Number.isNaN(Number.parseInt(+user.age))) {
    //         hasErrors = true
    //         this.errors.push(new DataError(`Validation Problem. ${user.age} is not a number`, user))
    //     }

    //     return hasErrors
    // }

    // checkEmployeeValidityForErrors(user) {
    //     let requiredFields = "id firstName lastName age city salary".split(" ")
    //     let hasErrors = false
    //     for (const field of requiredFields) {
    //         if (!user[field]) {
    //             hasErrors = true
    //             this.errors.push(new DataError(`Validation Problem. ${field} is required`, user))
    //         }
    //     }

    //     if (Number.isNaN(Number.parseInt(user.age))) {
    //         hasErrors = true
    //         this.errors.push(new DataError(`Validation Problem. ${user.age} is not a number`, user))
    //     }

    //     return hasErrors
    // }


    add(user) {
        switch (user.type) {
            case "customer":
                if (!this.checkValidityCustomer.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                //this.customers.push(user)
                break;
            case "employees":
                if (!this.checkValidityEmployee.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                //this.employees.push(user)
                break;
            default:
                this.errors.push(new DataError("This User Cannot Be Added", user))
                break;
        }
    }


    getCustomerSorted(){
        return this.customers.sort((customer1, customer2)=>{
            if(customer1.firstName>customer2.firstName){
                return 1;

            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
                return -1
            }  
        })
    }

    getById(id) {
        return this.customers.find(u=>u.id === id) //users arrayı içerisinde u adı ile dolan
    }
}