const inquirer = require('inquirer');

const factorial =  (num) => {
  if (num === 0) return 1; 
  return num * factorial( num - 1 ); 
}



const main = () => {
  const questions = [
    {
      type: 'input',
      name: 'n',
      message: 'Informe um número n:',
      validate: function (value) {
        const valid = !isNaN(parseInt(value, 10)) && Number.isInteger(value);
        return valid || 'Por favor informe um número válido';
      },
      filter: Number,
    },
  ];


  inquirer.prompt(questions).then((answers) => {
    console.log(`O Fatorial de ${answers.n} é ${factorial(answers.n)}`);
  });
};

main();