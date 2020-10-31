const exercise05 = require('./exercise-04');

describe("#Testando função 1 - testUpperCase", () => {
  
  test("#Testando a implementação original, o mock e o mock resetado", () => {
    // implementação original
    expect(exercise05.testUpperCase('XaBLauS')).toBe('XABLAUS');
    
    // criando o mock e substituindo a implementação para caixa baixa
    exercise05.testUpperCase = jest.spyOn( exercise05, "testUpperCase")
      .mockImplementation((word) => word.toLowerCase());

    exercise05.testUpperCase('XaBLauS');

    expect(exercise05.testUpperCase).toHaveBeenCalled();
    expect(exercise05.testUpperCase).toHaveBeenCalledTimes(1);
    expect(exercise05.testUpperCase).toHaveBeenCalledWith('XaBLauS');
    expect(exercise05.testUpperCase('XaBLauS')).toBe('xablaus');

    // resetando o mock
    exercise05.testUpperCase.mockRestore();
    expect(exercise05.testUpperCase('XaBLauS')).toBe('XABLAUS');

  });
  
});