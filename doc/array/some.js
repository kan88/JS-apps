возвращает если что-то имеет тру


const task = {
    repeating: {
mon: false,
thu: false,
wen: false,
}
}

const isTaskRepeating = (repeating) => {

    const values = Object.values(repeating)

   return  values.some((item) => item === true)
}

// вернет массив false false false

// мотед every протовиположный

// predicat: return true or false