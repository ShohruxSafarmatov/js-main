let number = 555;
let remainder = number % 10;
let decimal = number / 10;
let decimalOfDecimal = decimal / 10;
let remainderOfDecimal = decimal % 10;

console.log(Math.trunc(remainderOfDecimal) * 100 + Math.trunc(decimalOfDecimal) * 10 + remainder);