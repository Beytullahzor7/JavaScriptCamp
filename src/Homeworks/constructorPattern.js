
//Constructor Patterns Example
function Calisan(isim, soyisim, numara){

    this.isim = isim;
    this.soyisim = soyisim;
    this.numara = numara;
    this.bilgileriGoster = function(){
        return "İsim: " + this.isim + "\nSoyisim : " + this.soyisim
    }

}

var calisan1 = new Calisan("Beytullah", "Zor", 123);
var calisan2 = new Calisan("Engin", "Demiroğ", 456);

console.log(calisan1.bilgileriGoster())
console.log(calisan2.bilgileriGoster())