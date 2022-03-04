let n = 5;
let a = 5;
let sum = 0;
if(n > 0) {
    for(let i = 2; i < n; i++) {
        console.log(Math.pow(a, i));
        sum += Math.pow(a, i) 
    }
    console.log(sum);
}