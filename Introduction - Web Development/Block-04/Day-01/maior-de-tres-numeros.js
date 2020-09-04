//Faça um programa que retorne o maior de três números. 
//Defina no começo do programa três variáveis com os valores que serão comparados.

/*
 let a = 10;
let b = 20;
let c = 30;

//Nesse bloco considero a, b e c com valores diferentes

if (a > b && a > c) {
    console.log("A");
  } else if (b > a && b > c) {
    console.log("B");
  } else {
    console.log("C");
  } 
  */

function maiorDeTresNumeros(a,b,c) {
  if (a > b && a > c) {
    console.log("A");
  } else if (b > a && b > c) {
    console.log("B");
  } else {
    console.log("C");
  } 
};

maiorDeTresNumeros(1,2,3);
maiorDeTresNumeros(2,1,3);
maiorDeTresNumeros(2,3,1);
