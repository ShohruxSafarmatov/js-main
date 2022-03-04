let number = 27;
let remainder = number % 10;
let decimal = Math.trunc(number / 10);

console.log((remainder + decimal) % 2 == 0);