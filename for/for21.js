let n = 5; 
let factorial = 1;
let sum = 1;
let result = 0;

if (n > 0) {
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            factorial *= j;
            result = 1 / factorial;
        }

        // console.log(result.toFixed(2));
        factorial = 1;
        sum += result
    }

    console.log(sum.toFixed(2));
}
