const exercise01 = require('./exercise-01');

test("#randomNumberUntil100", () => {
  // testando se a função foi chamada e qual seu retorno
  exercise01.randomNumberUntil100 = jest.fn().mockReturnValue(10);

  exercise01.randomNumberUntil100();
  expect(exercise01.randomNumberUntil100).toHaveBeenCalled();
  expect(exercise01.randomNumberUntil100()).toBe(10);
  expect(exercise01.randomNumberUntil100).toHaveBeenCalledTimes(2);
});