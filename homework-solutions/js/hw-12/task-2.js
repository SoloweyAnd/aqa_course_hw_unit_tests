// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createTodo(todoBody) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(todoBody),
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (response.status !== 201) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    for (let key in todoBody) {
      if (todoBody[key] !== data[key]) {
        throw new Error(`Data mismatch: ${key} is ${data[key]}, expected ${todoBody[key]}`);
      }
    }

    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  } finally {
    console.log('Function execution completed');
  }
}

const body = {
  userId: 756,
  title: 'Hello!',
  completed: false,
};

createTodo(body)
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.log('Error:', error.message);
  });
