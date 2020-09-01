//Faça um programa que defina três variáveis com os valores dos três 
//ângulos internos de um triângulo. Retorne true se os ângulos 
//representarem os ângulos de um triângulo e false caso contrário.

/* 
let anguloA = 80;
let anguloB = 55;
let anguloC = 45;


console.log(anguloA + anguloB + anguloC == 180);

 */

 function ehTriangulo(a,b,c) {
    return (a + b + c === 180);
 };

 console.log(ehTriangulo(80,55,45));
 console.log(ehTriangulo(90,45,45));
 console.log(ehTriangulo(70,62,45));