const repeatString = function(string, num) {
    let stringStart = '';
    for (let i=0; i<=num; i++) {
        if (i===0) continue;
        else if (i<0) return("ERROR");
        else {
            stringStart = stringStart.concat(string);
        }
    }
    return stringStart
};

// Do not edit below this line
module.exports = repeatString;
