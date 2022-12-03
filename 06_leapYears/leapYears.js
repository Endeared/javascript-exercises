const leapYears = function(year) {
    if (year % 2 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    } else if (year % 2 === 0 && year % 100 === 0) {
        return false
    } else if (year % 2 === 0) {
        return true
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
