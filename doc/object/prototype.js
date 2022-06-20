//прототипы это создание глобальных методов функций колбэк для разных объектов
//плюс можно создавать прототипы наших объектов

const person = {
    age: 33,
    height: 175,
}

const person2 = {
    age: 30,
    height: 160,
}

Object.prototype.getInfo = function() {
    return this.age
}

console.log(person.getInfo())
console.log(person2.getInfo())

33
30

const person3 = Object.create(person);
console.log(person3.age)

33