/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false;

  let reversed = word.split('').reverse().join('').toLowerCase();
  return word.toLowerCase() === reversed;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string' || sentence.trim() === '') {
    return [];
  } else {
    let words = sentence.split(' ');
    let maxLength = 0;
    let result = [];

    for (let word of words) {
      if (word.length > maxLength) {
        maxLength = word.length;
        result = [word];
      } else if (word.length === maxLength) {
        result.push(word);
      }
    }

    return result;
  }
}

export { isPalindrom, findLongestWords };
