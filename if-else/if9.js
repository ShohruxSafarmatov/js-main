let temp = 0;

if (temp <= 0) {
    console.log('Freeing');
} else if (temp >= 1 && temp <= 10) {
    console.log('Very Cold');
} else if (temp >= 11 && temp <= 20) {
    console.log('Cold');
} else if (temp >= 21 && temp <= 30) {
    console.log('Normal');
} else if (temp >= 31 && temp <= 40) {
    console.log('Hot');
} else {
    console.log('Very Hot');
}

