let n = 5;
let x = 0.4;
let sumPositive = 0;
let sumNegative = 0;

x = Math.abs(x);

if (n > 0 && Math.abs(x) < 1) {
    for(let i = 2; i <= n; i+=2) {
        sumNegative += ((Math.pow(x,i)) / i) * -1;
    }

    for(let i = 1; i <= n; i+=2) {
        sumPositive += (((Math.pow(x,i)) / i) * Math.pow(-1, n-1));
    }

    console.log(sumPositive + sumNegative);

}

