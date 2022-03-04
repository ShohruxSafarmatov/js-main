let number = 22;
let remainder = number % 10;
let decimal = Math.trunc(number / 10);

console.log((remainder + decimal) % 2 == 1);