const findTheOldest = function(people) {

    let ageArr = [];
    let nameArr = [];

    people.forEach(function(obj) {
        if (obj.yearOfDeath === undefined) {
            obj.yearOfDeath = 2022;
        }
        age = (obj.yearOfDeath - obj.yearOfBirth);
        ageArr.push(age);
        nameArr.push(obj.name);
    })

    let oldest = 0;
    let i = 0;
    let oldestIndex = 0;

    for (i = 0; i < ageArr.length; i++) {
        let currentAge = ageArr[i];
        if (currentAge >= oldest) {
            oldestIndex = i;
            oldest = currentAge;
        }
    }

    return nameArr[i];
};

// Do not edit below this line
module.exports = findTheOldest;
