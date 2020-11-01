/* Função 1: Escreva uma função que vai receber uma string como parâmetro. 
Sua função deverá procurar pela letra x em uma string qualquer que você determinar 
e substituir pela string que você passou como parâmetro. Sua função deve retornar 
essa nova string. 
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!" */

// função normal
function f1(param) {
    return `Tryber ${param} aqui!`;
}

// função Arrow
const f1Arrow = param => `Tryber ${param} aqui! Com Arrow!`;


console.log(f1('XABLAU'));
console.log(f1Arrow('XABLIVES'));



// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
const skills = ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'ANOTHER'];


/* Função 2: Escreva uma função que vai receber a string retornada da Função 1 
como parâmetro. Essa função deve concatenar as skills do array global à string 
que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em 
ordem alfabética. Sua função deve retornar essa nova string. 
Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ...
#goTrybe".
 */

const f2Arrow = resultF1 => `${resultF1} ${skills.sort()}`;

console.log(f2Arrow(f1Arrow('#GOTRYBE')));