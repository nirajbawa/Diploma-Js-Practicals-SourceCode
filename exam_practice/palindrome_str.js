function strCheckPalindrome(str) {
    let reverse = str.split("").reverse().join('')
    return reverse===str;
}

const prompt = require('prompt-sync')();

console.log(strCheckPalindrome(prompt("enter string : ")))