let obj = [
    {name:"anmit", Makrs:70},
    {name:"sumit", Makrs:78},
    {name:"Abhishek", Makrs:71}
]

let sortobj = obj.sort((a,b)=>a.Makrs-b.Makrs)
console.log(sortobj)

let totals = 0;

for(const o of obj)
{
    totals +=o.Makrs
}

console.log(totals)