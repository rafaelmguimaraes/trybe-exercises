// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

/* 
let salario = 3500.00;
let valorINSS, valorIR, salarioBase;


//Calculo Imposto INSS
if (salario > 5189.82){
    valorINSS = 570.88;
} else if (salario > 2594.93 && salario <= 5189.82 ) {
    valorINSS = salario * 0.11;
} else if (salario > 1556.95 && salario <= 2,594.92 ) {
    valorINSS = salario * 0.09;
} else  {
    valorINSS = salario * 0.08;
}

salarioBase = salario - valorINSS;

//Calculo Imposto IR
if (salarioBase > 4664.68){
    valorIR = (salarioBase*0.275) - 869.36;
} else if (salarioBase > 3751.06  && salarioBase <= 4664.68 ) {
    valorIR = (salarioBase*0.225) - 636.13;
} else if (salarioBase > 2826.66 && salarioBase < 3751.06 ) {
    valorIR = (salarioBase*0.15) - 354.80;
} else if (salarioBase > 1903.99 && salarioBase < 3751.06 ) {
    valorIR = (salarioBase*0.075) - 142.80;
} else  {
    valorIR = 0;
}

console.log("Salário líquido = " + (salarioBase - valorIR).toString());
console.log("Desconto Trybe = " + (salario*0.17).toString());
console.log("Cai na conta = " + ((salarioBase - valorIR)-(salario*0.17)).toString());
 
*/

function salarioLiquido (salario) {
    let valorINSS, valorIR, salarioBase;

    //Calculo Imposto INSS
    if (salario > 5189.82){
        valorINSS = 570.88;
    } else if (salario > 2594.93 && salario <= 5189.82 ) {
        valorINSS = salario * 0.11;
    } else if (salario > 1556.95 && salario <= 2,594.92 ) {
        valorINSS = salario * 0.09;
    } else  {
        valorINSS = salario * 0.08;
    }

    salarioBase = salario - valorINSS;

    //Calculo Imposto IR
    if (salarioBase > 4664.68){
        valorIR = (salarioBase*0.275) - 869.36;
    } else if (salarioBase > 3751.06  && salarioBase <= 4664.68 ) {
        valorIR = (salarioBase*0.225) - 636.13;
    } else if (salarioBase > 2826.66 && salarioBase < 3751.06 ) {
        valorIR = (salarioBase*0.15) - 354.80;
    } else if (salarioBase > 1903.99 && salarioBase < 3751.06 ) {
        valorIR = (salarioBase*0.075) - 142.80;
    } else  {
        valorIR = 0;
    }

    console.log("Salário líquido = " + (salarioBase - valorIR).toString());
    console.log("Desconto Trybe = " + (salario*0.17).toString());
    console.log("Cai na conta = " + ((salarioBase - valorIR)-(salario*0.17)).toString());
};


salarioLiquido(1500);
salarioLiquido(3500);
salarioLiquido(5500);
salarioLiquido(7000);