function primeNo(n)
{
    for(let i = 2; i<=n; i++)
    {
        let flag = true
        for(let j = 2; j<=i/2; j++)
        {
            if(i%j==0)
            {
                flag = false
                break
            }
        }
        if(flag)
        {
            console.log(i)
        }
    }
}


console.log("prime numbers : \n\n");
primeNo(10)