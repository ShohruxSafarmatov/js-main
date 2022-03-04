let x = +prompt();
let fx = 0;

if (x == 0) {
    fx = 0
} else if (x < -2 || x > 2) {
    fx = 2 * x;
} else {
    fx = -3 * x;
}

console.log(fx);