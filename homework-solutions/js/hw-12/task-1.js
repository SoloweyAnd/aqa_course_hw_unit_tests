//1 Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
function delayTwoSeconds(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

delayTwoSeconds(() => {
  console.log('Hello!');
});

//2 Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат его резолва в консоль
const resPromise = new Promise((resolve, reject) => {
  resolve(1);
});
resPromise.then((result) => console.log(result));

//3 Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". Обработайте промис методом .catch и выведите результат его резолва в консоль
const rejPromise = new Promise((resolve, reject) => {
  reject('Promise failed');
});
rejPromise.catch((reject) => console.log(reject));

//4 Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
function promiseNumber(number) {
  return new Promise((resolve, reject) => {
    resolve(number);
  });
}

//5 Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите в консоль результаты работы каждого промиса через .then
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then(([promiseNumber1, promiseNumber2, promiseNumber3]) => {
    console.log(promiseNumber1);
    console.log(promiseNumber2);
    console.log(promiseNumber3);
  })
  .catch((reject) => console.log(reject));

// 6 Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите в консоль статус и результат каждого промиса через .then
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then(([promiseNumber1, promiseNumber2, promiseNumber3]) => {
    console.log(promiseNumber1);
    console.log(promiseNumber2);
    console.log(promiseNumber3);
  })
  .catch((rej) => console.log(rej));

// 7 Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function allPromises() {
  try {
    const [promiseNumber1, promiseNumber2, promiseNumber3] = await Promise.all([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
    ]);

    console.log(promiseNumber1);
    console.log(promiseNumber2);
    console.log(promiseNumber3);
  } catch (error) {
    console.log(error);
  }
}

async function allSetPromises() {
  try {
    const [promiseNumber1, promiseNumber2, promiseNumber3] = await Promise.allSettled([
      promiseNumber(1),
      promiseNumber(2),
      promiseNumber(3),
    ]);

    console.log(promiseNumber1);
    console.log(promiseNumber2);
    console.log(promiseNumber3);
  } catch (error) {
    console.log(error);
  }
}
