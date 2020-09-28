/* Exercise 02 - part 2 */
// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

// com loop
function longestWord(phrase) {
    const words = phrase.split(' ');
    let longestWord = '';
    for (let index in words) {
        words[index].length > longestWord.length ? longestWord = words[index] : 0;
    }
    return longestWord;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// Arrow Function com método sort()
const longestWordSort = phrase => phrase.split(" ").sort((a, b) => b.length - a.length)[0];
console.log(longestWordSort("Antônio foi no banheiro e não sabemos o que aconteceu"));

// Arrow Function com método reduce()
const longestWordReduce = phrase => phrase.split(" ").reduce((word1, word2) => word2.length > word1.length ? word2 : word1 );
console.log(longestWordReduce("Antônio foi no banheiro e não sabemos o que aconteceu"));