    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que 
// aparecem a letra a maiúscula ou minúscula.

function containsA() {
  return names
        .reduce((sumAllAs, word) => 
            sumAllAs + 
            word.split('')
                .reduce((sumAs, letter) => letter.toUpperCase() === 'A' ? sumAs + 1 : sumAs, 0) 
        ,0);  

}
assert.deepEqual(containsA(), 20);