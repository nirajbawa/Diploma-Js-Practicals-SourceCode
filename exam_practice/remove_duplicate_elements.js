let array = ["niraj", "bava", "raj", "niraj"];

let newArray = [];
array.forEach((val)=>{
    if(newArray.indexOf(val)===-1)
    {
        newArray.push(val);
    } 
}) 

console.log(newArray)