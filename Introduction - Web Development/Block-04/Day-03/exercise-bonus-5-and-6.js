// @Autor: Rafael Machado Guimarães - rafaelmguimaraes@gmail.com
// Exercises bonus 5 and 6 

//5. Make a pyramid with nbase asterisks that is empty in the middle. Assume that the value of n will always be odd:
// n = 7
//    *
//   * *
//  *   *
// *******

let sideSize = 21;

let posStart = 0;
let size = 0;
//if n is even, pyramid top size 2
if (sideSize%2 === 0) {
    posStart =  (sideSize / 2) -1 ;
    size = 2;
} else { // if n is odd, pyramid top size 1
    posStart = Math.floor(sideSize/2);
    size = 1;
};
for (let i=0; size <= sideSize; i+= 1) {
    let linePrint = ``;
    for (let j = 0; j < sideSize; j += 1) {
        if (j != posStart && j != posStart + size - 1 && size < sideSize) {
            linePrint += ` `;            
        } else {
            linePrint += `*`;
        };
    };
    console.log(linePrint);
    size += 2; // the size increases 1 for each side
    posStart -=1; //the start position moves backwards by 1
        
};


//6. Make a program that says whether a number defined in a variable is prime or not.
// A prime number is a number that is only divisible by 1 and itself, that is, dividing it with any other numbers gives a remainder other than zero.
// Tip: you will need to loop from 0 to the defined number; In addition, you will need to check each iteration and store the results somewhere.

let numberTest = 97;
let amountDivider = 0;

for (let i = 1 ; i <= numberTest; i += 1) {
    if (numberTest%i === 0){
        amountDivider += 1;
    };
};

if (amountDivider === 2) {
    console.log(`${numberTest} is a Prime number!`);
} else {
    console.log(`${numberTest} is NOT a Prime number!`);
}
