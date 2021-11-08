let cart = [

    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

//map funtion
console.log("<ul>")
cart.map(product=>{
    console.log(product.productName + ":" + product.unitPrice * product.quantity)
})
console.log("</ul>")


//filter funtion
let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)


//reduce funtion
let total = cart.reduce((acc, product)=>acc+ product.unitPrice * product.quantity,0) //0 acc nin başlangıç değeridir
console.log(total)


function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20}) //referans tip old için ekleme işlemi gerçekleşir
}

addToCart(cart)
console.log(cart)



//değer tip için atama yapılırken işlem orada yapılır ve biter (çok önemli)
let sayi = 10

function sayiTopla(number) { //10 değerini numbera atadım  ve sayi ile alakam kalmadı numberin değeri 11 olurken sayının değeri hala 10
    number +=1
}

sayiTopla(sayi)
console.log(sayi)


