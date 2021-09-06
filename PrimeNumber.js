var number = prompt("Please enter a number")
if (number == 1) {
    console.log(`${number} is either prime not composite number`);
}
else if (number < 1) {
    console.log(`${number} is not a prime number`);
}
else {
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            var res = `${number} is not a prime number`;
            break;
        }
        else {
            var res = `${number} is a prime number`;

        }
    }
    console.log(res);
}
