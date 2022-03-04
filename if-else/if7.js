let x = +prompt();
let fx = 0;

if (x <= 0) {
    fx = -x;
} else if (0 < x  && x < 2) {
    fx = x ** 2;
} else {
    fx = 4;
}

console.log(fx);