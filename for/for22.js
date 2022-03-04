let n = 5;
let x = 2;
let factorial = 1;
let sum = 1;
let result = 0;

if (n > 0) {

    for (let i = 1; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            factorial *= j;
        }
        result = (Math.pow(x, i) / factorial);
        sum += result;
        factorial = 1;
    }    
    console.log(sum.toFixed(2));
}