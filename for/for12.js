let number = 2;
let multiplication = 1;

if(number > 0) {
    number += 0.1;
    for(let i = 1.1; i <= number; i += 0.1) {
        console.log(i.toFixed(1));
        multiplication *= i;
    }
    console.log(multiplication.toFixed(1));
}