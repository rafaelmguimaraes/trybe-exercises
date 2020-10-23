const fetch = require('node-fetch');

async function getBrazilUFs() {
  const estados = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then((ufs) => ufs.json())
    .catch((err) => err);
  console.log(estados.map(({sigla, nome}) => `${sigla} - ${nome}`));
}

getBrazilUFs();

