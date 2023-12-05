const prompt = require('prompt-sync')();

const num = parseInt(prompt("number : "));
let proNum = num
let reversNo = 0;

while(proNum>0)
{
    const temp = proNum%10;
    reversNo = reversNo*10+temp;
    proNum = Math.floor(proNum/10)
}

console.log(reversNo)
console.log(num===reversNo?"number is palindrome":"number is not palindrome")