const palindromes = function (string) {

    let replace =  [" ", "!", ",", "."]
    let i = 0;
    let newStr = ""

    for (i = 0; i < string.length; i++) {
        let currentChar = string[i];
    if (replace.includes(currentChar)) {
    } else {
        newStr += currentChar;
    }
    }

    let lowercase = newStr.toLowerCase();
    let store = lowercase;
    let toRev = [];

    for (i = 0; i < lowercase.length; i++) {
        let currentChar = lowercase[i];
    toRev.push(currentChar);
    }

    let reversed = toRev.reverse();
    let result = toRev.join("");

    if (store === result) {
        return true;
    }

    return false;

};

// Do not edit below this line
module.exports = palindromes;
