const promiseSumNumbers = (numbers) => {
  // console.log('promiseSumNumbers: ', numbers);
  return new Promise((resolve, reject) => {
    if (Array.isArray(numbers)) {
      return resolve(numbers.reduce((sum, num) => sum += num));
    } 
    reject(new Error('SUM - O parâmetro não é um array'));
  });
};

const promiseRandomNumbers = (numbers) => {
  // console.log('promiseRandomNumbers: ', numbers);
  return new Promise((resolve, reject) => {
    if (Array.isArray(numbers)) {
      return resolve(numbers.map(num => Math.round(Math.random() * 50) ** 2));
    }
    reject(new Error('RANDOM - O parâmetro não é um array'));
  });
};

const promiseTest = new Promise((resolve, reject) => {
  promiseRandomNumbers(Array(10).fill(1))
    .then((result) => promiseSumNumbers(result))
    .then((result) => {
      if (result < 8000) return resolve(result);
      reject(result);
    })
}).then((result) => promiseSumNumbers([2, 3, 5, 10].map( num => result / num)))
  .then((result) => console.log(`O somatório dessa bagaça é:${result}`)) 
  .catch((result) => console.log(`Deu ${result} Caramba! É mais de oito mil! Essa promise deve estar quebrada!`));
  
  
  const promiseTestAssynAwait = async () => {
    try {
      let result = await promiseRandomNumbers(Array(10).fill(1));
      result = await promiseSumNumbers(result);
      if (result < 8000) {
        result = await promiseSumNumbers([2, 3, 5, 10].map( num => result / num));
        console.log(`O somatório dessa bagaça é:${result}`)
      } else {
        throw new Error(`Deu ${result} Caramba! É mais de oito mil! Essa promise deve estar quebrada!`);
      }

    } catch (error) {
      console.log(error);
    }
  };
  


const fetchJoke = () => {
  const API_URL = 'https://icanhazdadjoke.com/';
  const myObject = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerHTML = data.joke);
};

const init = () => {
  fetchJoke();
  promiseTest;
  promiseTestAssynAwait();
  
};

window.onload = () => init();