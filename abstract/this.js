//стрелочная функция запоминает контекст где была объявлена и поэтому работает this, с fuction declaration callback это не сработает и будет undefined 

function say () {
    console.log(this.nickname + ' говорит: ' + this.greeting + '.');
  
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


//   function say () {
//     console.log(this.nickname + ' говорит: ' + this.greeting + '.');
  
//     function callback (goodie) {
//       console.log(this.nickname + ' любит: ' + goodie);
//     }
  
//     this.goodies.forEach(callback);
//   }
  
//   const cat = {
//     nickname: 'Кекс',
//     greeting: 'Мяу',
//     goodies: [
//       'Свежую рыбку',
//       'Шнурки хозяйских кроссовок',
//     ],
//     say,
//   };
  
//   cat.say();