// метод forEach функция высшего порядка которая может применять в качестве аргумента другие функции
// всегда содержит три параметра: элемент, индекс, массив. Используется как правило первый параметр

const NAMES = ['Lena', 'Alena']

NAMES.forEach((elem) => {
    console.log(elem)
})

// "Lena"
// "Alena"


const NAMES = ['Lena', 'Alena']

NAMES.forEach((elem, i, array) => {
    console.log(i)
})

// 0
// 1

const family = ['Evgeny', 'Elena', 'Sasha', 'Maks', 'Polina'];

family.forEach((elem) => {
    console.log(elem)
})


family.forEach((elem, i) => {
    let surname = ' Kan'
    if (i == 1) {
        surname = ' Volivach'
    }
    const message = elem + surname
    console.log(message)
})