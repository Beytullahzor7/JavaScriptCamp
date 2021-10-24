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

let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu konut kredisi","Özel konut kredisi","Özel konut kredisi"]

console.log("<ul>")

for (let i = 0; i<konutKredileri.length;i++){ //i nin değeri konutkredilerinden küçük olduğu sürece işleme devam et
    console.log("<li>"+ konutKredileri[i]+ "</li>")
}
console.log("</ul>")
console.log(konutKredileri.length)

//console.log(konutKredileri)