// @Autor: Rafael Machado Guimarães - rafaelmguimaraes@gmail.com
// Exercises bonus

// Bubble Sort
// for (let i = 1; i < array.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (array[i] < array[j]) {
//         let position = array[i];
  
//         array[i] = array[j];
//         array[j] = position;
//       }
//     }
//   }



//1. Sort the array numbersin ascending order and print its values;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(`Array numbers without order: ${numbers}`);
for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] < numbers[j]) {
        let position = numbers[i];
  
        numbers[i] = numbers[j];
        numbers[j] = position;
      }
    }
  }
console.log(`Array numbers ascending order by Bubble Sort: ${numbers}`);


//2. Order the array numbersin descending order and print its values;
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(`Array numbers unorder: ${numbers}`);
for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
        if (numbers[i] > numbers[j]) {
        let position = numbers[i];

        numbers[i] = numbers[j];
        numbers[j] = position;
        }
    }
}

console.log(`Array numbers descending order by Bubble Sort: ${numbers}`);

//3. Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
newNumbers = [];
for (let i = 0; i < numbers.length; i+=1) {
    if (i < numbers.length -1) {
        newNumbers[i] = numbers[i] * numbers[i+1];
    } else {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log(`Array newNumbers created: ${newNumbers}`);