const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


// 1.Crie uma função para adicionar o turno da manhã na lesson2. 
// Essa função deve possuir três parâmetros, sendo eles: 
// o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addProperty = (lessonObject, lessonProperty, lessonValue) => lessonObject[lessonProperty] = lessonValue;
addProperty(lesson2,'turno','manhã');
console.table(lesson2);

// 2.Crie uma função para listar as keys de um objeto. 
// Essa função deve receber um objeto como parâmetro.
const showKeys = lessonObject => Object.keys(lessonObject);
console.table(showKeys(lesson1));

// 3.Crie uma função para mostrar o tamanho de um objeto.

// 4,Crie uma função para listar os valores de um objeto. 
// Essa função deve receber um objeto como parâmetro.