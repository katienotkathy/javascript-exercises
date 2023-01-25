const repeatString = function(string, num) {
    let stringStart = '';
    if (num < 0) {
        stringStart = "ERROR";
    }
    for (let i=0; i<=num; i++) {
        if (i===0) continue;
        else {
            stringStart = stringStart.concat(string);
        }
    }
    return stringStart
};

// Do not edit below this line
module.exports = repeatString;
