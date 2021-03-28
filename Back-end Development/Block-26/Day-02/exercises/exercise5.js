/* 
5.Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
  1. Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
  2. Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] 
  Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual 
  a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
  3.Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, 
  armazene essa informação e escreva em um arquivo chamado fileAll.txt . 
  O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!! . */

  const fs = require('fs').promises;

  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const myFunction = (arrayOfStrings) => {
    const listOfWrites = [];
    arrayOfStrings.forEach((element, index) => {
      listOfWrites.push(fs.writeFile(`./file${index + 1}.txt`, element));
    });

    Promise.all(listOfWrites)
    .then(([...files]) => {
      console.log(`${files.length} arquivos foram criados.`);
    })
    .catch((err) => {
      console.error(`Erro ao criar os arquivos: ${err.message}`);
    });

    const listOfReads = [];
    for(let index = 0; index < arrayOfStrings.length; index += 1) {
      listOfReads.push(fs.readFile(`./file${index + 1}.txt`, 'utf8'));
    };


    let joinedContent = '';

    Promise.all(listOfReads)
      .then(([...files]) => {
        console.log(`${files.length} arquivos foram lidos.`);
        console.log(files);
        files.forEach(content => joinedContent += `${content} `);
        fs.writeFile('./fileAll.txt', joinedContent)
          .then(() => console.log('Arquivo fileAll.txt criado com sucesso!'));
      })
      .catch((err) => {
        console.error(`Erro ao criar os arquivos: ${err.message}`);
      });

  };

  myFunction(strings);
