const fs = require('fs');

const readSimpsonsJson = async() => {
  try {
    const rawdata = fs.readFileSync('simpsons.json');
    const simpsons = await JSON.parse(rawdata);
    simpsons.forEach(({ id, name }) => console.log(`(${id}) - ${name}`));
  } catch (error) {
    console.log(error);
  }
}
readSimpsonsJson();

const findSimpsonById = (id) => { 
  return new Promise(async (resolve, reject) => {
    try {
      const rawdata = fs.readFileSync('simpsons.json');
      const simpsons = await JSON.parse(rawdata);
      Object.prototype.hasOwnProperty.call(simpsons, id) 
        ? resolve(simpsons[id])
        : reject("id não encontrado"); 
    } catch (error) {
      console.log(error);
      reject(error.message);
    }
  });
};

findSimpsonById('5')
  .then(console.log)
  .catch(console.log);

findSimpsonById('11')
  .then(console.log)
  .catch(console.log);

const whriteSimpsonsJson = async() => {
  try {
    const rawdata = fs.readFileSync('simpsons.json');
    const simpsons = await JSON.parse(rawdata);
    fs.writeFileSync('simpsons2.json', JSON.stringify(simpsons
      .filter(({ id }) => id !== '6' && id !== '10' )));
  } catch (error) {
    console.log(error);
  }
}
whriteSimpsonsJson();