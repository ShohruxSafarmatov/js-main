let number = 241;

let remainder = number % 10;
let decimal = number / 10;
let decimalOfRemainder = decimal % 10;
let decimalOfDecimal = Math.trunc(decimal / 10);

console.log(`The sum of the rooms of the number is ${Math.trunc(decimalOfDecimal + decimalOfRemainder + remainder)}
The multiplication of the rooms of the number is ${Math.trunc(decimalOfDecimal * decimalOfRemainder * remainder)}`);