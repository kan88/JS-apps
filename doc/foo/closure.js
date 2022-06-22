//замыкание это функция внутри функции. не важно фанкшн декларейшн или стрелочная функция. Стрелочная функция разница только контекст

function createCalcFunction(n) {
    return function() {
      return 1000 * n
    }
}

const calc = createCalcFunction(42);
console.log(calc());

42000

//при простом вызове функции createCalcFunction(42) выдаст нам внутреннюю функцию
// если запишем в переменную и вызовем тогда внутрянняя функция отработает

// function createIncrement (incrementor) {
//     return function(n) {
//         return n + incrementor
//     }
// }

const addOne = createIncrement(1)

console.log(addOne(5))

6

// 1. нам нужна функция которая будет подставлять www и .ru

const getDomain = function(a, b) {
  return function(name) {
      return a + name + b
  }
} 

const ruDomain = getDomain('www.', '.ru');
const comDomain = getDomain('www.', '.com');

console.log(ruDomain('belka'));
console.log(comDomain('belka'));


