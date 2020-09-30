// 1.Escreva a função addOne para passar nos testes já implementados.


const assert = require('assert');
// escreva a função addOne aqui
const addOne = list => {
    let resultList = Object.assign([], list);
    for (let index in list) {
        resultList[index] += 1; 
    }
    return resultList;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function','ASSERT 1');
assert.deepStrictEqual(output, expected,'ASSERT 2');
assert.deepStrictEqual(myArray, unchanged,'ASSERT 3');