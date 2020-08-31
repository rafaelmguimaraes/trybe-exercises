// @Autor: Rafael Machado Guimarães - rafaelmguimaraes@gmail.com
// Exercises 1 through 4 


//1. For the first exercise today, make a program that, given nany value , 
//that is n > 1, print on the screen a square made of asterisks on the side of size n. 
//For example:
// n = 5
// *****
// *****
// *****
// *****
// *****

let sideSize = 5;

//mount line
let sideLine = ``;
for (let i=0; i < sideSize; i+= 1) {
    sideLine += `*`;
};
//print n times the line
for (let i=0; i < sideSize; i+= 1) {
    console.log(sideLine);
};


//2. For the second exercise, do the same as before, but print a right triangle with 
// 5base asterisks. For example:
// n = 5
// *
// **
// ***
// ****
// *****

for (let i=0; i < sideSize; i+= 1) {
    let linePrint = ``;
    for (let j = 0; j <= i; j += 1) {
        linePrint += `*`;
    };
    console.log(linePrint);
};

//3. Now invert the side of the triangle. For example:
// n = 5
//     *
//    **
//   ***
//  ****
// *****
//Attention! Note that this exercise is much more complex than the previous one!
//It is not enough to print just asterisks here. You will need logic to print spaces as well.
for (let i=0; i < sideSize; i+= 1) {
    let linePrint = ``;
    for (let j = 0; j < sideSize; j += 1) {
        if (j < (sideSize -i -1)) {
            linePrint += ` `;
        } else {
            linePrint += `*`;
        };
    };
    console.log(linePrint);
};

//5. Then, make a pyramid with nbasic asterisks:
// n = 5
//   *
//  ***
// *****
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
        if (j < posStart || j > posStart + size - 1) {
            linePrint += ` `;
        } else {
            linePrint += `*`;
        };
        
    };
    console.log(linePrint);
    size += 2; // the size increases 1 for each side
    posStart -=1; //the start position moves backwards by 1
        
};