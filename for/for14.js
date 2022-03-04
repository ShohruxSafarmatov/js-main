let number = 4;
let sum = 0
if (number > 0) {
    for (let i = 1; i <= (number*2-1); i+=2) {
        sum += i;
        console.log(`${i}+`);
    }

}
if (number**2 == sum) {
    console.log(`${number**2}`);
    
}