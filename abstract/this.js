// контекст определяет в момент вызова функции

function getInfo () {
  return this.name + ' ' + this.age
}

const person = {
    name: 'Evgeny',
    age: 33,
    info: getInfo,
    };

const person2 = {
    name: 'Elena',
    age: 30,
    info: getInfo,
    };

console.log(person.info());
console.log(person2.info())


//   "Evgeny 33"
//   "Elena 30"

const getInfo = () => {
  return this.name + ' ' + this.age
}

const person = {
    name: 'Evgeny',
    age: 33,
    info: getInfo,
    };

const person2 = {
    name: 'Elena',
    age: 30,
    info: getInfo,
    };

console.log(person.info());
console.log(person2.info())

//   "CodePen undefined"
// "CodePen undefined"

const person = {
  name: 'Evgeny',
  age: 33,
  info: function () {
    return this.name
  }
  };

console.log(person.info());

//Evgeny

//стрелочная функция запоминает контекст где была объявлена и поэтому работает this, 
// с fuction declaration callback это не сработает и будет undefined 

function say () {
  //выводит кекс говорит мяу
    console.log(this.nickname + ' говорит: ' + this.greeting + '.');
  
//сначала мы создаем колбэк с параметром, а потом объявляем контекст в виде массива в качестве аргументов для колбэка

    const callback = (goodie) => {
      console.log(this.nickname + ' любит: ' + goodie);
    };
  
    this.goodies.forEach(callback);
  }
  
  const cat = {
    nickname: 'Кекс',
    greeting: 'Мяу',
    goodies: [
      'Свежую рыбку',
      'Шнурки хозяйских кроссовок',
    ],
    say,
  };
  
  cat.say();
  // "Кекс говорит: Мяу."
  // "Кекс любит: Свежую рыбку"
  // "Кекс любит: Шнурки хозяйских кроссовок"



  function say () {
    console.log(this.nickname + ' говорит: ' + this.greeting + '.');
  
    //стрелочная функция выше запомнила контекст где была объявлена, а фанкшн декларейшн в момент вызова не имела контекста
    function callback (goodie) {
      console.log(this.nickname + ' любит: ' + goodie);
    }
  
    this.goodies.forEach(callback);
  }
  
  const cat = {
    nickname: 'Кекс',
    greeting: 'Мяу',
    goodies: [
      'Свежую рыбку',
      'Шнурки хозяйских кроссовок',
    ],
    say,
  };
  
  cat.say();

//   "Кекс говорит: Мяу."
// "undefined любит: Свежую рыбку"
// "undefined любит: Шнурки хозяйских кроссовок"