const obj = {
    a: 1,
    b: 'какая-то строка'
  };
  
  console.log(obj.a); // 1
  console.log(obj['b']); // 'какая-то строка'
  Фундаментальное отличие ссылочных типов от примитивных можно проиллюстрировать следующим кодом:
  
  let a = 1;
  let b = a;
  a = 2;
  
  console.log(a); // 2
  console.log(b); // 1
  // От манипуляций с переменной a значение переменной b не изменится
  let object = {a: 1};
  let anotherObject = object;
  object.a = 2;
  
  console.log(object.a); // 2
  console.log(anotherObject.a); // 2
  // Мы изменяли object.a, но изменилось ещё и anotherObject.a
  И дело не в let, с const результат будет тот же:
  
  const object = {a: 1};
  const anotherObject = object;
  object.a = 2;
  
  console.log(object.a); // 2
  console.log(anotherObject.a); // 2