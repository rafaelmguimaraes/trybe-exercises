const readlineSync = require('readline-sync');

const welcomeMessage = () => console.log('Bem Vindo ao Calculador de IMC!\n');



const calcBMI = () => {
  const messageError = 'Desculpa, $<lastInput> não é um valor válido.';
  console.log('Por favor, informe teus dados.');
  const weight = readlineSync.questionFloat('Peso: ', {limitMessage: messageError});
  const height = readlineSync.questionFloat('Altura: ', {limitMessage: messageError});
  const bmi = (weight / Math.pow(height, 2)).toFixed(2);
  console.log('Seu IMC é %s \n', bmi);
  return bmi;
};

const showObesityInfo = (bmi) => {
  if (bmi < 18.5) {
    console.log('Abaixo do peso (magreza)');
  } else if (bmi < 24.9) {
    console.log('Peso normal');
  } else if (bmi < 29.9) {
    console.log('Acima do peso (sobrepeso)');
  } else if (bmi < 34.9) {
    console.log('Obesidade grau I');
  } else if (bmi < 39.9) {
    console.log('Obesidade grau II');
  } else {
    console.log('Obesidade graus III e IV');
  }
};
 

const main = () => {
  welcomeMessage();
  showObesityInfo(calcBMI());
};

main();
