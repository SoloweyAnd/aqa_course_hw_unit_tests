/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  return [].concat(...arrays);
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const arrWords = sentence.toLowerCase().split(' ');
  let result = arrWords[0];
  for (let i = 1; i < arrWords.length; i++) {
    if (arrWords[i] !== '') {
      result += `_${arrWords[i].charAt(0).toUpperCase()}${arrWords[i].slice(1)}`;
    }
  }
  return result;
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let firstNumb = 0;
  let secondNumb = 1;
  let currentNumb;

  for (let i = 2; i <= n; i++) {
    currentNumb = firstNumb + secondNumb;
    firstNumb = secondNumb;
    secondNumb = currentNumb;
  }

  return currentNumb;
}
console.log(fibonacci(8));

export { mergeArrays, fibonacci, devideBy };
