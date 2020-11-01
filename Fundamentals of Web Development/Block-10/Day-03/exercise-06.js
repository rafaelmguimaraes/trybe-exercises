const fetch = require('node-fetch');

const fetchDog = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const json = await response.json();
  return json;
}

module.exports = fetchDog; 