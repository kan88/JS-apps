// // метод forEach проходится по массиву один раз, можно использовать только вэлью

// const fruits = ['banana', 'apple', 'lemon', 'orange'];

// fruits.forEach((value, index, array) => {
//   console.log(value);
// });


// // const titles = ['Die hard', 'Terminator'];

// const message = titles.join('. ');

// console.log(message); // 'Die hard. Terminator'

// const titles = ['Die hard', 'Terminator'];

// const message = titles.join();

// console.log(message); // 'Die hard,Terminator'

// const titles = ['Die hard'];

// const message = titles.join('.');

// console.log(message); // 'Die hard', а не 'Die hard.'

// // метод .slice склиевает диапазон если не указать диапазон дойдет до конца

const films = ['Die hard', 'Terminator', 'Kindergarten Cop']; 

console.log(films.slice()); // ['Die hard', 'Terminator']


// .map новый массив из одной пары ключ из объектов

const films = [
    {
      id: 0,
      title: 'Die hard',
    },
    {
      id: 1,
      title: 'Terminator',
    },
  ];
  
  const titles = [];
  
  films.forEach((film, index) => {
    titles[index] = film.title;
  });
  
  console.log(titles); // ["Die hard", "Terminator"];

  const films = [
    {
      id: 0,
      title: 'Die hard',
    },
    {
      id: 1,
      title: 'Terminator',
    },
  ];
  
  const titles = films.map((film) => {
    return film.title;
  });
  
  console.log(titles); // ["Die hard", "Terminator"]

  Метод .concat() используется для склеивания двух и более массивов в один.

первый_массив.concat(второй_массив[, третий_массив])

const ivanFavoriteFilms = ['Die hard', 'Terminator'];
const mariaFavoriteFilms = ['Kindergarten Cop'];

const favoriteFilms = ivanFavoriteFilms.concat(mariaFavoriteFilms);

console.log(favoriteFilms); // ['Die hard', 'Terminator', 'Kindergarten Cop']


Метод массива .reverse() «переворачивает» массив с ног на голову, то есть располагает элементы в том же массиве в обратном порядке. Рассмотрим на примере массива с числами:

const numbers = [0, 1, 2, 3, 4];
const reversedNumbers = numbers.reverse();

console.log(reversedNumbers); // [4, 3, 2, 1, 0]
console.log(numbers); // [4, 3, 2, 1, 0]
// ...
Так как элементы переставляются в исходном массиве, результат работы метода — ссылка на этот исходный массив:

// ...
console.log(numbers === reversedNumbers); // true
Такие методы ещё называют мутирующими, и чтобы избежать неожиданных мутаций, используют метод .slice():

const numbers = [0, 1, 2, 3, 4];
const reversedNumbers = numbers.slice().reverse();

console.log(reversedNumbers); // [4, 3, 2, 1, 0]
console.log(numbers); // [0, 1, 2, 3, 4]
console.log(numbers === reversedNumbers); // false


Метод .find() позволяет решить одну из самых часто возникающих задач при работе с массивами — осуществить поиск элемента. Раз массивы позволяют хранить наборы значений, то рано или поздно может потребоваться найти значение, которое соответствует определённому условию.

Метод .find() как и другие методы аргументом принимает функцию, которая будет вызвана для каждого элемента массива, пока не найдётся элемент, который удовлетворяет условию. Как только такой элемент будет найден, метод .find() прекратит работу и вернёт найденный элемент.

массив.find((текущий_элемент_массива, индекс_текущего_элемента, ссылка_на_весь_массив) => {})
Рассмотрим метод .find() на примере поиска подстроки в массиве:

const titles = ['Die hard', 'Terminator'];

const favoriteFilmTitle = titles.find((title) => title.includes('hard'));

console.log(favoriteFilmTitle); // 'Die hard'
Что за метод .includes()
Свои методы для работы есть не только у массивов, но и у других сущностей в JavaScript, подробнее мы поговорим о них в отдельном разделе курса.

А метод .includes() в данном случае — это метод строк String в JavaScript (title — это элемент массива titles, то есть строка).

.includes() позволяет проверить, содержит ли строка другую строку. Если выражаться академически, мы ищем вхождение подстроки:

'строка'.includes('подстрока')
Например:

'Die hard'.includes('hard'); // true
Это читается как «Содержит ли строка 'Die hard' подстроку 'hard'?» Ответ, очевидно, «Содержит», поэтому результатом вызова метода будет true. Иначе было бы false:

'Terminator'.includes('hard'); // false
Но что вернёт функция, если в массиве есть несколько элементов, удовлетворяющих условию? Ответ прост: первый элемент, который соответствует условию. После этого работа метода будет прервана. А если метод .find() не найдёт ни одного элемента, удовлетворяющего условию, функция вернёт undefined.

findIndex
Метод работает один в один как .find(), только результатом вернёт не найденный элемент, а его индекс в массиве.

массив.findIndex((текущий_элемент_массива, индекс_текущего_элемента, ссылка_на_весь_массив) => {})
Например:

const titles = ['Die hard', 'Terminator'];

const favoriteFilmTitleIndex = titles.findIndex((title) => title.includes('hard'));

console.log(favoriteFilmTitleIndex); // 0