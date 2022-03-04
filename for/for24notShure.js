let n = 9;
let x = 5;
let factorial = 1;
let sumPositive = 0;
let sumNegative = 0;

if (n > 0) {
    for(let i = 0; i <= n; i+= 4) {
        for(let j = 1; j <= i; j++) {
            factorial *= j;
        }
        sumPositive += Math.pow(x,i) / factorial
        factorial = 1;
    }
;

    for(let i = 2; i <= n; i+= 4) {
        for(let j = 1; j <= i; j++) {
            factorial *= j;
        }

        sumNegative += (Math.pow(x,i) / factorial) * (-1)
        factorial = 1;
    }

    
    console.log(sumNegative,sumPositive.toFixed(1));
    console.log(Math.cos(x));
}

