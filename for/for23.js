let n = 5;
let x = 9;
let factorial = 1;
let sumPositive = 0;
let sumNegative = 0;

if (n > 0) {
    for(let i = 1; i <= n; i+= 4) {
        for(let j = 1; j <= i; j++) {
            factorial *= j;
        }
        
        sumPositive += Math.pow(x,i) / factorial
        factorial = 1;
    }
    for(let i = 1; i <= n; i+= 4) {
        for(let j = 1; j <= i; j++) {
            factorial *= j;
        }
        sumNegative += (Math.pow(x,i) / factorial) * (-1)
        factorial = 1;
    }
    
    console.log(`Natija ${(sumNegative + sumPositive) * Math.pow(-1, n)}`);
    console.log(`sin(x) ga yaqin natija ${Math.trunc(Math.sin(x))}`);
}
