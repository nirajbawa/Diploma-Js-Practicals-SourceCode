const prompt = require('prompt-sync')();

let num1, num2, num3;
num1 = parseInt(prompt("num1 : "))
num2 = parseInt(prompt("num2 : "))
num3 = parseInt(prompt("num3 : "))

if(num1>num2 && num1>num3)
{
    console.log(num1)
}
else if(num2>num1)
{
    console.log(num2)
}
else{
    console.log(num3)
}
