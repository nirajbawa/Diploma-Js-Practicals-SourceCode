const prompt = require('prompt-sync')();


let a, b;
console.log("select option : 1 : +, 2 : -, 3: *, 4:/, 5:%")
let option = parseInt(prompt("enter option : "))
a = parseInt(prompt("num1 : "))
b = parseInt(prompt("num2 : "))


switch(option)
{
    case 1:
        console.log(a+b);
        break;
    case 2:
        console.log(a-b);
        break;
    case 3:
        console.log(a*b);
        break;
    case 4:
        console.log(a/b);
        break
    case 5:
        console.log(a%b);
        break
    default:
        console.log("invalid option")
}

