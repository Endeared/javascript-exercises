const repeatString = function(string, num) {
    let i = 0;
    let newString = string;

    if (num < 0) {
        return "ERROR";
    }

    if (num === 0) {
        return "";
    }

    for (i = 0; i < num - 1; i++) {
        newString += string;
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
