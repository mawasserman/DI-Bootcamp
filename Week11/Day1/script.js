/**
 
Ziv prefere que as coisas funcionem e só se tiver tempo a gente gastar tempo com o css

CORREÇÃO EXERCICIO DO STAR WARS

XMLHttpRequest é um objeto que fornece funcionalidades ao cliente para transferir dados entre um cliente e um servidor. --- muito importante ler isso

Se a gente tem dois API diferentes a getne fetch duas vezes

<script src="script.js"defer async></script> --- isso é para o script ser carregado de forma assincrona, ou seja, ele não vai bloquear o carregamento da página ele vai ser carregado em paralelo

nunca fazer tudo em uma function só, sempre separar as coisas em funções diferentes
uma função faz UMA coisa só

nesses trequinhos de barra e estrela eu posso colocar no topo do meu código

@description: Função que faz a requisição para a API do Star Wars e retorna um objeto com os dados dos filmes
@param {*} num
@param {*} start
@returns random number between start to num + start
@author zivuch
@created 2021-06-14
@updated by - 
@updates date - 


async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }

tá retornando uma promisse, então eu tenho que esperar essa promisse ser resolvida.

ai agora antes dessa o Ziv ta escrevendo 
async function getInfo() {
    let random = getRamdomNumber(82, 1);
    let people = await fetchData(`https://swapi.dev/api/people/${random}/`);
    console.log(people);
    if (response.message !== "ok") {
    alert("no data");
    return}
    const {birth_year, gender, height, name} = result.restult.properties;
console.log(birth_e....

SEMPRE SEPARAR A DATA E DEPOIS SÓ MANDAR PRO RENDER 

SEMPRE CHECAR SE EU TO GETTING A NULL RESPONSE

os comentários que explicam o que a função faz são chamados de JSDoc e o ziv colocouy um na frente de cada função.. el edisse que tem um treco que depois vai fazer a documentação do código automaticamente


 */