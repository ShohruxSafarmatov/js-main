let number = 87345;

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
        console.log(remainder);
    } else if(remainderOfDecimal >= remainder && remainderOfDecimal >= remainderOfDecimalRemainder && remainderOfDecimal >= firstRoomOfNumberRemainder && remainderOfDecimal >= firstRoomOfNumberDecimal) {
        console.log(remainderOfDecimal);
    } else if(remainderOfDecimalRemainder >= decimal  && remainderOfDecimalRemainder >= firstRoomOfNumberRemainder && remainderOfDecimalRemainder >= firstRoomOfNumberDecimal) {
        console.log(remainderOfDecimalRemainder);
    } else if (firstRoomOfNumberRemainder >= remainder && firstRoomOfNumberRemainder >= remainderOfDecimalRemainder  && firstRoomOfNumberRemainder >= firstRoomOfNumberDecimal) {
        console.log(firstRoomOfNumberRemainder);
    } else if (firstRoomOfNumberDecimal >= remainder && firstRoomOfNumberDecimal >= remainderOfDecimalRemainder && firstRoomOfNumberDecimal >= firstRoomOfNumberRemainder) {
        console.log(firstRoomOfNumberDecimal);
    }
}

