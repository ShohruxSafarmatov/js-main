let numberOne = -1;
let numberTwo = -3;
let numberThree = -8;

let result = 0;

result = (((numberOne > 0) && ++result) || ((numberOne < 0) && result));
result = ((numberTwo > 0) && ++result || ((numberOne < 0) && result));
result = ((numberThree > 0) && ++result || ((numberOne < 0) && result));

console.log(result);