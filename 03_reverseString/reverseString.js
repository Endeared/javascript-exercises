const reverseString = function(string) {
    let strings = string.split(" ");
    let reversedOrder = strings.reverse();
    let newArr = [];

    for (let i = 0; i < strings.length; i++) {
        let currentStr = reversedOrder[i];
        letters = currentStr.split("");
        let reversedLetters = letters.reverse();
        let resultStr = reversedLetters.join("");
        newArr.push(resultStr);
    }

    let final = newArr.join(" ");
    return final;
};

// Do not edit below this line
module.exports = reverseString;
