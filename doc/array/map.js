это про трансформацию когда нужно получить другой массив

const fruits = ['apple', 'orange', 'banana'];

нужно сделать [name: 'apple'] ... 

const newFruits = fruits.map((item) => ({ name: item}))

выведет новый массив как надо