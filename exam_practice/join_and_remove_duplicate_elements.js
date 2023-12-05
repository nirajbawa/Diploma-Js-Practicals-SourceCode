let arr1 = ["niraj", "bava", "niraj"]
let arr2 = ["raj", "ram", "raj"];


function sortAndMarge(arr1, arr2)
{
    let newarr = arr1.concat(arr2);
    let sortarr = new Set(newarr);
    return Array.from(sortarr);
}

console.log(sortAndMarge(arr1, arr2));