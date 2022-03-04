let n = 2;
let factorial = 1;
let sum = 0;

if (n > 0) {
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            factorial *= j
        }
        sum += factorial;
        factorial = 1;
    }

    console.log(sum);
}