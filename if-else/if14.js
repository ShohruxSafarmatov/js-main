let number = 27;

let remainder = number % 10;
let decimal = Math.trunc(number / 10);
let result = remainder * 10 + decimal; 

if (number >= result) {
    console.log(true);
} else {
    console.log(false);
}