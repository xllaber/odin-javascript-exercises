const sumAll = function(min, max) {
    if (max < min) {
        const aux = min;
        min = max;
        max = aux;
    }
    let result = 0;
    for (let i = min; i <= max; i++) {
        result+=i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
