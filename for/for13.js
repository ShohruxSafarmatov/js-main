let number = 2;
let sumOfNegative = 0;
let sumOfPositive = 0;


if (number > 0) {
    for(let i = 1.0; i < number; i += 0.2) {
        sumOfNegative += -1 * i 
    }

    for(j = 1.1; j < number; j += 0.2) {
        sumOfPositive += j
    }
    console.log(sumOfPositive + (sumOfNegative + 1));
}