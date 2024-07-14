/**
 * node.js é uma plataforma que permite executar javascript no servidor, fora do browser
 * 
 * site nodejs.org/en
 * 
 * node.js tem uma library gigante com packages jé prontos... a gente pode instalar esses packages e usar no nosso código
 * 
 * npm é um gerenciador de pacotes do node.js 
 * 
 * asyncronismo é uma característica do node.js
 * 
 * node.js é single-threaded
 * 
 * tem um treco que a gente pode usar para fazer o node.js ser multi-threaded que usa c++ 
 * 
 * COMANDOS NODE.JS
 * 
 * node -v --- mostra a versão do node
 * npm -v --- mostra a versão do npm
 * 
 * node -- welcome to node.js, inicia ele no terminal.. ai eu posso escrever código javascript no terminal (console.log ect)
 * 
 * ctrl + c --- para pausar(?) o node. ou duas vezes para sair
 * crtl +d --- para sair do node
 * 
 * cd + drag and drop da pasta --- para entrar na pasta
 * ls --- para listar os arquivos da pasta
 * node nomeDoArquivo.js --- para rodar o arquivo
 * 
 * seta para cima/baixo --- para ver os comandos anteriores que eu usei
 * 
 * NÃO DA PRA USAR O DOCUMENT OU O WINDOW NO NODE.JS.... NAO DA PRA USAR RENDER 
 * NÃO DA PRA READ AQUIVO HTML
 * 
 * Node module system -- é um sistema de módulos que permite a gente dividir o código em módulos
 * 
 * 
 */

console.log("Hello World");

//node module system
const hello = (name) => {
    console.log(`Hello ${name}`);
}
// hello("Ziv");
//toda vez que eu quiser rodar essa funcao eu teria que rodar tudo de novo, então eu posso exportar essa função para outro arquivo e importar ela aqui... isso é o node module system

//vai no terminal e digita node (enter) depois module (enter)... ctrl + c para sair ai volta pra função hello	
module.exports = {
    hello,
}//exportando a função hello dentro de um objeto... ZIV MUDOU PARA O FILE MAIN.JS

// se eu tiver duas funções eu posso exportar as duas dentro de um objeto e ia usar o console.log(obj.function2(parameters))

/**
 * MODULE SYSTEM É O PODER! MAIN FUNCTION DO NODE.JS
 *  
 */

/**
 * toda vez que eu quiser rodar o node.js eu tenho que rodar o comando node nomeDoArquivo.js, depois a gente vai instalar um package que vai fazer isso automaticamente, um tal de nodemoon
 * 
 * 
 */