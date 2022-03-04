let a = 1;
let b = 5;
let multiplication = 1;

if (a < b) {
    a += 1;
    for(a; a < b; a++) {
        multiplication *= a; 
    }
    console.log(multiplication);
}
