const myRemoveWithoutCopy = require('./exercise-03');

describe('Testes da função myRemoveWithoutCopy', () => {
  // SETUP LISTS
  const initialList = [1, 2, 3, 4];
  const expectedListRemove3 = [1, 2, 4];
  const testListRemove3 = myRemoveWithoutCopy(initialList, 3);
  const testListRemove5 = myRemoveWithoutCopy(initialList, 5);

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(testListRemove3).toEqual(expectedListRemove3);
  });

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(testListRemove3).not.toEqual([1, 2, 3, 4]);
  });

  test('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    expect(initialList).toEqual(expectedListRemove3);
  });

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 4], 5) retorna o array esperado', () => {
    expect(initialList).toEqual(testListRemove5);
  });

});
