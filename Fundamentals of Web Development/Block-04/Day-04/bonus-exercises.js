// @Autor: Rafael Machado Guimarães - rafaelmguimaraes@gmail.com
// Bonus

//1. (Difficult) Make a program that receives a string in Roman numerals and returns the number that the string represents.
// Attention! This exercise has already appeared in the selection process of a large multinational!
// Tips:
// A string is an array of characters, so each element of the array is a letter.
// The value of each Roman numeral is:
// Copy
//      | I   | 1    |
//      | --- | ---- |
//      | IV  | 4    |
//      | V   | 5    |
//      | IX  | 9    |
//      | X   | 10   |
//      | XL  | 40   |
//      | L   | 50   |
//      | XC  | 90   |
//      | C   | 100  |
//      | CD  | 400  |
//      | D   | 500  |
//      | CM  | 900  |
//      | M   | 1000 |
// How about creating an object that associates each letter with a numeral for easy reference?
// Attention! When you have a small number to the right of a large number, they must be added together. Example: XI = 10 + 1 = 11. However, if the small number is to the left of a number greater than it, it must be subtracted. Example: IX = 10 - 1 = 9.

function letterRomanValue(letter) {
    switch (letter.toUpperCase()) {
        case `I`: 
            return 1;
            break;
        case `V`: 
            return 5;
            break;
        case `X`: 
            return 10;
            break;
        case `L`: 
            return 50;
            break;
        case `C`: 
            return 100;
            break;
        case `D`: 
            return 500;
            break;
        case `M`: 
            return 1000;
            break;
    };
};

function romanNumeral(romanNum) {
    let valueRomanNum = 0;
    for (i = 0; i < romanNum.length; i+=1 ) {
        if(i < romanNum.length - 1 && letterRomanValue(romanNum.charAt(i)) < letterRomanValue(romanNum.charAt(i+1))) {
            valueRomanNum+= (letterRomanValue(romanNum.charAt(i+1))-letterRomanValue(romanNum.charAt(i)));
            i+=1;
        } else {
            valueRomanNum+= letterRomanValue(romanNum.charAt(i));
        };
    };
    return valueRomanNum;
};

console.log(`IV in numeral is ${romanNumeral('iv')}`);
console.log(`V in numeral is ${romanNumeral('v')}`);
console.log(`IX in numeral is ${romanNumeral('ix')}`);
console.log(`III in numeral is ${romanNumeral('iii')}`);
console.log(`MCMXCIV in numeral is ${romanNumeral('MCMXCIV')}`);







// For the next exercise you will need to have an account at CodeWars, to understand how to do it access this the content we did about it. After following the registration steps, access the proposed challenge and then click on TRAIN, you will then be redirected to the page where the challenge should be done. When you have finished the exercise, click on TESTto check, with simple tests, if your solution satisfies what was requested. Passing these tests click on ATTEMPT, when doing this your code will go through all the existing tests to validate the solution. If your solution is correct, the buttonSUBMIT will be available, click on it to submit your answer, otherwise go back to your code and see what is still not satisfying what is requested, repeat this process until your solution is correct.
// Challenge - 16 + 8 = 214 ;
// This challenge will require a little knowledge about some métodosof the JavaScript, so do some research when necessary and if you have any questions ask for help on Slack. Doubts on how to do a good research? Smoothly! Access this content on how to search as a developer .

function add(num1, num2) {
    let numStr1 = num1.toString();
    let numStr2 = num2.toString();
    let resultStr = '';
    
    if (numStr1.length !== numStr2.length) {
      if (numStr1.length > numStr2.length) {
        numStr2 = `0`.repeat(numStr1.length - numStr2.length) + numStr2;
      } else {
        numStr1 = `0`.repeat(numStr2.length - numStr1.length) + numStr1;
      };
    }; 
    
    for (let i = 0; i < numStr1.length; i+=1) {
      resultStr +=  (parseInt(numStr1.charAt(i)) + parseInt(numStr2.charAt(i))).toString();  
    }
    
    
    return parseInt(resultStr);
  };

  console.log(add(16,8));