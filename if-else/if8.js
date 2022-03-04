let sideA = +prompt('Enter Side A: ');
let sideB = +prompt('Enter Side B: ');
let sideC = +prompt('Enter Side C: ');

if (sideA + sideB >= sideC && sideB + sideC >= sideA && sideC + sideA >= sideB) {
    console.log('Yes');
} else {
    console.log('No');
}
