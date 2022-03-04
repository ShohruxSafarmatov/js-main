let x = +prompt();
let fx = 0;

if (x > 0) {
    fx = 2 * Math.sin(x);
} else if (x <= 0) {
    fx = x - 6;
}

console.log(fx);
