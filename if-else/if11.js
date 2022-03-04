let number = 101;

if ((number / 10) > 1 && (number / 10) < 10) {
    if(number % 2 == 0) {
        console.log('Ikki xonali juft son');
    } else if(number % 2 == 1) {
        console.log('Ikki xonali toq son');
    }
} else if ((number / 10) >= 10 && (number / 10) < 100) {
    if(number % 2 == 0) {
        console.log('Uch xonali juft son');
    } else if(number % 2 == 1) {
        console.log('Uch xonali toq son');
    }
}