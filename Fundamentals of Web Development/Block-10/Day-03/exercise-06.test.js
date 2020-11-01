const exercise06 = require("./exercise-06");

describe('testing fetchDog implementation', () => {
  exercise06.fetchDog = jest.fn();

  afterEach(() => {
    exercise06.fetchDog.mockReset();
  });

  test('when request is successful', () => {
    exercise06.fetchDog.mockResolvedValue('request success');

    expect(exercise06.fetchDog()).resolves.toBe('request success');
    expect(exercise06.fetchDog).toHaveBeenCalledTimes(1);

    exercise06.fetchDog();
    expect(exercise06.fetchDog).toHaveBeenCalledTimes(2);
  });

  test('when request is failed', () => {
    exercise06.fetchDog.mockRejectedValue('request failed');

    expect(exercise06.fetchDog()).rejects.toBe('request failed');
    expect(exercise06.fetchDog).toHaveBeenCalledTimes(1);
  });

}); 