let x = +prompt();
let y = +prompt();

if (x > 0 && y > 0) {
    console.log('1 - chorak');
} else if (x < 0 && y > 0) {
    console.log('2 - chorak');
} else if (x < 0 && y < 0) {
    console.log('3 - chorak');
} else if (x > 0 && y < 0) {
    console.log('4 - chorak');
}