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


//2. Create a function that takes one array of the integers and returns the index of the highest value.
// Test array: [2, 3, 6, 7, 10, 1];.
// Expected value in return of function: 4.
function indexOfHighest(array) {
    let highestValue = array[0];
    let highestIndex = 0;
    for (let i = 1; i < array.length; i+=1) {
        if (highestValue < array[i]) {
            highestValue = array[i];
            highestIndex = i;
        };
    };
    return highestIndex;
};

let testArray = [2, 3, 6, 7, 10, 1];
console.log(indexOfHighest(testArray));