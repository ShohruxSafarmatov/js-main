let numberOne = +prompt();
let numberTwo = +prompt();
let numberThree = +prompt();

if (numberOne == numberTwo || numberOne == numberThree) {
    console.log('Equal');
} 

if(numberOne > numberTwo || numberTwo < numberThree) {
    console.log(`The average ${numberTwo}`);
} else if (numberTwo > numberOne || numberOne < numberThree) {
    console.log(`The average ${numberOne}`);
} else if (numberOne > numberThree || numberThree < numberTwo) {
    console.log(`The average ${numberThree}`);
}

