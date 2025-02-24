/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
const vowelsList = 'AEIOUaeiou';
const consonantsList = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz';
let vowelsAndConsonantsResult = '';
let wowQuan = 0;
let consQuan = 0;

for (let i = 0; i < word.length; i++) {
  if (vowelsList.includes(word[i])) {
    wowQuan += 1;
  } else if (consonantsList.includes(word[i])) {
    consQuan += 1;
  }
}

vowelsAndConsonantsResult = `${word} contains ${wowQuan} vowels and ${consQuan} consonants`;
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
