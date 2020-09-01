// @Autor: Rafael Machado Guimarães - rafaelmguimaraes@gmail.com
// Exercises Part II - Functions

//1. Create a function that receives one string and returns trueif it is a palindrome , or false, if it is not.
// Example of palindrome: arara .
// verificaPalindrome("arara");
// Expected return: true
// verificaPalindrome("desenvolvimento");
// Expected return: false

function palidrome (word) {
    let reverseWord = ``;
    for (let i=word.length-1; i >= 0 ; i-=1) {
        reverseWord += word.charAt(i);
    }
    return reverseWord === word;
};

console.log(palidrome(`arara`));
console.log(palidrome(`desenvolvimento`));