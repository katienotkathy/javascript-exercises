const removeFromArray = function(array, ...args) {
    filteredArray = array.filter(x=>!args.includes(x));
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
