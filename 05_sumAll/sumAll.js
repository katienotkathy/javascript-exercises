const sumAll = function(a,b) {
    if (a < 0 | b < 0 | !Number.isInteger(a) | !Number.isInteger(b)) return "ERROR";
    else if (a < b) {
        let sum = 0
        for (let i = a; i <= b; i++) {
            sum = sum += i;
        }
        return sum
    }
    else if (b < a) {
        let sum = 0
        for (let i = b; i <= a; i++) {
            sum = sum += i;
        }
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
