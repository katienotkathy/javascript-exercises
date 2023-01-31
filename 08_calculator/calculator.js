const add = function(x,y) {
  return x + y;
	
};

const subtract = function(x,y) {
  return x-y;
};

const sum = function(arrayToSum) {
	if (arrayToSum.length == 0) return 0;
  else {
    let sum = 0;
    arrayToSum.forEach(item => {
      sum += item;
    })
    return sum;
  }
};

const multiply = function(arrayToMultiply) {
    let product = 1;
    arrayToMultiply.forEach(item => {
      product *= item;
    })
    return product;
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(x) {
	if (x===0) return 1;
  else {
    let result = 1;
    for (let i = 1; i <= x; i++) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
