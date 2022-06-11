function say () {
    console.log(this.nickname + ' говорит: ' + this.greeting + '.');
  
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