const obj = require('./script.js')

/**
 * eu entendi que a gente vai exportar a função hello do script.js para o main.js e rodar ela aqui
 */

console.log(obj)

// se eu colocar só a function hello ele vai me retornar um objeto com a função hello dentro, mas se eu tiver um console.log dentro da função ele vai me retornar o console.log também... pq o module.exports é um objeto que contem a função hello e o console.log.. ele roda tudo que tem dentro do arquivo script.js

//ser eu quisesse export só a função hello eu teria que fazer um arquivo só pra ela e exportar só ela

/**
 * EXERCICIO
 * https://jsonplaceholder.typicode.com/users
 * usando o api de cima, tem que criar um module com uma function getUsers que retorna array of users.. precida dar fetch...usar asyn function
 */