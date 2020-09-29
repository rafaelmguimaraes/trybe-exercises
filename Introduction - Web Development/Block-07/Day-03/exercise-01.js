const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// 1.Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(4, 5),9,'The sum of 4 and 5 should be 9!');
// 2.Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0),0,'The sum of 0 and 0 should be 0!');
// 3.Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
assert.throws(() => {sum(4,'5')},/^Error: parameters must be numbers$/);
// 4.Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")



/* 

assert.equal(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK
assert.deepEqual(person1, person2, 'these two objects are the same');
assert.notDeepEqual(person1, person3, 'these two objects are different');
assert(expected === 3, 'one plus two is three');
assert.ok(expected === 3, 'one plus two is three');
assert.equal(expected, 3, 'one plus two is three');
assert.notEqual(expected, 4, 'one plus two is three (NOT Four!)'); */