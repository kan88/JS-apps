// const getApi = fetch('https://jsonplaceholder.typicode.com/posts')
// getApi.then((data) => {
//     data.json().then((info) => {
//         console.log(info)
//     })
// })
          
const getApi = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((data) => {return data.json()})
    .then((info) => {console.log(info)})
    .catch((err) => {
        console.log(err)
    })
}

console.log(getApi());