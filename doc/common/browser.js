// Поиск элемента по тегу
var list = document.querySelector('ul');

// Поиск последнего элемента из списка
var lastProduct = document.querySelector('li:last-child');

// Поиск элемента по классу
var price = document.querySelector('.price');

// Поиск третьего элемента из списка товаров
var thirdProduct = document.querySelector('.product:nth-child(3)');

// Когда ищем элемент по классу, используем точку
var product = document.querySelector('.product');

// Но когда добавляем класс, точки нет!
product.classList.add('product--sale');

// Из части «Условия» вы знаете, что булевы значения сами могут выступать в качестве условий. Поэтому наша проверка могла бы выглядеть примерно так:

var value = true;

if (value) {
  // Код выполнится
}
// Только в нашем случае проверка должна сработать, если значение свойства isAvailable равно false. Поэтому нужна проверка с отрицанием:

var value = false;

if (!value) {
  // Код выполнится
}