const { getUserName } = require('./exercise-02-03');

describe('Quando o usuário existe', () => {
  test('Retorne o usuário Mark - id = 4', () => {
    expect.assertions(2);
    return getUserName(4).then(name => {
      expect(name).toEqual('Mark');
      expect(name).not.toEqual('Paul');
    });
  });
});

describe('Quando o usuário não existe', () => {
  test('Retorne a mensagem de erro que não existe', () => {
    return getUserName(6).catch(error =>
      expect(error).toEqual({ error: "User with 6 not found." })
    );
  });
});