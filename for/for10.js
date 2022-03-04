let number = 2;
let sum = 0;

if (number > 0) {
    for(let i = 1; i <= number; i++) {
        let result = 1/i
        sum += result;
    }
    console.log(sum);
}