// @Autor: Rafael Machado Guimarães - rafaelmguimaraes@gmail.com
// Exercises Part I - Objects and For / In

//Using the object below, do the following exercises:
 
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  }; 

//1. Print a welcome message on the console to the character above, including her name.
// Expected value on the console: Bem-vinda, Margarida

console.log(`Welcome, ${info.personagem}`);

//2. Insert a new property in the object with the key name "recurring" and the value "Yes" and then print the object on the console.
//Expected value on the console:
/* {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
   }; 
*/
info.recorrente = `Sim`;
console.log(info);

//3. Make one for/inthat shows all the keys of the object.
//Expected value on the console:
/* 
personagem
origem
nota
recorrente 
*/

for (let key in info) {
    console.log(key);
};

//4. Make a new one for/in, but now show all the key values ​​for the object.
//Expected value on the console:
/* 
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
 */

for (let key in info) {
    console.log(info[key]);
};

//5. Now, define a second object with the same structure (the same keys) as the first and the following values: "Uncle Scrooge", "Christmas on Bear Mountain, Dell's Four Color Comics # 178", "The last MacPatinhas", "Yes" .
//Expected value on the console:
/* 
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
 */
let info2 = {
    personagem: `Tio Patinhas`,
    origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
    nota: `O último MacPatinhas`,
    recorrente: `Sim`,
  }; 

for (let key in info) {
    if (key != `recorrente`) {
        console.log(`${info[key]} e ${info2[key]}`);
    } else {
        if (info[key]===info2[key] && info[key]===`Sim`) {
            console.log(`Ambos recorrentes`);
        }
    }
    
};

