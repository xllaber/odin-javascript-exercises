const removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach((element)=> {
        if (!args.includes(element)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
