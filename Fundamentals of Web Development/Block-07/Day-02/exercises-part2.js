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

// 5.Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do 
// Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: 
// lesson1, lesson2 e lesson3. 
const allLessons = []; 
allLessons.push(Object.assign({}, lesson1));
allLessons.push(Object.assign({}, lesson2));
allLessons.push(Object.assign({}, lesson3));
console.log(allLessons);

// 6.Usando o objeto criado no exercício 5, crie uma função que retorne o número total
//  de estudantes em todas as aulas.
const sumAllStudents = objectLessons => {
    countStudents = 0; 
    for (lesson of objectLessons) { 
        countStudents += lesson['numeroEstudantes'];
    }
    return countStudents;
}
console.log(sumAllStudents(allLessons));


// 7.Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 
// Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const getValueByNumber = (objectLesson,indexProperty) => Object.values(objectLesson)[indexProperty];
console.log(getValueByNumber(lesson1, 0));

// 8.Crie uma função que verifique se o par (chave / valor) existe na função. 
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave 
// e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const verifyPair = (objectLesson, lessonProperty, lessonValue) => objectLesson.hasOwnProperty(lessonProperty) ? objectLesson[lessonProperty] === lessonValue : false;
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
console.log(verifyPair(lesson3, 'xablau', 'bliu'));


/* BONUS */
// 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. 
// Use o objeto criado no exercício 5.

const sumStudentsMathLesson = objectAllLessons => {
    let countStudents = 0;
    for (lesson of objectAllLessons) {
        (lesson['materia'] === 'Matemática') ? countStudents += lesson['numeroEstudantes'] : 0;
    }
    return countStudents;
}

console.log(sumStudentsMathLesson(allLessons));

// 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor 
// ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. 
// Use o objeto criado no exercício 5:

const createReport = (objectAllLessons, teacher) => {
    lessons = [];
    countStudents = 0;
    for (lesson of objectAllLessons) {
        if (lesson['professor'] === teacher) {
            lessons.push(lesson['materia']);
            countStudents += lesson['numeroEstudantes'];
        }
    }
    report = {
        professor: teacher,
        aulas: lessons,
        estudantes: countStudents
    };
    return report;
};

console.log(createReport(allLessons, 'Maria Clara'));