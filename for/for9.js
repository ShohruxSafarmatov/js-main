let a = 1;
let b = 5;
let sum = 0;

if(a < b) {
    a += 1;
    for(a; a < b; a++) {
        console.log(a);
        sum = sum + Math.pow(a, 2);
    }
    console.log(sum);
}