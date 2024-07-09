/**
 * para a aula de hoje:
 * promise review
 * promise static method
 * fetch method tbm chamado api
 * async / await
 * 
 * REVIEW DAILY CHALLENGE
 * 
 * new Promisse ((resolve, reject) => {
 * usar o every method para verificar se todos os elementos de um array são palavras...retorna boolean
 * let every = words.every((word) => { typeof word === 'string' })
 * if (every) {
 *  resolve words.map(word => word.toUpperCase())
 * else {
 * reject('not all elements are strings')
 * 
 * ao longo do exercicio ele tbm usou resolve(words.sort() e .catch((error) => { console.log(error) }
 * 
 me perdi

 PROMISE STATIC METHOD

    Promise.reject / Promise.resolve

    são acho que 4 tipos de promisse static method
    promise.all([promise1, promise2, promise3])
    promise.allSettled([promise1, promise2, promise3])
    promise.any([promise1, promise2, promise3])
    promise.race([promise1, promise2, promise3])

FETCH METHOD

    fetch(url, {})

    method: GET, POST, PUT, DELETE
    headers: { 'Content-Type': 'application/json' }
    body: JSON.stringify({ key: value }) // body data type, must match "Content-Type" header

    mode: 'cors', // no-cors, *cors, same-origin
    credentials: 'same-origin', // include, *same-origin, omit

fetch vai retornar uma promisse... então vc pode usar o .then e o .catch para pegar o valor ou o erro da promisse

para resolver uma promisse vc usa o .json que é um método que retorna uma promisse

ex. fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => { 
    return response.json() 
    })
.then((data) => 
    { console.log(data)
})
.catch((error) => { console.log(error) })

vai retornar um array com os dados do json

 * 
async / await

    async function fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    await é usado para esperar a promisse ser resolvida, é como se fosse um .then e um .catch juntos
    

 */