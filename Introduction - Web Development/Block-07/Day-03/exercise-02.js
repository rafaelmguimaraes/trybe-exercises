const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const expectedList = [1,2,4];
const initialList = [1,2,3,4];
const testListRemove3 = myRemove(initialList,3);
const testListRemove5 = myRemove(initialList,5);
// 1.Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(testListRemove3, expectedList,'The function myRemove do not return the exepected value.');    
// 2.Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(testListRemove3, initialList,'The function myRemove do not return the param list.'); 
// 3.Verifique se o array passado por parâmetro não sofreu alterações
assert.deepStrictEqual(initialList, [1,2,3,4],'The function myRemove modify the param list.');
// 4.Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(initialList, testListRemove5,'The function myRemove should be equal the initial list.');