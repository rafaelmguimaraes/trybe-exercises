const { getListAnimals } = require('./exercise-06');

describe('Quando existe animal de determinada idade', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(2);
    return getListAnimals(1).then(listAges1 => {
      expect(listAges1[0].name).toEqual('Dorminhoco');
      expect(listAges1[1].name).toEqual('Zangão');
    });
  });
});

describe('Quando não existe animal de determinada idade', () => {
  test('Retorne a lista de animais', () => {
    return getListAnimals(3).catch(error =>
      expect(error).toEqual({ error: "Não possui animal com essa idade." })
    );
  });
});