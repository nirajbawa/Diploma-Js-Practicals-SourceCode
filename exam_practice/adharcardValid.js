const prompt = require('prompt-sync')();

let str = prompt("enter aadhar no (nnnn.nnnn.nnnn) : ");
let re = /^\d{4}\.\d{4}\.\d{4}$/

console.log(re.test(str));