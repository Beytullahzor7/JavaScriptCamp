class Customer{
    constructor(id, customerNumber){

        this.id = id //Bu bir prototyping özelliğidir
        this.customerNumber = customerNumber
    }

}

let customer = new Customer(1,"1234");

//PROTOTYPING
customer.name = "Beytullah ZOR" //instanceye yapılan prototyping
console.log(customer.name)

Customer.something = "Something"
console.log(Customer.something)

console.log(customer.id, customer.customerNumber)


class IndividualCustomer extends Customer{
    constructor(firstName, id, customerNumber){
        super(id, customerNumber) //base de olan özellikler
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName, id , customerNumber){
        super(id, customerNumber)
        this.companyName = companyName 
    }
    
}
