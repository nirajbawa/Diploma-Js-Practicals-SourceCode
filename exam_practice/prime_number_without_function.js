const prompt = require('prompt-sync')();

let num = parseInt(prompt("enter number : "));

// for(let i = 1; i<=num; i++)
// {
//     if(i%2==0){
//         console.log(i);
//     }
// }

console.log("\n\n prime numbers : \n\n\n")

for(let i = 2; i<=num; i++)
{
    let flag = false;
    for(let j = 2; j<i; j++)
    {
        if(i%j==0)
        {
            flag = true;
            break;
        }
        
    }
    if(!flag)
    {
        console.log(i)
    }
}