// 3. Escreva a função addAllnumbers para passar nos testes já implementados.
const assert = require('assert');
// escreva a função addAllnumbers aqui
const addAllnumbers = numbers => {
    sumOfNumbers = 0;
    for (let number of numbers) {
        sumOfNumbers += number;
    }
    return sumOfNumbers;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);