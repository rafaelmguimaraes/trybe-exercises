function testUpperCase (word) { 
  return word.toUpperCase(); 
};

function testFirstLetter (word) { 
  return word[0]; 
};

function testConcat (wordA, wordB) { 
  return wordA + wordB;
};

console.log(testUpperCase('XaBLauS'));


module.exports = {
  testUpperCase,
  testFirstLetter,
  testConcat,
};