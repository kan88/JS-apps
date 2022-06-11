// порядок ключей в объекте в разных браузерах может выдаваться хаотично, чтобы добиться
// порядка можно объявить массив ключей

const person = {
    name: 'Kan',
    age: 33,
    weigth: 60,
    }
    
    console.log(person)
    
    const arrayOrder = [
      'name', 'weigth', 'age'
    ]

    //если порядок ключей не важен есть встроенный метод возравщения ключей const arrayOrder = Object.keys(person)
    
    arrayOrder.forEach((order) => {
      console.log(person[order])
    })