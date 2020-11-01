const exercise04 = require('./exercise-04');

jest.mock('./exercise-04');


test("# Nova Implementação Função 1 de caixa alta para caixa baixa", () => {
  exercise04.testUpperCase.mockImplementation((word) => word.toLowerCase());
  exercise04.testUpperCase('XaBLauS');

  expect(exercise04.testUpperCase).toHaveBeenCalled();
  expect(exercise04.testUpperCase).toHaveBeenCalledTimes(1);
  expect(exercise04.testUpperCase).toHaveBeenCalledWith('XaBLauS');
  expect(exercise04.testUpperCase('XaBLauS')).toBe('xablaus');
});

test("# Nova Implementação Função 2 de primeira letra para última letra", () => {
  exercise04.testFirstLetter.mockImplementation((word) => word[word.length - 1]);
  exercise04.testFirstLetter('XaBLauS');

  expect(exercise04.testFirstLetter).toHaveBeenCalled();
  expect(exercise04.testFirstLetter).toHaveBeenCalledTimes(1);
  expect(exercise04.testFirstLetter).toHaveBeenCalledWith('XaBLauS');
  expect(exercise04.testFirstLetter('XaBLauS')).toBe('S');
});

test("# Nova Implementação Função 3 de concat 2 para 3 strings", () => {
  exercise04.testConcat.mockImplementation((wordA, wordB, wordC) => wordA + wordB + wordC);
  exercise04.testConcat('XaBLauS', ' Xablives ', 'Xaréus');

  expect(exercise04.testConcat).toHaveBeenCalled();
  expect(exercise04.testConcat).toHaveBeenCalledTimes(1);
  expect(exercise04.testConcat).toHaveBeenCalledWith('XaBLauS', ' Xablives ', 'Xaréus');
  expect(exercise04.testConcat('XaBLauS', ' Xablives ', 'Xaréus')).toBe('XaBLauS Xablives Xaréus');
});