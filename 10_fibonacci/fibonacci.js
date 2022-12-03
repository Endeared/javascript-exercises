const fibonacci = function(number) {

    let newNum = 0;
    let i = 0;
    let prevNum1 = 1;
    let prevNum2 = 1;
    let sum = 0;

    if (number < 0) {
        return 'OOPS';
    } else if (number === 1) {
        return 1;
    } else if (number === 2) {
        return 1;
    } else if (typeof number !== 'number') {
        newNum = Number(number);
        return fibonacci(newNum);
    } else {
        newNum = number;
    }



    for (i = 3; i <= number; i++) {
        sum = prevNum1 + prevNum2;
        prevNum2 = prevNum1;
        prevNum1 = sum;
    }

		return sum;
}

// Do not edit below this line
module.exports = fibonacci;
