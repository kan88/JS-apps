// Мяу! Ты доказал, что можешь писать код и решать задачи. Пора переходить из стажёров в джуниоры!

// Только не расслабляйся, работы много. Нужно оживлять интерфейсы и добавлять взаимодействие с пользователем.

// Запрограммируй всплывающее окно с контактами компании. Тебе нужен элемент с классом modal.

// При клике по кнопке с классом button-open попапу должен добавляться класс modal--show, так окно появится на странице.

// По клику по кнопке с классом button-close у окна должен удаляться класс modal--show, и попап должен закрыться.

// Ещё попап должен закрываться, если пользователь нажал клавишу ESC, пока окно было открыто.

// Приступай к работе.

var popup = document.querySelector('.modal');
var openPopupButton = document.querySelector('.button-open');
var closePopupButton = popup.querySelector('.button-close');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal--show');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('modal--show');
  }
});
//если несколько кнопок используем цикл for of

let tooltip = document.querySelector('.tooltip');
let closeButton = document.querySelector('.close-button');
let tooltipButtons = document.querySelectorAll('.tooltip-button');
let tooltipText = document.querySelector('.tooltip-text');



closeButton.onclick = function () {
  tooltip.classList.remove('opened');
};

for (let tooltipButton of tooltipButtons) {
  tooltipButton.onclick = function () {
  tooltipText.textContent = tooltipButton.dataset.tooltipText;
  tooltip.classList.add('opened');
};
}
