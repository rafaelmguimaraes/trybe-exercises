//Faça um programa que retorne o maior de dois números. 
//Defina no começo do programa duas variáveis com os valores que serão comparados.
/* 
let a = 10;
let b = 20;

if (a > b) {
    console.log("A);
  } else if (a < b) {
    console.log("B");
  } else {
    console.log("A=B");
  }; 
  */

  function maiorNumero(a,b) {
    if (a > b) {
      console.log("A");
    } else if (a < b) {
      console.log("B");
    } else {
      console.log("A=B");
    };
  };

  maiorNumero(1,2);
  maiorNumero(3,1);
  maiorNumero(5,5);