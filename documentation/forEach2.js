const family = ['Evgeny', 'Elena', 'Sasha', 'Maks', 'Polina'];

// family.forEach((elem) => {
//     console.log(elem)
// })


family.forEach((elem, i) => {
    let surname = ' Kan'
    if (i == 1) {
        surname = ' Volivach'
    }
    const message = elem + surname
    console.log(message)
})