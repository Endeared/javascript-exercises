const sumAll = function(num1, num2) {
    let runningSum = 0;
    let i = 0;
    let max = 0;
    let min = 0;

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return 'ERROR'
    }

    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }

    if (num1 >= num2) {
        max = num1;
        min = num2;
    } else {
        max = num2;
        min = num1;
    }

    for (i = min; i <= max; i++) {
        runningSum += i;
    }

    return runningSum;
};

// Do not edit below this line
module.exports = sumAll;
