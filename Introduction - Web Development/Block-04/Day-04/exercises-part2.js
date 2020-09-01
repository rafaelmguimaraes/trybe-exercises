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

//3. Create a function that takes one arrayof the integers and returns the index of the lowest value.
// Test array: [2, 4, 6, 7, 10, 0, -3];.
// Expected value in return of function: 6.
function indexOfLowest(array) {
    let lowestValue = array[0];
    let lowestIndex = 0;
    for (let i = 1; i < array.length; i+=1) {
        if (lowestValue > array[i]) {
            lowestValue = array[i];
            lowestIndex = i;
        };
    };
    return lowestIndex;
};

testArray = [2, 4, 6, 7, 10, 0, -3];
console.log(indexOfLowest(testArray));

//4. Create a function that receives one arrayof names and returns the name with the most characters.
// Test array: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Expected value in return of function: Fernanda.

function biggerName(array) {
    let bigger = array[0];
    for (let i in array) {
        if (bigger.length < array[i].length) {
            bigger = array[i];
        };
    };
    return bigger;
};

testArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(biggerName(testArray));

//5. Create a function that receives one array of integers and returns the integer that is more repeated.
//Test array: [2, 3, 2, 5, 8, 2, 3];.
//Expected value in return of function: 2.

function mostFrequently(array) {
    let numberFrequency = 1;
    let numberMostFrequently = array[0];
    for (let i in array) {
        let numberTest = array[i];
        let numberTestFrequency = 0;
        for (let j in array) {
            if (numberTest === array[j]){
                numberTestFrequency+=1;
            };
        };
        if (numberTestFrequency > numberFrequency) {
            numberMostFrequently = numberTest;
            numberFrequency = numberTestFrequency;
        };
    };
    return numberMostFrequently;
};

testArray = [2, 3, 2, 5, 8, 2, 3];
console.log(mostFrequently(testArray));

//6.Create a function that receives an integer N and returns the sum of all numbers from 1 to N.
// Test value: N = 5.
// Expected value in the function return: 1 + 2 + 3 + 4 + 5 = 15 .

function sumOfAllNumbersBefore(number) {
    let sumOfAll = 0;
    for (let i = 1; i <= number; i+=1) {
        sumOfAll += i;
    }

    return sumOfAll;
};
let value = 5;
console.log(sumOfAllNumbersBefore(value));

//7. Create a function that receives one string word and another string ending. Make sure the message string endingis the end of the message string word. Consider that a string ending will always be less than a string word.
// Test value: "trybe" e "be"
// Expected value on function return: true
// verificaFimPalavra("trybe", "be");
// Expected return: true
// verificaFimPalavra("joaofernando", "fernan");
// Expected return: false

function testStringEnd(word, test) {
    for (i = word.length - test.length; i < word.length; i+=1) {
        if (word.charAt(i) != test.charAt(i-word.length+test.length)) {
            return false;
            break;
        };
    };
    return true;
};

console.log(testStringEnd("trybe", "be"));
console.log(testStringEnd("joaofernando", "fernan"));

