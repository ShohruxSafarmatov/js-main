let numberOne = -1;
let numberTwo = -3;
let numberThree = -8;

let positiveNumber = 0;
let negativeNumber = 0;

positiveNumber = (((numberOne > 0) && ++positiveNumber) || positiveNumber);
negativeNumber = (((numberOne < 0) && ++negativeNumber) || negativeNumber);
positiveNumber = (((numberTwo > 0) && ++positiveNumber) || positiveNumber);
negativeNumber = (((numberTwo < 0) && ++negativeNumber) || negativeNumber);
positiveNumber = (((numberThree > 0) && ++positiveNumber) || positiveNumber);
negativeNumber = (((numberThree < 0) && ++negativeNumber) || negativeNumber);

console.log(`Positive Number: ${positiveNumber}`);
console.log(`Negative Number ${negativeNumber}`);