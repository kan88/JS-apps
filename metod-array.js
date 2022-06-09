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