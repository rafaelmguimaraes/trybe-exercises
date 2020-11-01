const exercise03 = require('./exercise-01');

jest.mock('./exercise-01');



test("#randomNumberUntil100 mock com implementação de multiplicação de 3 parâmetros", () => {
  exercise03.randomNumberUntil100.mockImplementation((a, b, c) => a * b * c);
  exercise03.randomNumberUntil100(2, 3, 4);

  expect(exercise03.randomNumberUntil100).toHaveBeenCalled();
  expect(exercise03.randomNumberUntil100).toHaveBeenCalledTimes(1);
  expect(exercise03.randomNumberUntil100).toHaveBeenCalledWith(2, 3, 4);
  expect(exercise03.randomNumberUntil100(2, 3, 4)).toBe(24);

  // resetando o mock
  exercise03.randomNumberUntil100.mockReset()

  exercise03.randomNumberUntil100.mockImplementation(num => num * 2);
  exercise03.randomNumberUntil100(3);

  expect(exercise03.randomNumberUntil100).toHaveBeenCalled();
  expect(exercise03.randomNumberUntil100).toHaveBeenCalledTimes(1);
  expect(exercise03.randomNumberUntil100).toHaveBeenCalledWith(3);
  expect(exercise03.randomNumberUntil100(3)).toBe(6);

});
