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
const showlength = lessonObject => Object.keys(lessonObject).length;
console.table(showlength(lesson1));

// 4,Crie uma função para listar os valores de um objeto. 
// Essa função deve receber um objeto como parâmetro.
const showValues = lessonObject => Object.values(lessonObject);
console.table(showValues(lesson1));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do 
// Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: 
// lesson1, lesson2 e lesson3. 
const allLessons = []; 
allLessons.push(Object.assign({}, lesson1));
allLessons.push(Object.assign({}, lesson2));
allLessons.push(Object.assign({}, lesson3));
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total
//  de estudantes em todas as aulas.
const sumAllStudents = objectLessons => {
    countStudents = 0; 
    for (lesson of objectLessons) { 
        countStudents += lesson['numeroEstudantes'];
    }
    return countStudents;
}
console.log(sumAllStudents(allLessons));
