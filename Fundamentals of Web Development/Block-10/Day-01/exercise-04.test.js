const myFizzBuzz = require('./exercise-04');

describe('Testes da função myFizzBuzz', () => {
  //SETUP
  const testFizzBuzz15 = myFizzBuzz(15);
  const testFizzBuzz09 = myFizzBuzz(9);
  const testFizzBuzz10 = myFizzBuzz(10);
  const testFizzBuzz11 = myFizzBuzz(11);
  const testFizzBuzzWord = myFizzBuzz('Word');

  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(testFizzBuzz15).toMatch(/fizzbuzz/);
  });

  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(testFizzBuzz09).toMatch(/fizz/);
  });

  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(testFizzBuzz10).toMatch(/buzz/);
  });

  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(testFizzBuzz11).toBe(11);
  });

  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(testFizzBuzzWord).toBeFalsy();
  });

});
