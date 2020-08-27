// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

let valorCusto = 100;
let valorVenda = 150;

if (valorCusto <= 0 || valorVenda <=0)
{
    console.log("Os valores de custo e/ou venda devem ser maior que 0.")
} else {
    let lucroMil = (valorVenda-(valorCusto*1.2))* 1000; 
    console.log("Lucro da empresa = "+lucroMil.toString());
}
