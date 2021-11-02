console.log("Merhaba Kodlama.io")

// JS is not typesafe
let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun = 9.1
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11.1 hata döndürür çünkü euroDun bir constant değerdir

console.log(euroDun)

let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu konut kredisi","Özel konut kredisi"]

console.log("<ul>")

for (let i = 0; i<konutKredileri.length;i++){ //i nin değeri konutkredilerinden küçük olduğu sürece işleme devam et
    console.log("<li>"+ konutKredileri[i]+ "</li>")
}
console.log("</ul>")
console.log(konutKredileri.length)

//console.log(konutKredileri)

let student = {id:1, name: "beytullah"}

function save(ogrenci, puan=80) {
    console.log(ogrenci.name + ":" + puan)
}
save(student);
save(student,100) //puan göndermezsek default olarak 80 alır 
//student parametresi ilk olduğu için fonk içerisindeki öğrenciye denk gelir

function save1(puan=10, ogrenci) {
    console.log(ogrenci.name + ":" + puan)
}
save1(undefined,student) //java ve python gibi dillerde default deger sona yazılır ancak js de undefined ekleyerek ilk parametreye default değer ataması yapabiliriz


//REST
let showProducts = function (id,...products) { //değişkene fonksiyon ataması yaptık. buradaki üç nokta gönderilen elemanların tek array olduğunu belirtir
    console.log(id)
    console.log(products)
}

// showProducts(10,"elma","armut","karpuz")

//SPREAD
let points = [1,2,3,4,50,60,12]
console.log(...points) //arrayı parcaladık
console.log(Math.max(...points))           
console.log(..."ABC","D","E",..."FG")         

//DESTRUCTURING

let populations = [1000,2000,3000]
let [small,medium,high] = populations //bu bir destructuring örneğidir

console.log(small)
console.log(medium)
console.log(high)

function someFunction([small1],number) { //populations arrayı içerisindeki ilk değeri small1 olarak atama yapar
    console.log(small1)
}
someFunction(populations)
