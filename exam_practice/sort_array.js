//number array
let array = [5, 4, 2, 1];

array.sort();
console.log(array);


let array2 = ["niraj", "bava", "apple"];
// desc
console.log(array2.sort(function(a, b){
    return b-a;
}));
