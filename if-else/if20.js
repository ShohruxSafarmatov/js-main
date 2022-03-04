let number = 87279;
let counter = 1;

let remainder = number % 10;
let decimal = Math.trunc(number / 10);
let remainderOfDecimal = decimal % 10;
let decimalOfDecimal = Math.trunc(decimal / 10);
let remainderOfDecimalRemainder = decimalOfDecimal % 10;
let firstRoomOfNumber = Math.trunc(number / 1000);
let firstRoomOfNumberRemainder = firstRoomOfNumber % 10;
let firstRoomOfNumberDecimal = Math.trunc(firstRoomOfNumber / 10);

if (number >= 10000 && number < 99999) {
    if (remainder >= remainderOfDecimal && remainder >= remainderOfDecimalRemainder && remainder >= firstRoomOfNumberRemainder && decimal >= firstRoomOfNumberDecimal) {
        console.log(remainder, counter);
    } else if(remainderOfDecimal >= remainder && remainderOfDecimal >= remainderOfDecimalRemainder && remainderOfDecimal >= firstRoomOfNumberRemainder && remainderOfDecimal >= firstRoomOfNumberDecimal) {
        counter = 2;
        console.log(remainderOfDecimal, counter);
    } else if(remainderOfDecimalRemainder >= remainder && remainderOfDecimalRemainder >= firstRoomOfNumberRemainder && remainderOfDecimalRemainder >= firstRoomOfNumberDecimal) {
        counter = 3;
        console.log(remainderOfDecimalRemainder, counter);
    } else if (firstRoomOfNumberRemainder >= remainder && firstRoomOfNumberRemainder >= remainderOfDecimalRemainder  && firstRoomOfNumberRemainder >= firstRoomOfNumberDecimal) {
        counter = 4;
        console.log(firstRoomOfNumberRemainder, counter);
    } else if (firstRoomOfNumberDecimal >= remainder && firstRoomOfNumberDecimal >= remainderOfDecimalRemainder && firstRoomOfNumberDecimal >= firstRoomOfNumberRemainder) {
        counter = 5;
        console.log(firstRoomOfNumberDecimal, counter);
    }

}

