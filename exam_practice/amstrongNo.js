function isAmstrong(num)
{
    let strNo = num.toString();
    let  noOfDigit = strNo.length;
    let sum = 0;

    for(let i = 0; i<noOfDigit; i++)
    {
        sum += Math.pow(parseInt(strNo.charAt(i)), noOfDigit)
    }

    return sum===num;
}

console.log(isAmstrong(153))