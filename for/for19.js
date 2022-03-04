let n = 5;
let factorial = 1;
if(n > 0) {
    for(let i = 1; i <= n; i++) {
        factorial *= i
    }
    console.log(factorial);
}