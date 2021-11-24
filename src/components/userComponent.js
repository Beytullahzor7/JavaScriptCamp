import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js"
import UserService from "../services/userService.js" //iki nokta bir üst klasöre ait olduğunu gösterir

console.log("User Component Loaded")

let logger1 = new ElasticLogger(); //Plug & Play
let userService = new UserService(logger1); //bir classı newleyerek kullanırız. New işlemini gerçekleştirdiğimde import kısmı otomatik olarak gelir

// let user1 = new User(1,"Beytullah","Zor","Samsun")
// let user2 = new User(2,"Engin","Demiroğ","Ankara")

// userService.add(user1) //userService içerisindeki add() fonksiyonuna user1 i atamış olduk
// userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))


//let customer = { id: 1, firstName: "Beytullah" }

//prototyping = js de sonradan değer ekleyebilmek
//customer.lastName = "Zor"
//console.log(customer.lastName)



console.log("---------------") //yeni kodlar buradan itibaren


// let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara",25, "123456")
// customerToAdd.type = "customer"

// userService.add(customerToAdd)

userService.load()

console.log(userService.customers)
console.log(userService.employees)
// console.log(userService.errors)
// console.log(userService.getCustomerSorted())
