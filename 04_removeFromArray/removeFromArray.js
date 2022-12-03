const removeFromArray = function() {
    let i = 0;
    let j = 0;
    let foundVals = [];
    let inputs = [];
    let args = arguments[0];



    for (i = 1; i < arguments.length; i++) {
        let currentArg = arguments[i];
        inputs.push(currentArg);
    }

    for (j = 0; j < inputs.length; j++) {
        let currentInput = inputs[j];
        for (i = 0; i < args.length; i++) {
            let currentVal = args[i];
            if (currentInput === currentVal) {
                foundVals.push(args.indexOf(currentVal));
            }
        }
    }

    function compareNumbers(a, b) {
    return a - b;
    }

    foundVals.sort(compareNumbers);

    for (i = foundVals.length - 1; i > -1; i--) {
            args.splice(foundVals[i],1);
    }

    return args;
};


// Do not edit below this line
module.exports = removeFromArray;
