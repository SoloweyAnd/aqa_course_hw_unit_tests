/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

const arr = [5, 2, 7, 3, 8, 1, 6];
function findMissingNumber(numbers) {
  const maxNum = Math.max(...numbers);

  let expectNum = 0;
  for (let i = 1; i <= maxNum; i++) {
    expectNum += i;
  }

  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectNum - actualSum;
}

export { findMissingNumber };
