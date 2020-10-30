const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
  { name: 'Zangão', age: 1, type: 'Mouse' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.find(animal => animal.name === name);
      if (result) {
        return resolve(result);
      }
      console.log(result);
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
)

const getAnimal = (name) => (
  findAnimalByName(name).then(animal => animal)
)

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui animal com essa idade.' });
    }, 100);
  })
);

const getListAnimals = (age) => (
  findAnimalsByAge(age).then(list => list)
);


module.exports = { 
  getAnimal,
  getListAnimals,
};