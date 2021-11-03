//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if(number % i == 0) {
           return false
        }
    }
    return true
}


function findPrime(...nums) { //rest 
    for (let i = 0; i < nums.length; i++) {
        if(isPrime(nums[i])){
            console.log(nums[i] + " asaldır")
        }
        else{
            console.log(nums[i] + " asal değildir")
        }
    }
}

findPrime(5,8,9,11,13,14)

//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız

function friendNumbers(num1, num2) {
    let toplam1 = 0
    let toplam2 = 0

    for (let i = 1; i < num1; i++) {
        if (num1 % i == 0) {
            toplam1 = toplam1 +  i
        }
    }

    for (let i = 1; i < num2; i++) {
        if (num2 % i == 0) {
            toplam2 = toplam2 + i
        }
    }

    if ((toplam1 == num2) && (toplam2 == num1)) {
        console.log(num1 + " ve " + num2 + " arkadas sayılardır ")
        
    }
    else{
        console.log(num1 + " ve " + num2 + " arkadas sayı degildir ")
    }
}

friendNumbers(10,35)
friendNumbers(220,284)
friendNumbers(503056,514736)

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function perfectNums(number) {
    let toplam = 0
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            toplam+=i
        }
    }
    if (toplam == number) {
        console.log(number + " mükemmel sayıdır ")
    }
    else{
        console.log(number + " mükemmel sayı degildir ")
    }
}
perfectNums(28)

function perfectNumbers() {
    for (let i = 1; i < 1000; i++) {
      let sum = 0
      for (let j = 1; j < i; j++) {
        if (i % j == 0) {
          sum += j
        }
      }
      if (sum == i) {
        console.log(i + " mükemmel sayıdır")
      }
    }
  }
  
  perfectNumbers()

//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function primeNums() {

    let primeNumberList = []
    for (let i = 2; i < 1000; i++) {
      let x = 0
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          x++;
          break
        }
      }
      if (x == 0) {
        primeNumberList.push(i)
      }
    }
    console.log("Prime Numbers:" + primeNumberList)
  }
  
  primeNums()