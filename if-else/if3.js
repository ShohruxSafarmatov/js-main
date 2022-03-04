let numberOne = +prompt();
let numberTwo = +prompt();
let result  = 0;
if (numberOne != numberTwo) {
    if (numberOne > numberTwo) {
        result = numberOne;
    } else {
        result = numberTwo;
    }
} else if (numberOne == numberTwo) {
    result = 0
}

console.log(result);
