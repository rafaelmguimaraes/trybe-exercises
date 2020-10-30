const uppercase = require('./exercise-01');

describe('Testes da função uppercase', () => {
  
  test('Testando uppercase, deve mostrar xablau em maiúsculo', done => {
    uppercase('xablau', (result) => {
      expect(result).toBe('XABLAU');
      done();
    });
  })

});