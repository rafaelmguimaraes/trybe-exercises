const fs = require('fs');

/* 
1. Crie uma função que leia todos os dados do arquivo e imprima cada personagem 
    no formato id - Nome . Por exemplo: 1 - Homer Simpson .
 */
const readSimpsonsJson = async() => {
  try {
    const rawdata = fs.readFileSync('simpsons.json');
    const simpsons = await JSON.parse(rawdata);
    simpsons.forEach(({ id, name }) => console.log(`(${id}) - ${name}`));
  } catch (error) {
    console.log(error);
  }
}
/* Testes */
// readSimpsonsJson();

/* 
2. Crie uma função que receba o id de uma personagem como parâmetro e retorne uma 
    Promise que é resolvida com os dados da personagem que possui o id informado. 
    Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
 */
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

/* Testes */
/* findSimpsonById('5')
  .then(console.log)
  .catch(console.log);

findSimpsonById('11')
  .then(console.log)
  .catch(console.log); */

/* 
3. Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
*/
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
/* Testes */
// whriteSimpsonsJson();

/* 
4. Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, 
    chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
 */
const whriteSimpsonFamilyJson = async() => {
  try {
    const rawdata = fs.readFileSync('simpsons.json');
    const simpsons = await JSON.parse(rawdata);
    fs.writeFileSync('simpsonFamily.json', JSON.stringify(simpsons
      .filter(({ id }) => id === '1' || id === '4' )));
  } catch (error) {
    console.log(error);
  }
}
/* Testes */
//whriteSimpsonFamilyJson();

/* 
5. Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
*/
const addNelsonToSimpsonFamilyJson = async() => {
  try {
    let rawdata = fs.readFileSync('simpsons.json');
    const simpsons = await JSON.parse(rawdata);
    const nelson = simpsons.reduce((nelson, simpson) => simpson.name === 'Nelson Muntz' ? simpson : nelson );
    rawdata = fs.readFileSync('simpsonFamily.json');
    const simpsonFamily = await JSON.parse(rawdata);
    simpsonFamily.push(nelson);
    fs.writeFileSync('simpsonFamily.json', JSON.stringify(simpsonFamily));
  } catch (error) {
    console.log(error);
  }
}
/* Testes */
//addNelsonToSimpsonFamilyJson();

/* 
6. Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson 
    no arquivo simpsonFamily.json .
 */
const tradeNelsonForMaggieOnSimpsonFamilyJson = async() => {
  try {
    let rawdata = fs.readFileSync('simpsons.json');
    const simpsons = await JSON.parse(rawdata);
    const maggie = simpsons.reduce((nelson, simpson) => simpson.name === 'Maggie Simpson' ? simpson : nelson );
    rawdata = fs.readFileSync('simpsonFamily.json');
    const simpsonFamily = await JSON.parse(rawdata);
    const simpsonFamilyWithOutNelson = simpsonFamily.filter(simpson => simpson.name !== 'Nelson Muntz');
    simpsonFamilyWithOutNelson.push(maggie);
    fs.writeFileSync('simpsonFamily.json', JSON.stringify(simpsonFamilyWithOutNelson));
  } catch (error) {
    console.log(error);
  }
}
/* Testes */
tradeNelsonForMaggieOnSimpsonFamilyJson();
