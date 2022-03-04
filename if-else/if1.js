let numberOne = +prompt();
let numberTwo = +prompt();
let numberThree = +prompt();

if (numberOne == numberTwo && numberOne == numberThree) {
    console.log('Equal');
} else if(numberOne <= numberTwo && numberOne <= numberThree) {
    console.log(numberOne);
} else if (numberTwo <= numberOne && numberTwo <= numberThree) {
    console.log(numberTwo);
} else if (numberThree <= numberOne && numberThree <= numberTwo) {
    console.log(numberThree);
}