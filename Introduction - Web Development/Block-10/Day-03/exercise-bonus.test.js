const bonus = require("./exercise-bonus");

describe('testing fetchJoke implementation', () => {
  bonus.fetchJoke = jest.fn();

  test('when request is successful', () => {
    const resultSuccess = {
      'id': '7h3oGtrOfxc',
      'joke': 'Whiteboards ... are remarkable.',
      'status': 200
    };

    bonus.fetchJoke.mockResolvedValue(resultSuccess);

    bonus.fetchJoke();
    expect(bonus.fetchJoke).toHaveBeenCalled();
    expect(bonus.fetchJoke).toHaveBeenCalledTimes(1);
    expect(bonus.fetchJoke()).resolves.toEqual(resultSuccess);
    expect(bonus.fetchJoke).toHaveBeenCalledTimes(2);


  });




});