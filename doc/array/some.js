// возвращает если что-то имеет тру


const task = {
    repeating: {
mon: false,
thu: false,
wen: false,
}
}

const isTaskRepeating = (repeating) => {

    const values = Object.values(repeating)

   return  values.some((item) => item === true)
}

// вернет массив false false false

// мотед every протовиположный

// predicat: return true or false

const numbers = [1, 4, 10, 5];

const isExistsOverFive = numbers.some((value) => {
  return value > 5; // Проверяем каждый элемент, больше ли он, чем 5
}); // Когда some дойдёт до 10, то прекратит работу и вернёт true

const isExistsOverTwenty = numbers.some((value) => {
  return value > 20; // Проверяем каждый элемент, больше ли он, чем 20
}); // some пройдёт все элементы, они все меньше 20, поэтому some вернёт false

// У метода .some() есть одна особенность. Если вызвать его на пустом массиве, то результатом всегда будет false вне зависимости от условия:

const result = [].some(() => {
  return 1 === 1;
}); // так как массив пустой, some вернёт false