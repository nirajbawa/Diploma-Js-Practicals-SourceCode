const prompt = require('prompt-sync')();

let num = parseInt(prompt("number : "));

let s1 = 0;
let s2 = 1;
let s3;

process.stdout.write(String(s1)+" "+String(s2) + " ")

for(let i = 2; i<num; i++)
{
    s3 = s1+s2;
    process.stdout.write(String(s3) + " ") 
    s1 = s2;
    s2 = s3;

}
