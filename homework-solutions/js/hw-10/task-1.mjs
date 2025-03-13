/*
 1. Создайте объект qa с полями name, age, salary и методом getInfo(greetingsWord),
    который будет возвращать строку вида: 
    ${greetingsWord}, my name is ${name}, I'm ${age} and my salary is ${salary}. 
    Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.
*/

let qa;
qa = {
  name: 'Andrei',
  age: 31,
  salary: 1000,
  getInfo(greetingsWord) {
    return `${greetingsWord}, my name is ${this.name}, i'm ${this.age} and my salary is ${this.salary}`;
  },
};

/*
 2. Changing the context
  - Создайте объект anotherQa с полями name, age, salary, значения в которых будут отличны от объекта qa
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода bind()
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода call()
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода apply()
 */

let anotherQa;
anotherQa = {
  name: 'Artem',
  age: 32,
  salary: 2000,
};
// Используйте bind с greetingWord "Hello"
let bindResult;
bindResult = qa.getInfo.bind(anotherQa)('Hello');
// Используйте call с greetingWord "Hi"
let callResult;
callResult = qa.getInfo.call(anotherQa, 'Hi');
// Используйте apply с greetingWord "Hey"
let applyResult;
applyResult = qa.getInfo.apply(anotherQa, ['Hey']);
/*
 3. Closures
  - Создайте функцию createCounter(),
  - Создайте в функции createCounter переменную count, которая будет равна 0
  - Верните из функции createCounter новую функцию
  - В теле новой функции реализуйте увеличение count на + 1 при каждом вызове функции
  - После увеличение каунтера выводите в консоль Function was called ${count} times
  - Создайте переменную functionCallCounter, в которой будет лежать результат createCounter()
  - Вызовите functionCallCounter() 5 раз, убедитесь что в консоли верно выводятся данные
*/

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(`Function was called ${count} times`);
  };
}

const functionCallCounter = createCounter();

functionCallCounter();
functionCallCounter();
functionCallCounter();
functionCallCounter();
functionCallCounter();

export { qa, bindResult, callResult, applyResult, functionCallCounter, anotherQa };
