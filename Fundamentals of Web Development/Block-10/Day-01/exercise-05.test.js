const { obj1, obj2, obj3 } = require('./exercise-05');

describe('Testes de comparação entre dois objetos (JSON) para verificar se são idênticos ou não', () => {
  it('Obj1 should be equal Obj2', () => {
    expect(obj1).toEqual(obj2);
  });

  it('Obj1 should be different Obj3', () => {
    expect(() => {expect(obj1).toEqual(obj3)}).toThrow();
  });

  it('Obj2 should be different Obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });

});

