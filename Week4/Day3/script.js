/*
Aula 26/05/2024

DOM - Document Object Model !!!!!!!!!!!!!!!!!

Muito importante para manipular o HTML com o JavaScript.. vai ser muito importante para a nossa carreira.

se colocar a palavra "document" no console, ele vai mostrar o HTML inteiro.

-- vamor corrigir dever de casas agora

to ferrada, aparentemente eu sabia mais no passado do que agora

*/

// //1 A
// const divA = document.children[1].children[0];
// console.log(divA);

// //1 B
// const divB = document.children[1].firstElementChild;
// console.log(divB);

// //2 A
// const ulA = document.children[1].children[1];
// console.log(ulA);

// //2 B
// const ulB = document.children[1].firstElementChild;
// console.log(ulB);

// //3 A
// const peteA = document.children[1].children[1].children[1];
// console.log(peteA);

// //3 B
// const peteB = document.children[1].children[1].lastElementChild;
// console.log(peteB);

/* 
fui rapidinho no banheiro e voltei...
eu acho que ele só resolveu o exercicio

conferir depois se eu consegui...

getElementById - pega só um elemento
getElementsByClassName - pega todos os elementos como uma array
querySelector - pega tipo o css.. mas se tiver mais de um, ele pega só o primeiro.. para pegar todos, tem que usar o querySelectorAll

innerHTML - pega o conteudo do HTML, então pode escrever tag e tudo
innerText - pega só o texto

queryAll.forEach - para percorrer todos os elementos que ele pegou... ai pode mudar tudo de uma vez

*/

// // 1A
// const divA2 = document.getElementById("container");
// console.log(divA2);
// // 1B
// const divB2 = document.querySelector("#container");

// // 2A
// const ulA2 = document.getElementsByClassName("second-list");
// Array.from(ulA2).forEach((e) => {
//     console.log(e);
// });


// // 3. The first li of each ul

// // Write variables to get the value of the attributes of the specified link :

// // href
// const href = document.getElementById("dI").getAttribute("href");

// //hreflang
// const hreflang = document.getElementById("dI").getAttribute("hreflang");

// //rel
// const rel = document.getElementById("dI").getAttribute("rel");

// //target
// const target = document.getElementById("dI").getAttribute("target");

// //type
// const type = document.getElementById("dI").getAttribute("type");

// // mais exercicios

// const text = document.getElementById('text');

/*



*/