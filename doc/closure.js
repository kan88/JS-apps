//замыкание это функция внутри функции

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

// const addOne = createIncrement(1)

// console.log(addOne(5))

// 6