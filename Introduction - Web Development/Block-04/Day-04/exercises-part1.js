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