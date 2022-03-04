// a < b

let a = 1;
let b = 10;
let sum = 0;

if(a < b) {
    a += 1
    for(a; a < b; a++) {
        sum += a;
    }
    console.log(sum);
}

