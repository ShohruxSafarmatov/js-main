let number = 101;

let remainder = number % 10;
let decimal = Math.trunc(number / 10);
let decimalOfRemainder = decimal % 10;
let decimalOfDecimal = Math.trunc(decimal / 10);
let result = decimalOfDecimal + decimalOfRemainder + remainder;

console.log(result % 2 == 1);