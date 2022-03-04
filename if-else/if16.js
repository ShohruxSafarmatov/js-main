let number = 180;

let remainder = number % 10;
let decimal = Math.trunc(number / 10);
let remainderOfDecimal = decimal % 10;
let decimalOfDecimal = Math.trunc(decimal / 10);
let remainderOfDecimalRemainder = decimalOfDecimal % 10;
let firstRoomOfNumber = Math.trunc(number / 1000);

if (number > 0 && number < 10000) {
    console.log(remainder + remainderOfDecimal + remainderOfDecimalRemainder + firstRoomOfNumber);
} else {
    console.log('10000 dan kichik va 0 katta son kiriting');
}