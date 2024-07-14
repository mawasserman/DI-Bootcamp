const {getUsers} = require('./script2.js')

// console.log(getUsers('https://jsonplaceholder.typicode.com/users')); //vai ter promisse that is pending.. então eu tenho que esperar a promisse ser resolvida ou usar o then

// getUsers('https://jsonplaceholder.typicode.com/users').then(data => console.log(data)) //vai me retornar o array de users

async function info(){
    const data = await getUsers('https://jsonplaceholder.typicode.com/users');
    console.log(data);
}

info();

//a minha não tá funcionando...não sei pq