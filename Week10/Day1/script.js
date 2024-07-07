/**
TIRANDO AS DUVIDAS QUE DA AULA PASSADA QUE EU PERDI

daily challenge dos robos... ziv vai explicar como fazer de duas maneiras

1 - for each item const (id, username, email) = item
creat element div, img,h2 e p
img.src = image ou img.setAttribute('src', image)
h2.innerText = username
p.textContent = email
appendchild tudo no div

fazendo o filter: 
ele colocou o root.innerhtml para deletar todos os elementos que estavam no root e depois add o resultado do filter

const val = e.taget.value
cont filtered = data.filter(item => {
    return item.name.toLowerCase().includes(val.toLowerCase())}

2 -  A outra maneira ele usou map 
com return `<div> <img src="${item.image}" alt=""> <h2>${item.username}</h2> <p>${item.email}</p> </div>`


*/

/**
 * AULA DE HOJE
 * 
 * ASYNC IN JS
 * 
 * quando vc coloca timeout, mesmo com 0, ele vai pro final da fila de execução do js
 * 
 * CALLBACK FUNCTION
 * 
 * function doSomething(callback) {
  // Realiza alguma tarefa
  // ...

  // Chama a função de retorno de chamada
  callback();
}

function callbackFunction() {
  console.log("A função de retorno de chamada foi chamada!");
}

// Passa a função de retorno de chamada como argumento
doSomething(callbackFunction);

PROMISES 
é um objeto que representa o sucesso ou falha de uma operação assíncrona (copilot)

ziv: é o que a palavra diz mesmo... tipo "prometo te dar 1 dolar depois da aula"
status -> pending, fulfilled, rejected
pending -> ainda não foi resolvida
fulfilled -> foi resolvida com sucesso
rejected -> foi rejeitada

let promise = new Promise((resolve, reject) => {
    resolve('not hello')

    com timeout
    setTimeout(() => { resolve(5) }, 3000)
})

promise.then((value) --- precisa do then pra pegar o valor, se não colocar ele vai retornar a promise inteira

o .catch é para pegar o erro... se vc colocar um reject ele vai cair no catch

to muito confusa... ele ta retornando promisse na promisse e eu não entendi

toda vez que eu retorno de um .then eu preciso de outro .then para pegar o valor



 */