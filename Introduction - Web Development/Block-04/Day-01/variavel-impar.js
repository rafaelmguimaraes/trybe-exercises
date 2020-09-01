// Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.

let a = 8;
let b = 9;
let c = 0;

console.log((a%2==1||b%2==1||c%2==1));

function ehImpar(a,b,c) {
    return (a%2==1||b%2==1||c%2==1);
};

console.log(ehImpar(a,b,c));
console.log(ehImpar(1,3,9));
console.log(ehImpar(2,4,8));
console.log(ehImpar(0,4,9));