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