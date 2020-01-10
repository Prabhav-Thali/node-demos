var os = require('os');
var calc = require('./Calculator/Calc_module');
var user = require('./user');
var user1 = new user("Abc", 30, "user@mail.com");

console.log("hostname: " + os.hostname());
console.log("OS type: " + os.type());
console.log("Current user home dir: " + os.homedir());

console.log('Sum: ' + calc.sum(10, 19));
console.log('Square: ' + calc.square(8));
var array = [1, 5, 6, 7, 8];
console.log('Sum of array: ' + calc.sumArray(array));
console.log('Average of array: ' + calc.average(array));

console.log('Name of user: ' + user1.getName());
console.log('Age of user: ' + user1.getAge());
console.log('Email of user: ' + user1.getEmail());