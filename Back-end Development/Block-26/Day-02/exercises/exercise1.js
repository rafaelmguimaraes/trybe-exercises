const myFunction = (...args) => {
  return new Promise((resolve, reject) => {
    if (args.some(arg => typeof arg !== 'number')) {
      reject('Informe apenas números');
    }
    const [a, b, c] = args;
    const result = (a + b) * c;
    result < 50
      ? reject('Valor muito baixo')
      : resolve(result);
  });
};

module.exports = { myFunction };

/* myFunction(1, 1, 3)
  .then(console.log)
  .catch(console.log);

myFunction(30, 20, 10)
  .then(console.log)
  .catch(console.log);

myFunction(10,'20',30)
  .then(console.log)
  .catch(console.log); */
