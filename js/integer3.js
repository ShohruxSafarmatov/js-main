let number = 123;

let remainder = number % 100;
let remainderOfRemainder = remainder % 10;
let remainderOfRemainderNumber = remainder / 10;
let decimal = Math.trunc(number / 100);
console.log(number);
console.log((remainderOfRemainder * 100) + Math.trunc(remainderOfRemainderNumber) * 10 + decimal) ;