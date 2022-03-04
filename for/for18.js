let n = 2;
let a = 2;
let sumPositive = 0;
let sumNegative = 0;

if (n > 0) {
    for(let i = 0; i < Math.pow(-a, n); i+= 2) {
        sumPositive += Math.pow(a, i);
        console.log(Math.pow(a, i));
    }

    for(let i = 1; i < Math.pow(-a, n); i+= 2) {
        sumNegative += (Math.pow(-a, i))
        console.log(Math.pow(-a, i));
    }


    console.log((sumNegative + sumPositive) - 1);
}