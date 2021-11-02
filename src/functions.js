// function addTocart(productName="Kahve", quantity) {
//     console.log("Sepete Eklendi : " + productName + "Adet : " + quantity)
    
// }

// addTocart()
// addTocart("Yumurta", 30)
// addTocart(15)


// let sayHello = () =>{ //değişkenin bir fonksiyon olduğunu belirtiyoruz ve çağrıldığı zaman çalışacak olan bir kod bloğu vardır
//     console.log("Hello World!") //arrow function example
    
// } 
// sayHello()

// let sayHello2 = function () {
//     console.log("Hello World 2!") //classic funtion example
    
// }
// sayHello2()

// function addToCart2(productName,quantity,unitPrice) {

// }
// addToCart2("Elma",5,10) //Bu kullanım tercih edilen bir yöntem değildir objeler oluşturmak daha mantıklıdır
// addToCart2("Armut",10,6)

let product1 = {productName: "Elma", unitPrice: 10, quantity: 5} //aslında bir nevi encapsulation yaptık
let product2 = {productName: "Armut", unitPrice: 6, quantity: 10}

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Fiyat : " + product.unitPrice)
    console.log("Adet : " + product.quantity)
    
}

addToCart3(product1)
addToCart3(product2)


let product3 = {productName: "Elma", unitPrice: 10, quantity: 5} //aslında bir nevi encapsulation yaptık
let product4 = {productName: "Armut", unitPrice: 6, quantity: 10}
product3 = product4
product3.productName = "Karpuz"
console.log(product4.productName)


let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)


function addToCart4(x) {  //Bunu satın alanlar bu ürünleri de aldı kısmının örneği
    console.log(products)
    
}

let products = [
    {productName: "Elma", unitPrice: 10, quantity: 5},
    {productName: "Armut", unitPrice: 6, quantity: 10},
    {productName: "Limon", unitPrice: 4, quantity: 50},
]

addToCart4(products)

function add(...numbers) { //gönderilen parametleri bir array içerisine koy
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)  
}

add(5,6,7) //aslında burası let = [5,6,7] dir ve bunu funtion add() içerisine yollayarak fonksiyon işlemlerini gerçekleştirir

let numbers = [10,200,30,40,50]
console.log(numbers)
console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name: "İç Anadolu", population: "20M"},
    {name: "Marmara", population: "30M"},
    {name: "Karadeniz", population: "10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul,Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadolu.name)
console.log(icAnadoluSehirleri)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
= {productName: "Limon", unitPrice: 10, quantity: 5})

console.log(newProductName)
console.log(newUnitPrice)