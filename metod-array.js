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


