const palindromes = function (possiblePalindrome) {
    var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    var spaceRE = /\s+/g;

    possiblePalindrome = possiblePalindrome.replace(punctRE,' ').replace(spaceRE,'');
    possiblePalindrome = possiblePalindrome.toLowerCase();
    
    let stringLength = possiblePalindrome.length;

    if (stringLength % 2 == 0) {
        let stringFirstHalf = possiblePalindrome.substr(0,stringLength/2);
        let tempSecondHalf = possiblePalindrome.substr(stringLength/2);
        let splitString = tempSecondHalf.split("");
        let reverseArray = splitString.reverse();
        let stringSecondHalf = reverseArray.join("");

        return stringFirstHalf === stringSecondHalf;
    }
    else {
        let halfwayPoint = stringLength/2 - 0.5;
        let stringFirstHalf = possiblePalindrome.substr(0,halfwayPoint);
        let tempSecondHalf = possiblePalindrome.substr(halfwayPoint + 1);
        let splitString = tempSecondHalf.split("");
        let reverseArray = splitString.reverse();
        let stringSecondHalf = reverseArray.join("");

        return stringFirstHalf === stringSecondHalf;
    }
};

// Do not edit below this line
module.exports = palindromes;
