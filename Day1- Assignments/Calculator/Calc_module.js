function sum(num1, num2) {
    return num1 + num2;
}

function square(num) {
    return num * num;
}

function average(array) {
    let sum = array.reduce((previous, current) => current += previous);
    return sum / array.length;
}

function sumArray(array) {
    return array.reduce((previous, current) => current += previous);
}


module.exports.average = average;
module.exports.sum = sum;
module.exports.square = square;
module.exports.sumArray = sumArray;