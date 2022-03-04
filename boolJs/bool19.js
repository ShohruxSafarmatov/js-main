let number = 98765;

let remainderOfFifthRoom = number % 10;
let remainderOfFourthRoom = number % 100;
let remainderOfThirdRoom = number % 1000;
let remainderOfSecondRoom = number % 10000;
let remainderOfFirstRoom = number % 100000;

remainderOfFirstRoom = Math.trunc(remainderOfFirstRoom / 10000);
remainderOfSecondRoom = Math.trunc(remainderOfSecondRoom / 1000);
remainderOfThirdRoom = Math.trunc(remainderOfThirdRoom / 100);
remainderOfFourthRoom = Math.trunc(remainderOfFourthRoom / 10);

console.log((remainderOfFifthRoom < remainderOfFourthRoom) && (remainderOfFourthRoom < remainderOfThirdRoom) && (remainderOfThirdRoom < remainderOfSecondRoom) && (remainderOfSecondRoom < remainderOfFirstRoom));



