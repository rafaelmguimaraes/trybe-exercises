// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

let piece = "QUeen";

switch(piece.toLowerCase()) {
    case "king":
      console.log("king-> one square in any direction");
      break;
    case "queen":
        console.log("queen-> diagonally, horizontally, or vertically any number of squares.");
      break;
    case "rook":
        console.log("rook-> horizontally or vertically any number of squares");
        break;
    case "bishop":
        console.log("bishop-> diagonally any number of squares.");
        break;
    case "knight":
        console.log("knight-> in an ‘L’ shape’: two squares in a horizontal or vertical direction");
        break;
    case "pawn":
        console.log("pawn > vertically forward one square");
        break;
    default:
        console.log("Erro. Sorry, I didn't recognize the piece");
  }