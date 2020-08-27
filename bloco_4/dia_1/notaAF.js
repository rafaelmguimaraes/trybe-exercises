// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 65;

if (nota > 100 && nota < 0){
    console.log("Erro.")
} else {
    switch(Math.floor(nota/10)) {
        case 10:
        case 9:
        console.log ("A");
        break;
        case 8:
            console.log ("B");
        break;
        case 7:
            console.log ("C");
        break;
        case 6:
            console.log ("D");
        break;
        case 5:
            console.log ("E");
        break;
        default:
            console.log ("F");
    }
}