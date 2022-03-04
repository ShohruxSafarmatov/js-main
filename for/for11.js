let number = 2;
let sum = 0;

if (number > 0) {
    for (let i = 0; i < Math.pow((number*2), 2); i++) {
        let result = Math.pow((number + i), 2);    
        sum += result;
        console.log(sum);
    }
    console.log(sum);
}
