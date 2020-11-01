const myRemove = require('./exercise-02');

describe('Testes da função MyRemove', () => {
  // SETUP LISTS
  const initialList = [1,2,3,4];
  const expectedListRemove3 = [1,2,4];
  const testListRemove3 = myRemove(initialList,3);
  const testListRemove5 = myRemove(initialList,5);
  
  test('1.Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(testListRemove3).toEqual(expectedListRemove3);
  });

  test('2.Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(testListRemove3).not.toEqual(initialList);
  });

  test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(initialList).toEqual([1,2,3,4]);
  });

  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(initialList).toEqual(testListRemove5);
  });

});

