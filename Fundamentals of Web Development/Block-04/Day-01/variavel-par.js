// Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.

let a = 1;
let b = 3;
let c = 0;

console.log((a%2==0||b%2==0||c%2==0));

function ehPar(a,b,c) {
    return (a%2==0||b%2==0||c%2==0);
};

console.log(ehPar(a,b,c));
console.log(ehPar(1,3,9));
console.log(ehPar(2,4,8));
console.log(ehPar(0,4,6));