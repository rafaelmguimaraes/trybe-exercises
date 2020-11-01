/* Exercise 01 */
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha.

// function com loop
function fatorial(num) {
    result = 1;
    for (let index = num; index > 0; index -= 1) {
        result *= index;
    }
    return result;    
}

console.log(fatorial(4));

// function com arrow
const fatorialArrow = num => {
    result = 1;
    for (let index = num; index > 0; index -= 1) {
        result *= index;
    }
    return result;    
}

console.log(fatorialArrow(4));

// BONUS - function recursiva 
const fatorialArrowRecursive = num => num > 1 ? num * fatorialArrowRecursive(num-1) : 1;  

console.log(fatorialArrowRecursive(4));