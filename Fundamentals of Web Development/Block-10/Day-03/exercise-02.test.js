const exercise02 = require('./exercise-01');

jest.mock('./exercise-01');



test("#randomNumberUntil100 mock com implementação de divisão de 2 parâmetros", () => {
  exercise02.randomNumberUntil100.mockImplementation((a, b) => a / b);
  exercise02.randomNumberUntil100(20,5);

  expect(exercise02.randomNumberUntil100).toHaveBeenCalled();
  expect(exercise02.randomNumberUntil100).toHaveBeenCalledTimes(1);
  expect(exercise02.randomNumberUntil100).toHaveBeenCalledWith(20, 5);
  expect(exercise02.randomNumberUntil100(20,5)).toBe(4);
});