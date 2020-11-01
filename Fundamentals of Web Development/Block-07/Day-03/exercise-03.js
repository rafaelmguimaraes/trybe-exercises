const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
// SETUP LISTS
const initialList = [1,2,3,4];
const expectedListRemove3 = [1,2,4];
const testListRemove3 = myRemoveWithoutCopy(initialList,3);
const testListRemove5 = myRemoveWithoutCopy(initialList,5);
// 1.Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(testListRemove3, expectedListRemove3,'The function myRemoveWithoutCopy do not return the exepected value.'); 
// 2.Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(testListRemove3, [1,2,3,4],'The function myRemoveWithoutCopy return the same initial list.');
// 3.Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
assert.deepStrictEqual(initialList, expectedListRemove3,'The function myRemoveWithoutCopy not modify the initial list.');
// 4.Verifique se a chamada myRemoveWithoutCopy([1, 2, 4], 5) retorna o array esperado
assert.deepStrictEqual(initialList, testListRemove5,'The function myRemoveWithoutCopy should be equal the initial list.');
