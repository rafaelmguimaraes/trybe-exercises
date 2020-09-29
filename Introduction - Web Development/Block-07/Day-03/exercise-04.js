const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
//SETUP
const testFizzBuzz15 = myFizzBuzz(15);
const testFizzBuzz09 = myFizzBuzz(9);
const testFizzBuzz10 = myFizzBuzz(10);
const testFizzBuzz11 = myFizzBuzz(11);
const testFizzBuzzWord = myFizzBuzz('Word');

// 1.Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.strictEqual(testFizzBuzz15,'fizzbuzz', 'The function myFizzBuzz should return fizzbuzz with value 15.');
// 2.Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.strictEqual(testFizzBuzz09,'fizz', 'The function myFizzBuzz should return fizz with value 9.');
// 3.Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.strictEqual(testFizzBuzz10,'buzz', 'The function myFizzBuzz should return buzz with value 10.');
// 4.Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
assert.strictEqual(testFizzBuzz11,11, 'The function myFizzBuzz should return 11 with value 11.');
// 5.Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
assert.strictEqual(testFizzBuzzWord,false, 'The function myFizzBuzz should return false with value \'Word\'.');