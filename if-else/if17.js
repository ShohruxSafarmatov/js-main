let number = 2231;
let counter = 0;

let remainder = number % 10;
let decimal = Math.trunc(number / 10);
let remainderOfDecimal = decimal % 10;
let decimalOfDecimal = Math.trunc(decimal / 10);
let remainderOfDecimalRemainder = decimalOfDecimal % 10;
let firstRoomOfNumber = Math.trunc(number / 1000);

if (number > 0 && number < 10000) {
    if(remainder % 2 == 1) {
        counter += remainder
    }

    if(remainderOfDecimal % 2 == 1) {
        counter += remainderOfDecimal
    }
    if(remainderOfDecimalRemainder % 2 == 1) {
        counter += remainderOfDecimalRemainder
    }

    if(remainderOfDecimalRemainder % 2 == 1) {
        counter += remainderOfDecimalRemainder
    }
}

console.log(counter);