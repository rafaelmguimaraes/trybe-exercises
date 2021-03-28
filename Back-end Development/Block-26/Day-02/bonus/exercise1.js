const inquirer = require('inquirer');
const fs = require('fs').promises;

const questions = [
  {
    type: 'input',
    name: 'file',
    message: 'Informe o nome do arquivo para leitura:',
    validate: function (value) {
      const pass = value.match(
        /^[\w,\s-]+\.[A-Za-z]{3}$/i
      );
      if (pass) {
        return true;
      }

      return 'Por favor, informe um nome válido e sua extensão.';
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(`\nLendo o arquivo ${answers.file} ...\n`);
  fs.readFile(answers.file, 'utf8')
    .then((content) => {
      console.log(content); 
    })
    .catch(() => {
      console.log('Arquivo inexistente');
      process.exit(1);
    });
});

